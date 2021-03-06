// Initialize Firebase
var config = {
  apiKey: "AIzaSyBNo8sMTrwOxmsSEwAOSbZXaQeJuEP-k7Q",
  authDomain: "mywebproj-9c068.firebaseapp.com",
  databaseURL: "https://mywebproj-9c068.firebaseio.com",
  projectId: "mywebproj-9c068",
  storageBucket: "mywebproj-9c068.appspot.com",
  messagingSenderId: "161907183546"
};
firebase.initializeApp(config);

var messageRef = firebase.database().ref('messages');

$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '2002318635',
        limit: 32,
        resolution: 'standard_resolution',
        accessToken: '2002318635.1677ed0.84c7b4eacfd64c158d452f5098b50b01',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg gallery"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

    userFeed.run();
});

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function submitForm(e)
  {
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var location = getInputVal('location');
    var subject = getInputVal('subject');

    saveMessage(name, email, location, subject);

    document.getElementById('contactForm').reset();

    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      console.log(xhr.status, xhr.statusText);
      console.log(xhr.responseText);
    }
    var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
    // When the user clicks the button, open the modal 
    modal.style.display = "block";
  }

  function getInputVal(id)
  {
    return document.getElementById(id).value;
  }

  function saveMessage(name, email, location, subject)
  {
    var newMsgRef = messageRef.push();
    newMsgRef.set({
      name: name,
      email: email,
      location: location,
      subject: subject
    });
  };

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeMine")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
