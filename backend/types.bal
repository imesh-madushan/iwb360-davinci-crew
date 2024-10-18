type User record {|
    readonly string UserID;
    string Name;
    string Email;
    string Password;
    string Gender;
|};

type Event record {|
    readonly string EventID;
    string Title;
    string Description;
    string Start;
    string End;
    string Date;
    string Status;
    string Type;
|};

type EventInvitations record {|
    string EventID;
    string InvitedUserID;
|};

type Notifications record {|
    readonly string NotificationID;
    string UserID;
    string RelatedEntityID;
    string RelatedEntityType;
    string ActionType;
    string? ActorID;
    boolean Opened = false;
|};

type Follow record {|
    string InfluencerID;
    string FanID;
|};

type Enrollment record {|
    string UserID;
    string EventID;
|};

type Wishlist record {|
    string UserID;
    string EventID;
|};

type Create_Event record {|
    string OwnerID;
    string EventID;
|};


//DTOs
type UserRegisterDTO record {|
    string Name;
    string Email;
    string Password;
    string Gender;
|};