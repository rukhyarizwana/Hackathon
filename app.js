
let clicked = false;  //initially dropdown is closed

let arrows = document.querySelectorAll('.arrow');  // getting array of all elements having the class "arrow"

// in out case, we have 2 elements with class "arrow".so we will get array of 2 img elements

for(let i=0;i<arrows.length;i++){                // looping through the array to access each element individually and add event listener

    arrows[i].addEventListener('click', ()=>{

        if(clicked===false){
            // arrows[i].firstElementChild.style.transition='1s';
            arrows[i].firstElementChild.style.transform='rotate(180deg)';  //rotating img to 180 degree
            clicked=true  //true means that dropdown is opened
        }
        else if(clicked===true){
            arrows[i].firstElementChild.style.transform='rotate(0deg)';  //rotatting img back to 0 degree
            clicked=false //false means that the dropdown is not opened
        }
        
    })

}




