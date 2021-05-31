
class LoginModel {
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password
    }
}
class FeedbackModel {
    name;
    email;
    message;

    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
}

export {
    LoginModel,
    FeedbackModel
}