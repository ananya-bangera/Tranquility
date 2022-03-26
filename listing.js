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
var userNameTobeAdded ="";
var patNo;
window.onload = function () {
    patNo = 1;
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
    userNameTobeAdded=data['userName'];
    // document.getElementById('here').innerHTML = data.name;
}

newBtn.addEventListener("click", (e) => {

// console.log();
console.log(userNameTobeAdded);
    var docname = document.getElementById("DocName").innerHTML;
    console.log("Dr:"+docname);
    set(ref(database, "Doctors/"+docname+"/"+userNameTobeAdded+"/"), {
    userNameTobeAdded  
      });
      // console.log(val[0]);
    // }
    alert('saved');
    patNo++;
   
    
  });