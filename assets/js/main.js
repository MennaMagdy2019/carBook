var nums =document.querySelectorAll(".nums .num .numm")
console.log(nums)
var statisticSec= document.getElementsByClassName("statistic")[0]
let started = false;

console.log(window.scrollY," ",statisticSec.offsetTop)
window.onscroll = function(){
   if( window.scrollY >= ((statisticSec.offsetTop)-250)){
         if(!started){  
           nums.forEach((num) => // console.log(num.textContent))
           startCount(num))
            
         }
         started =true
        
    }
}
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        //console.log(count)
        if(el.textContent == goal){
            clearInterval(count);
        }
    },2000/goal)
}

//startCount(500)