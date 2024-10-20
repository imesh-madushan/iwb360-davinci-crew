import ballerina/http;

@http:ServiceConfig {
    cors: {
        allowOrigins: ["*"]
    }
}

service /api on new http:Listener(9090) {

    resource function get users() returns User[]|error {
        return selectAllUsers();
    }

    resource function get user(int id) returns User|error|http:Created {
        return getUser(id);
    }

    resource function post userSignIn(UserLoginDTO user) returns User|error|http:InternalServerError {
        return logUser(user);
    }
    resource function post userSignUp(UserRegisterDTO newUser) returns User|error|http:InternalServerError {
        return insertUser(newUser);
    }
}
