let counter = document.querySelector('h1');
let count = 1;
setInterval(()=>{
    counter.innerText = count;
    count++
    
    if(count > 10) location.replace('yogapose4.html')
    
},1000)