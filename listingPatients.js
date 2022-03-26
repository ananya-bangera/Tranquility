// var patient = document.getElementsByName("patientName");
// patient[0].innerHTML = userNameTobeAdded;]
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
var patName = document.getElementsByName("patientName");
var gotoPatientDet = document.getElementsByName("gotoPatientDet");
var data;
GetListOfPatients.addEventListener("click", (e) => {
    var DocNameToGeneratePatientList = document.getElementById("DocNameToGeneratePatientList").value;
    // var depressedMood = document.getElementById("depressedMood");
    // var elevatedMood = document.getElementById("elevatedMood");
    // var irritability = document.getElementById("irritability");
    // var Anxiety = document.getElementById("Anxiety");
    // var workout = document.getElementById("workout");
    // for (let i = 0; i < display.length; i++) {
    // console.log(DocNameToGeneratePatientList);
    const starCountRef = ref(database, 'Doctors/' + DocNameToGeneratePatientList);
    onValue(starCountRef, (snapshot) => {
    data = snapshot.val(); // data = all data on firebse
    // for (let i = 0; i < data.length; i++) {
    // patName[i].innerHTML= data[i+1]['userNameTobeAdded'];
    let i=0;
    for(var key in data) {
        patName[i].innerHTML= key.toString(); 
        console.log(key); 
        i++;
    }
    // }
    // console.log(data);
    // data.forEach(item => console.log(item));
    // console.log(data[2]);
    // dataSleep.innerHTML = data['sleepHours'];
    // depressedMood.innerHTML = data['ExtremeDepressedMood']
    // elevatedMood.innerHTML = data['ExtremeElevatedMood']
    // irritability.innerHTML = data['ExtremeIrritability']
    // Anxiety.innerHTML = data['ExtremeAnxiety']
    // workout.innerHTML = data['Workout']
    });
    // }
    });

gotoPatientDet[0].addEventListener("click", (e) => {
    // var username = document.getElementById("UserName").value;
    // console.log(patName[0].innerHTML);
    var nameOfPat = patName[0].innerHTML;
    location.assign('readDataTracker.html?userName='+nameOfPat);

    });

gotoPatientDet[1].addEventListener("click", (e) => {
    // var username = document.getElementById("UserName").value;
    // console.log(patName[0].innerHTML);
    var nameOfPat = patName[1].innerHTML;
    location.assign('readDataTracker.html?userName='+nameOfPat);

    });

gotoPatientDet[2].addEventListener("click", (e) => {
    // var username = document.getElementById("UserName").value;
    // console.log(patName[0].innerHTML);
    var nameOfPat = patName[2].innerHTML;
    location.assign('readDataTracker.html?userName='+nameOfPat);

    });

gotoPatientDet[3].addEventListener("click", (e) => {
    // var username = document.getElementById("UserName").value;
    // console.log(patName[0].innerHTML);
    var nameOfPat = patName[3].innerHTML;
    location.assign('readDataTracker.html?userName='+nameOfPat);

    });

gotoPatientDet[4].addEventListener("click", (e) => {
    // var username = document.getElementById("UserName").value;
    // console.log(patName[0].innerHTML);
    var nameOfPat = patName[4].innerHTML;
    location.assign('readDataTracker.html?userName='+nameOfPat);

    });

gotoPatientDet[4].addEventListener("click", (e) => {
    // var username = document.getElementById("UserName").value;
    // console.log(patName[0].innerHTML);
    var nameOfPat = patName[4].innerHTML;
    location.assign('readDataTracker.html?userName='+nameOfPat);

    });

gotoPatientDet[5].addEventListener("click", (e) => {
    // var username = document.getElementById("UserName").value;
    // console.log(patName[0].innerHTML);
    var nameOfPat = patName[5].innerHTML;
    location.assign('readDataTracker.html?userName='+nameOfPat);

    });
