const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


firebase.initializeApp({
    apiKey: "AIzaSyALJ-L8OYuNChXIBurojo1MnnHN9pjoZ3A",
    authDomain: "innerve-a43dd.firebaseapp.com",
    projectId: 'innerve-a43dd'
});

var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});