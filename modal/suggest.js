module.exports = class Suggest {
    constructor(suggestion) {
        this.suggestion = suggestion;
        this.addedOn = (new Date).toString();
    }
}