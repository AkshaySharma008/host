var firebaseConfig = {
    apiKey: "AIzaSyALJ-L8OYuNChXIBurojo1MnnHN9pjoZ3A",
    authDomain: "innerve-a43dd.firebaseapp.com",
    databaseURL: "https://innerve-a43dd.firebaseio.com",
    projectId: "innerve-a43dd",
    storageBucket: "innerve-a43dd.appspot.com",
    messagingSenderId: "651253206894",
    appId: "1:651253206894:web:2204e70ab7fa178d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();


var docRef1 = firestore.doc(`Register_Data/Details`);
var docRef2 = firestore.doc("Sponsor_Email/Email");
var docRef3 = firestore.doc("Contact_Query/Query");

document.getElementById('register').addEventListener('submit', register_data);
document.getElementById('sponsor_btn').addEventListener('submit', save);
document.getElementById('contact_form').addEventListener('submit', query);

function register_data(){
    const store_name = document.getElementById('1').value;
    const store_email = document.getElementById('sub').value;
    const store_phno = document.getElementById('2').value;
    console.log(store_name,store_email,store_phno);
    docRef1.set({
        name : store_name,
        email : store_email,
        phone_no : store_phno 
    },{merge: true}).then(function () {
        window.alert("We have recieved your registration!!")
        console.log("status saved");
    }).catch(function (error){
        window.alert("There seems to be an error")
        console.log("Got an error : ",error);
    });
}

function save(e) {
    e.preventDefault();
    const Sponsor_Email = document.getElementById("sponsoremail").value;
    console.log(Sponsor_Email);
    
    docRef2.set({
        sponsor_email : Sponsor_Email,
    }).then(function() {
        window.alert("We have recieved your Contact Email");
        console.log("status saved");
    }).catch(function (error) {
        window.alert("Oops!! There seems to be an error")
        console.log("Got an error : ",error);
    })
}

function query(e) {
    e.preventDefault();
    const Contact_Email = document.getElementById("contact_email").value;
    const Contact_Message = document.getElementById("contact_message").value;
    console.log(Contact_Email,Contact_Message);
    docRef3.set({
        Contact_Email : Contact_Email,
        Contact_Message : Contact_Message,
    }).then(function () {
        window.alert("We have recieved your Query! Will reply shortly.");
        console.log("status saved");
    }).catch(function (error) {
        window.alert("Oops!! There seems to be an error")
        console.log("Got an error : ", error);
    })
}
