
var firebaseConfig = {
    apiKey: "redventure-case-comp",
    authDomain: "redventure-case-comp.firebaseapp.com",
    databaseURL: "https://redventure-case-comp.firebaseio.com",
    projectId: "redventure-case-comp",
    storageBucket: "redventure-case-comp.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id",
};

var arrayofShowData = [];


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



$(function () {
    db.collection("ShowDataCollection").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            arrayofShowData[arrayofShowData.length] = doc;
        })
    })
})





