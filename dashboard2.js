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



function preloadFunc()
{
    var DocNameToGeneratePatientList = document.getElementsByName("patientName");
    const starCountRef = ref(database, 'users/' + 'Labeeb Asari');
    onValue(starCountRef, (snapshot) => {
    data2 = snapshot.val();
    console.log("inside"+data2.ExtremeAnxiety);
     // data = all data on firebse
    
    anychart.onDocumentReady(function() {

        // set the data
        var data = [
            
            {x: "Socialising", value: data2.ExtremeDepressedMood},
            // {x: "Elevated Mood", value: data2.ExtremeElevatedMood},
            {x: "Physical Exercise", value: data2.Workout},
            {x: "Sleep Hours", value: data2.sleepHours},
            {x: "Work", value: data2.work},
            {x: "Entertainment", value: data2.entertainment}
        ];
      
        // create the chart
        var chart = anychart.pie();
      
        // set the chart title
        chart.title("Population by Race for the United States: 2010 Census");
      
        // add the data
        chart.data(data);
      
        // display the chart in the container
        chart.container('container-charts1');
        chart.draw();});

        //second any d
        anychart.onDocumentReady(function () {
            // create bar chart
            var chart = anychart.bar();
      
            chart.animation(true);
      
            chart.padding([10, 40, 5, 20]);
      
            chart.title('Top 10 Cosmetic Products by Revenue');
      
            // create bar series with passed data
            var series = chart.bar([
              ['Anxiety', data2.ExtremeAnxiety*6],
              ['Irritability', data2.ExtremeIrritability*6],
              ['Extreme Depressed Mood', data2.ExtremeDepressedMood*6],
              ['Extreme Elevated Mood', data2.ExtremeElevatedMood*6],
              ['Physical Exercise', data2.Workout*6],
              ['Sleep Hours', data2.sleepHours*6],
              ['Work', data2.work*6],
              ['Entertainment', data2.entertainment*6],
            //   ['Lipstick', '128000'],
            //   ['Lip gloss', '110430'],
            //   ['Mascara', '102610'],
            //   ['Foundation', '94190'],
            //   ['Rouge', '80540'],
            //   ['Powder', '53540']
            ]);
      
            // set tooltip settings
            series
              .tooltip()
              .position('right')
              .anchor('left-center')
              .offsetX(5)
              .offsetY(0)
              .titleFormat('{%X}')
              .format('${%Value}');
      
            // set yAxis labels formatter
            chart.yAxis().labels().format('{%Value}{groupsSeparator: }');
      
            // set titles for axises
            chart.xAxis().title('Products by Revenue');
            chart.yAxis().title('Revenue in Dollars');
            chart.interactivity().hoverMode('by-x');
            chart.tooltip().positionMode('point');
            // set scale minimum
            chart.yScale().minimum(0);
      
            // set container id for the chart
            chart.container('container-charts2');
            // initiate chart drawing
            chart.draw();
          });

          //
          anychart.onDocumentReady(function () {
            // create line chart
            var chart = anychart.line();
      
            // set chart padding
            chart.padding([10, 20, 5, 20]);
      
            // turn on chart animation
            chart.animation(true);
      
            // turn on the crosshair
            chart.crosshair(true);
      
            // set chart title text settings
            chart.title('Users  during the Week');
      
            // set y axis title
            chart.yAxis().title('Activity occurrences');
      
            // create logarithmic scale
            var logScale = anychart.scales.log();
            logScale.minimum(1).maximum(45000);
      
            // set scale for the chart, this scale will be used in all scale dependent entries such axes, grids, etc
            chart.yScale(logScale);
      
            // create data set on our data,also we can pud data directly to series
            var dataSet = anychart.data.set([
              ['Monday', data2.ExtremeAnxiety*10.5, data2.ExtremeIrritability*11.2, '123.5'],
              ['Tuesday', data2.ExtremeAnxiety*7.20, data2.ExtremeIrritability*13.6, '18.910'],
              ['Wednesday', data2.ExtremeAnxiety*4.04, data2.ExtremeIrritability*12.3, '190.04'],
              ['Thursday', data2.ExtremeAnxiety*11.9, data2.ExtremeIrritability*10.2, '222.33'],
              ['Friday', data2.ExtremeAnxiety*11.5, data2.ExtremeIrritability*12.5, '92.2'],
              ['Saturday', data2.ExtremeAnxiety*10, data2.ExtremeIrritability*6.5, '53.4'],
              ['Sunday', data2.ExtremeAnxiety*10.7, data2.ExtremeIrritability*9.7, '34.3']
            ]);
      
            // map data for the first series,take value from first column of data set
            var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
      
            // map data for the second series,take value from second column of data set
            var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
      
            // map data for the third series, take x from the zero column and value from the third column of data set
            var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });
      
            // temp variable to store series instance
            var series;
      
            // setup first series
            series = chart.line(firstSeriesData);
            series.name('Anxiety');
            // enable series data labels
            series.labels().enabled(true).anchor('left-bottom').padding(5);
            // enable series markers
            series.markers(true);
      
            // setup second series
            series = chart.line(secondSeriesData);
            series.name('Depression');
            // enable series data labels
            series.labels().enabled(true).anchor('left-bottom').padding(5);
            // enable series markers
            series.markers(true);
      
            // setup third series
            series = chart.line(thirdSeriesData);
            series.name('Others');
            // enable series data labels
            series.labels().enabled(true).anchor('left-bottom').padding(5);
            // enable series markers
            series.markers(true);
      
            // turn the legend on
            chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);
      
            // set container for the chart and define padding
            chart.container('container-charts3');
            // initiate chart drawing
            chart.draw();
          });
      
   
})
    }

window.onpaint = preloadFunc();


