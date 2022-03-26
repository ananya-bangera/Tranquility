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
var data2;
console.log("hello");
console.log("hello");
// preloadFunc()
// console.log(data2.ExtremeAnxiety);

function preloadFunc()
{
    var DocNameToGeneratePatientList = document.getElementsByName("patientName");
    const starCountRef = ref(database, 'users/' + 'Labeeb Asari');
    onValue(starCountRef, (snapshot) => {
    data2 = snapshot.val();
    console.log("inside"+data2.ExtremeAnxiety);
     // data = all data on firebse
     google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['School & Studies', 10],
        ['Eat', data2.ExtremeDepressedMood],
        ['Commute', data2.ExtremeElevatedMood],
        ['Watch TV', data2.Workout],
        ['Sleep', data2.ExtremeIrritability]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

$(window).resize(function () {
    preloadFunc();
    drawStuff()
    drawChart2();
});


    // let i=0;
    });
}
window.onpaint = preloadFunc();




// anychart.onDocumentReady(function() {

//     // set the data
//     console.log(data2);
//     console.log(data2.ExtremeAnxiety);
//     var data = [
//         {x: "White", value: data2.ExtremeAnxiety},
//         {x: "Black or African American", value: data2.ExtremeDepressedMood},
//         {x: "American Indian and Alaska Native", value: data2['ExtremeElevatedMood']},
//         {x: "Asian", value: data2['ExtremeIrritability']},
//         {x: "Native Hawaiian and Other Pacific Islander", value: data2['Workout']},
//         {x: "Some Other Race", value: data2['sleepHours']},
//         {x: "Two or More Races", value: data2['work']}
//     ];
  
//     // create the chart
//     var chart = anychart.pie();
  
//     // set the chart title
//     chart.title("Population by Race for the United States: 2010 Census");
  
//     // add the data
//     chart.data(data);
  
//     // display the chart in the container
//     chart.container('container');
//     chart.draw();
  
//   });