let headingOne=document.querySelector('.headingOne');
let inputOne=document.querySelector('.inputOne');
let buttonOne=document.querySelector('.buttonOne');
let errorOne=document.querySelector('.errorOne')
//console.log(headingOne)
//console.log(inputOne)
//console.log(buttonOne)
let headingtwo=document.querySelector('.headingtwo');
let inputtwo=document.querySelector('.inputtwo');
let buttontwo=document.querySelector('.buttontwo');
let errortwo=document.querySelector('.errortwo');

let chance=document.querySelector('.chance');
let count=3;
// console.log(headingtwo)
// console.log(inputtwo);
// console.log(buttontwo)
// console.log(errortwo);
 buttonOne.addEventListener('click',function(){
    //console.log('clicked')
    if(!inputOne.value){
        errorOne.innerHTML="please enter something" ;                               // console.log('Please enter something'
    }
    else if(isNaN(inputOne.value)){
        errorOne.innerHTML="please enter a number;"
    }
    else if(!(inputOne.value>0 && inputOne.value<=5)){
          errorOne.innerHTML="please give a number between 1 to 5";
    }
    else{
         //console.log('start game');
        headingtwo.style.display="block"    
        inputtwo.style.display="inline-block"    
        buttontwo.style.display="inline-block"    
        errortwo.style.display="block" 
        //chance.style.display="block";
        chance.innerHTML=`chance:${count}`
        
        headingOne.style.display="none"
        inputOne.style.display="none"
        buttonOne.style.display="none"
        errorOne.style.display="none"
    }
 })
 buttontwo.addEventListener("click",()=>{        //here arrow function is used
        //errortwo.innerHTML="clicked";
        if(!inputtwo.value){
            errortwo.innerHTML="please enter something" ;                    
        }
        else if(isNaN(inputtwo.value)){
            errortwo.innerHTML="please enter a number;"
        }
        else if(!(inputtwo.value>0 && inputtwo.value<=5)){
              errortwo.innerHTML="please give a number between 1 to 5";
        }
        else{
            if(count>1){
               count--
                chance.innerHTML=`chance:${count}`
                if(inputOne.value==inputtwo.value){
                    errortwo.innerHTML="Player Two is winer"
                    buttontwo.style.display="none"    
                }
                
                
            }
          
          else{             //else part ta count = 0  and chance.innerHTML=`chance:${count}`akane bujlam nah.
            count=0;
             chance.innerHTML=`chance:${count}`
            errortwo.innerHTML="Player One is winner"
            buttontwo.style.display="none"    
          }
        }
 })