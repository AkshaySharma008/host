// Your web app's Firebase configuration
        var firebaseConfig = {
          apiKey: "AIzaSyALJ-L8OYuNChXIBurojo1MnnHN9pjoZ3A",
        authDomain: "innerve-a43dd.firebaseapp.com",
        databaseURL: "https://innerve-a43dd.firebaseio.com",
        projectId: "innerve-a43dd",
        storageBucket: "",
        messagingSenderId: "651253206894",
        appId: "1:651253206894:web:2204e70ab7fa178d"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
    var messagesRef = firebase.database().ref('messages');


document.getElementById('register').addEventListener('submit', send);

    function send(e){
        e.preventDefault();
       var name = document.getElementById('1').value;
       var email = document.getElementById('sub').value;
       var phno = document.getElementById('2').value;

       saveMessage(name,email,phno);
       
    }
    

    function saveMessage(name,email,phno) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name:name,
        email:email,
        phnho:phno
      });
    }
  