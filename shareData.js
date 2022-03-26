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
var patientName;
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);
window.onload = function () {
  var url = document.location.href,
      params = url.split('?')[1].split('&'),
      data = {}, tmp;
      
      // console.log(params);
      // console.log(tmp);
  for (var i = 0, l = params.length; i < l; i++) {
       tmp = params[i].split('=');
       tmp[1]=tmp[1].toString().replace("%20"," ");
      // //  tmp[1].toString().replace("%"," ");
      //  console.log(tmp[1]);
       data[tmp[0]] = tmp[1];
  }
  console.log(data['userName']);
  patientName=data['userName'];
  // userNameTobeAdded=data['userName'];
  // document.getElementById('here').innerHTML = data.name;
// }
// GetData.addEventListener("click", (e) => {
    var dataSleep = document.getElementById("dataSleep");
    var NameOfPatRep = document.getElementById("NameOfPatRep");
    var depressedMood = document.getElementById("depressedMood");
    var elevatedMood = document.getElementById("elevatedMood");
    var irritability = document.getElementById("irritability");
    var Anxiety = document.getElementById("Anxiety");
    var workout = document.getElementById("workout");
    // for (let i = 0; i < display.length; i++) {
    // var patientName = mild->moderate-->severe
    NameOfPatRep.innerHTML=patientName; 
    const starCountRef = ref(database, 'users/' +patientName+ "/");
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val(); // data = all data on firebse
    console.log(data);
    dataSleep.innerHTML = data['sleepHours'];
    depressedMood.innerHTML = getStatus(data['ExtremeDepressedMood']);
    elevatedMood.innerHTML = getStatus(data['ExtremeElevatedMood']);
    irritability.innerHTML = getStatus(data['ExtremeIrritability']);
    Anxiety.innerHTML = getStatus(data['ExtremeAnxiety']);
    workout.innerHTML = data['Workout']
});
}
function getStatus(val){
  if(val<=5){
    return "Mild";
}
  else if(val>=6&&val<=8){
    return "Moderate";
  }
  else if(val>8){
   return "Severe";
  }
return "None";
}
