import ballerina/sql;
import ballerinax/mysql;
import ballerina/random;

configurable int port = ?;
configurable string host = ?;
configurable string user = ?;
configurable string database = ?;
configurable string password = ?;
configurable mysql:Options & readonly connectionOptions = ?;


mysql:Client dbClient = check new (
    host = host,
    port = port,
    database = database,
    user = user,
    password = password,
    options = connectionOptions
);

function insertUser (UserRegisterDTO newUser) returns User|error {
    string tabel = "User";
    
    //check if email already exists
    sql:ParameterizedQuery checKEmailQuery = `SELECT Email FROM user WHERE Email = ${newUser.Email}`;
    stream<record{}, error?> resultStream = dbClient->query(checKEmailQuery);
    record{}|error? result = resultStream.next();

    if (result is record{}) {
        return error("Email already exists");
    }

    //insert the user to the database
    string|error randomID =  generateRandomId(tabel);
    if (randomID is error) {
        return error("Error while generating the random ID");
    }

    sql:ParameterizedQuery insertQuery = `INSERT INTO user (UserID, Name, Email, Gender, Password) VALUES 
                                        (${randomID}, ${newUser.Name}, ${newUser.Email}, ${newUser.Gender}, ${newUser.Password})`;
    var saveResult = dbClient->execute(insertQuery);

    if (saveResult is sql:Error) {
        return error("Error while saving the user");
    }

    //get the user from the database
    sql:ParameterizedQuery selectQuery = `SELECT UserID, Name, Email, Gender FROM user WHERE UserID = ${randomID}`;
    User newSavedUser = check dbClient->queryRow(selectQuery);
    newSavedUser.Password = "********";

    return newSavedUser;
}   

function logUser (UserLoginDTO user) returns User|error {
    sql:ParameterizedQuery selectQuery = `SELECT UserID, Name, Email, Gender FROM user WHERE Email = ${user.Email} AND Password = ${user.Password}`;
    User usr = check dbClient->queryRow(selectQuery);
    usr.Password = "********";
    
    return usr;
}


function getUser (int id) returns User|error{
    sql:ParameterizedQuery selectQuery = `SELECT UserID, Name, Email, Gender FROM user WHERE id = ${id}`;
    return dbClient->queryRow(selectQuery);
}

function selectAllUsers () returns User[]|error{
    sql:ParameterizedQuery selecyAllquery = `SELECT UserID, Name, Email, Gender FROM user`;
    stream<User, error?> userStream = dbClient->query(selecyAllquery);
    return from User user in userStream select user;
}


//generate random ID for evry table 
function generateRandomId(string tabel) returns string|error {
    string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    string randomID = "";
    int ID_LENGTH = 15;
    string Key = "";

    foreach int i in 0 ..< ID_LENGTH {
        int randomCharIndex = check random:createIntInRange(0, chars.length());
        string randomChar = chars[randomCharIndex];

        randomID += randomChar;
    }

    if (tabel == "User") {
        randomID = "USR" + randomID;
        Key = "UserID";
    } 
    else if (tabel == "Event") {
        randomID = "EVT" + randomID;
        Key = "EventID";
    }
    else if (tabel == "Notification") {
        randomID = "NOT" + randomID;
        Key = "NotificationID";
    }

    sql:ParameterizedQuery selectQuery = `SELECT ${Key} FROM ${tabel} WHERE ${Key} = ${randomID}`;
    stream<record{}, error?> resultStream = dbClient->query(selectQuery);
    record{}|error? result = resultStream.next();

    if (result is record{}) {
        return generateRandomId(tabel);        
    }

    return randomID;
}