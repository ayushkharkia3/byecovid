module.exports = class Viewers {
    constructor(pincode, type, name, email) {
        this.pincode = pincode;
        this.type = type;
        this.name = name;
        this.email = email;
        this.addedOn = (new Date).toString();
    }
}