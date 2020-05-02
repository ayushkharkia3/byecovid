module.exports = class Shop {
    constructor(name, type, city, locality, contact) {
        this.shopName = name;
        this.type = type;
        this.pincode = city;
        this.address = locality;
        this.contact = contact;
        this.addedOn = (new Date).toString();
    }
}