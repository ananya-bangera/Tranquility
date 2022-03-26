let counter = document.querySelector('h1');
let count = 1;
setInterval(()=>{
    counter.innerText = count;
    count++
    
    if(count > 10) location.replace('yogapose2.html')
    
},1000)