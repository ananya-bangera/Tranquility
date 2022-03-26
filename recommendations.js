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
var data;
const starCountRef = ref(database, 'users/' + 'Labeeb Asari');
onValue(starCountRef, (snapshot) => {
data = snapshot.val();
var extremeAnxiety = data.ExtremeAnxiety;
var extremeDepressedMood = data.ExtremeDepressedMood;
var extremeElevatedMood = data.ExtremeElevatedMood;
var extremeIrratibility = data.ExtremeIrritability;
var workout = data.Workout;
var sleepHours = data.sleepHours;
var workHours = data.work;
var entertainmentHours = data.entertainment;

if (sleepHours<3 || sleepHours >12) 
    {sleepHours=-5}
else if( 3<sleepHours<5.5)
    {sleepHours= sleepHours}
else if (5.5 <sleepHours <8.5 )
    {sleepHours = 2*sleepHours}
else if (sleepHours <12) 
    {sleepHours = -3}
else 
    {sleepHours = 5}

if (4<workHours<10 )
    {workHours=2*workHours}
else 
    {workHours = -4}

if (entertainmentHours<2 || entertainmentHours >3.5)
    {entertainmentHours = -3 }
else { entertainmentHours = 2*entertainmentHours}


var score1 = -extremeAnxiety -extremeDepressedMood -extremeElevatedMood - extremeIrratibility + 2*workout + sleepHours + workHours + entertainmentHours
    if(15<score1&&score1<20){
        location.assign('depressed(15-20).html');
    }
    else if(19<score1&&score1<=30){
        location.assign('Sad(20-30).html');
    }
    else {
        location.assign('Happy(30-50).html');
    }


});
