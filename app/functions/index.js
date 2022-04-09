// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const cors = require('cors')({origin: true});
const axios = require('axios');
// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
exports.getDrinks = functions.https.onRequest( async (req, res) => {
    cors(req, res, () => {

        const original = req.query.params
        return axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}/search.php?s=${original}`)
                .then(r => { return r.data.drinks; })
                .then(d => { res.send(d) })
                .catch(e => {res.sendStatus(e);})
    });
});
