const firebase = require("firebase-admin");

const Shop = require('../modal/shop');
const Suggest = require('../modal/suggest');
const Viewers = require('../modal/viewers');

const serviceAccount = require("../serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://covid19--database.firebaseio.com"
});

const db = firebase.database();

module.exports.getHomePage = (req, res, next) => {
    res.render('index', {
        notFound: false,
        registered: false,
        suggested: false
    });
}

module.exports.postView = (req, res, next) => {
    const ref = db.ref(`viewers`);
    const ref1 = db.ref(`shops/${req.body.product}`);
    const viewers = new Viewers(req.body.pincode, req.body.product, req.body.name, req.body.email);
    ref.push(viewers)
        .then(() => {
            ref1.once("value")
                .then(data => {
                    const allData = data.val();
                    const keys = Object.keys(allData);
                    const include = keys.includes(req.body.pincode);
                    if (!include) {
                        res.render('index', {
                            notFound: true
                        })
                    } else {
                        const shops = [];
                        const shopKeys = Object.keys(allData[req.body.pincode])
                        shopKeys.forEach(element => {
                            shops.push(allData[req.body.pincode][element])
                        });
                        return res.render('modal', {
                            shops: shops
                        })
                    }
                }).catch(err => {
                    console.log(err);
                })
        })
}

module.exports.postRegister = (req, res, next) => {
    const shop = new Shop(req.body.shopname, req.body.type, req.body.city, req.body.locality, req.body.contact);
    const ref = db.ref(`shops/${req.body.type}/${req.body.city}`);
    ref.push(shop)
        .then((e) => {
            res.render('index', {
                notFound: false,
                registered: true,
                suggested: false
            });
        }).catch(err => {
            console.log(err);
        })
}

module.exports.postSuggest = (req, res, next) => {
    const suggest = new Suggest(req.body.suggestion);
    const ref = db.ref(`suggest`);
    ref.push(suggest)
        .then((e) => {
            res.render('index', {
                notFound: false,
                registered: false,
                suggested: true
            });
        }).catch(err => {
            console.log(err);
        })
}