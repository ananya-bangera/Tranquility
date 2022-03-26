var slider = document.getElementsByName("slider");
var selector = document.getElementsByName("selector");
var SelectValue = document.getElementsByName("SelectValue");
var progressBar = document.getElementsByName("progressBar");
for (let i = 0; i < SelectValue.length; i++) {
  SelectValue[i].innerHTML = slider[i].value;
  slider[i].oninput = function () {

    var value = ((this.value - this.min) / (this.max - this.min)) * 100;
    console.log(value);
    SelectValue[i].innerHTML = this.value;
    selector[i].style.left = value + "%";
    if(this.value<=5){
      SelectValue[i].style.background='#ff0000'
      this.style.background =
      "linear-gradient(to right, #ff0000 0%, #ff0000 " +
      value +
      "%, #fff " +
      value +
      "%, white 100%)";
  }
    else if(this.value>=6&&this.value<=8){
      SelectValue[i].style.background='#00FF00'
      this.style.background =
      "linear-gradient(to right, #00FF00 0%, #00FF00 " +
      value +
      "%, #fff " +
      value +
      "%, white 100%)";
    }
    else if(this.value>8){
      SelectValue[i].style.background='#FFFF00'
      SelectValue[i].style.color='black'
      this.style.background =
      "linear-gradient(to right, #FFFF00 0%, #FFFF00 " +
      value +
      "%, #fff " +
      value +
      "%, white 100%)";
    }
  
    
};
}

  




// const slideValue = document.querySelector("span");
//       const inputSlider = document.querySelector("input");
//       inputSlider.oninput = (()=>{
//         let value = inputSlider.value;
//         slideValue.textContent = value;
//         slideValue.style.left = (value/2) + "%";
//         slideValue.classList.add("show");
//       });
//       inputSlider.onblur = (()=>{
//         slideValue.classList.remove("show");
//       });

// const slideValue = document.querySelector("span");
// const inputSlider = document.querySelector("input");
// inputSlider.oninput = (()=>{
//   let value = inputSlider.value;
//   slideValue.textContent = value;
//   slideValue.style.left = (value/2)+"%";
//   slideValue.classList.add("show");
// });
// inputSlider.onblur = (()=>{
//   slideValue.classList.remove("show");
// });

// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   var r1=this.value;
//   output.innerHTML = r1;
//   if(r1<=5){
//       console.log("hek");
//       style.innerHTML = ".slider::-webkit-slider-thumb { background: red ; }";
//     }
//   else if(r1<=8&&r1>5){
//     str='energetic';
//     style.innerHTML = ".slider::-webkit-slider-thumb { background: orange ; }";

// }
//   else {
//     str='lazy';
//     style.innerHTML = ".slider::-webkit-slider-thumb { background: yellow ; }";

//   }


// }
