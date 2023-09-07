const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
btn.addEventListener('click', palidrome);
// madam
// noon
function palidrome() {
    const word = document.querySelector(".input-text").value;
    let len = word.length;
    
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    //console.log(start);
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    // let flip = end.split("").reverse().join("")
    let flip=[...end].reverse().join('')
    // alert(flip);
    if (start === flip) {
        result.innerHTML=`${word.toUpperCase()} is pallidrome`
    }
    else {
         result.innerHTML=`${word.toUpperCase()} is not pallidrome`
    }
    }
    

   


