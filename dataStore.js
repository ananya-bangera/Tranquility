// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {
  getDatabase,ref,set,onValue
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyCgh8dAnzUY5SXmmfTDP9eYUApLimc9FKU",
  authDomain: "mental-health-web-page.firebaseapp.com",
  databaseURL:
    "https://mental-health-web-page-default-rtdb.firebaseio.com",
  projectId: "mental-health-web-page",
  storageBucket: "mental-health-web-page.appspot.com",
  messagingSenderId: "913132666370",
  appId: "1:913132666370:web:130ada578162ef0268b11b",
  measurementId: "G-0424RK3MB0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);
SaveData.addEventListener("click", (e) => {
  var val = document.getElementsByName("slider");
  
  // for (let i = 0; i < val.length; i++) {
    // const crypto = require("crypto");
    // hash = crypto.getHashes();
    // hashPwd = crypto.createHash('sha1').update(username).digest('hex');
    // console.log(hash);
    var username = document.getElementById("UserName").value;
    console.log("User:"+username);
    set(ref(database, "users/"+username+"/"), {
      sleepHours: val[0].value,
      ExtremeElevatedMood: val[1].value,
      ExtremeDepressedMood: val[2].value,
      ExtremeIrritability: val[3].value,
      ExtremeAnxiety: val[4].value,
      Workout: val[5].value,
      Entertainment: val[6].value,
      Work: val[7].value,
      
      
    });
    // console.log(val[0]);
  // }
  alert('saved');
 
  
});
ShareData.addEventListener("click", (e) => {
  var username = document.getElementById("UserName").value;
  location.assign('listOfTheraphits.html?userName='+username);
});



