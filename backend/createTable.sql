-- User table
CREATE TABLE `User` (
    UserID VARCHAR(20) PRIMARY KEY NOT NULL,-- Adjust length as needed
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL,
    Gender VARCHAR(50) NOT NULL
);

-- Event table
CREATE TABLE `Event` (
    EventID VARCHAR(20) PRIMARY KEY NOT NULL, -- Adjust length as needed
    Title VARCHAR(255) NOT NULL,
    Description TEXT NOT NULL,
    Start DATETIME NOT NULL,
    End DATETIME NOT NULL,
    Date DATE NOT NULL,
    Status ENUM('ongoing', 'upcoming', 'ended') NOT NULL,
    Type ENUM('Public', 'Invited') NOT NULL
);

-- EventInvitations table
CREATE TABLE `EventInvitations` (
    EventID VARCHAR(20) NOT NULL,                 
    InvitedUserID VARCHAR(20) NOT NULL,            
    PRIMARY KEY (EventID, InvitedUserID),  
    FOREIGN KEY (EventID) REFERENCES `Event`(EventID) ON DELETE CASCADE, 
    FOREIGN KEY (InvitedUserID) REFERENCES `User`(UserID) ON DELETE CASCADE 
);

-- Notifications table
CREATE TABLE Notifications (
    NotificationID VARCHAR(20) PRIMARY KEY,
    UserID VARCHAR(20) NOT NULL,                      
    RelatedEntityID VARCHAR(20) NOT NULL,              
    RelatedEntityType ENUM('Event', 'User', 'Other') NOT NULL, 
    ActionType ENUM('Follow', 'Invite', 'Enroll') NOT NULL,
    ActorID VARCHAR(20),                      
    Opened BOOLEAN DEFAULT FALSE,             
    FOREIGN KEY (UserID) REFERENCES User(UserID) ON DELETE CASCADE,
    FOREIGN KEY (ActorID) REFERENCES User(UserID) ON DELETE SET NULL
);

-- Follow relationship (User follows User)
CREATE TABLE `Follow` (
    InfluencerID VARCHAR(20) NOT NULL,
    FanID VARCHAR(20) NOT NULL,
    PRIMARY KEY (InfluencerID, FanID),
    FOREIGN KEY (InfluencerID) REFERENCES User(UserID) ON DELETE CASCADE,
    FOREIGN KEY (FanID) REFERENCES User(UserID) ON DELETE CASCADE
);

-- Enroll relationship (User enrolls Event)
CREATE TABLE `Enrollment` (
    UserID VARCHAR(20) NOT NULL,
    EventID VARCHAR(20) NOT NULL,
    PRIMARY KEY (UserID, EventID),
    FOREIGN KEY (UserID) REFERENCES User(UserID) ON DELETE CASCADE,
    FOREIGN KEY (EventID) REFERENCES Event(EventID) ON DELETE CASCADE
);

-- Whishlist relationship (User add Event to whishlist)
CREATE TABLE `Wishlist` (
    UserID VARCHAR(20) NOT NULL,
    EventID VARCHAR(20) NOT NULL,
    PRIMARY KEY (UserID, EventID),
    FOREIGN KEY (UserID) REFERENCES User(UserID) ON DELETE CASCADE,
    FOREIGN KEY (EventID) REFERENCES Event(EventID) ON DELETE CASCADE
);

-- Create relationship (User creates Event)
CREATE TABLE `Create_Event` (
    OwnerID VARCHAR(20) NOT NULL,
    EventID VARCHAR(20) NOT NULL,
    PRIMARY KEY (OwnerID, EventID),
    FOREIGN KEY (OwnerID) REFERENCES User(UserID) ON DELETE CASCADE,
    FOREIGN KEY (EventID) REFERENCES Event(EventID) ON DELETE CASCADE
);

-- NOTE --
-- UserID starts with 'USR' followed by a unique String
-- EventID starts with 'EVT' followed by a unique String
-- NotificationID starts with 'NOT' followed by a unique String
