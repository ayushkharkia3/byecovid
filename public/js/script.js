let formHidden = 0;
let medicalHidden = 0;
let helpHidden = 0;
let spreadingHidden = 0;
let suggestionHidden = 0;

function init() {
    formHidden = 0;
    medicalHidden = 0;
    helpHidden = 0;
    developmentHidden = 0;
    spreadingHidden = 0;
    donateHidden = 0;
    suggestionHidden = 0;
    document.querySelector(".form-hidden").style.display = "none";
    document.querySelector(".medical-hidden").style.display = "none";
    document.querySelector(".help-hidden").style.display = "none";
    document.querySelector(".spreading-hidden").style.display = "none";
    document.querySelector(".suggestion-hidden").style.display = "none";
}

function information() {
    if (formHidden == 0) {
        init();
        formHidden = 1;
        document.querySelector(".form-hidden").style.display = "block";
    } else {
        formHidden = 0;
        document.querySelector(".form-hidden").style.display = "none";
    }
}

function medical() {
    if (medicalHidden == 0) {
        init();
        medicalHidden = 1;
        document.querySelector(".medical-hidden").style.display = "block";
    } else {
        medicalHidden = 0;
        document.querySelector(".medical-hidden").style.display = "none";
    }
}

function help() {
    if (helpHidden == 0) {
        init();
        helpHidden = 1;
        document.querySelector(".help-hidden").style.display = "block";
    } else {
        helpHidden = 0;
        document.querySelector(".help-hidden").style.display = "none";
    }
}

function spreading() {
    if (spreadingHidden == 0) {
        init();
        helpHidden = 1;
        document.querySelector(".help-hidden").style.display = "block";
        spreadingHidden = 1;
        document.querySelector(".spreading-hidden").style.display = "block";
    } else {
        spreadingHidden = 0;
        document.querySelector(".spreading-hidden").style.display = "none";
    }
}

function suggestion() {
    if (suggestionHidden == 0) {
        init();
        helpHidden = 1;
        document.querySelector(".help-hidden").style.display = "block";
        suggestionHidden = 1;
        document.querySelector(".suggestion-hidden").style.display = "block";
        document.querySelector(".suggestion-hidden").focus();
    } else {
        suggestionHidden = 0;
        document.querySelector(".suggestion-hidden").style.display = "none";
    }
}