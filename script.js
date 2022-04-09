const rate = document.querySelectorAll('.rate');
const submit = document.querySelector('button');

// console.log(rate);
var r;
rate.forEach((ele)=>{
    // console.log(ele);
    ele.addEventListener('click',()=>{
        rate.forEach((ele2)=>{
            ele2.classList.remove('clicked-rate');
            if(ele.innerText == ele2.innerText){
                r = ele.innerText;
               ele.classList.add('clicked-rate');
                submit.classList.add('working-button'); 
                submit.disabled = false;  
            //    console.log(ele.innerText);
            }  
        })  
    })
});

submit.addEventListener('click',()=>{
    document.querySelector('.star-img').classList.add('non-display');
    rate.forEach((ele)=>{
        ele.classList.add('non-display');
    })
    document.querySelector('.title').classList.add('non-display');
    document.querySelector('.para').classList.add('non-display');
    submit.classList.add('non-display');
    //removing the existing non-display class
    document.querySelector('.summary').innerHTML = 'You selected '+ r+' out of 5' ;
    document.querySelector('.summary').classList.remove('non-display');
    document.querySelector('.thankyou-img').classList.remove('non-display');
    document.querySelector('.thankyou-title').classList.remove('non-display');
    document.querySelector('.thankyou-para').classList.remove('non-display');
    document.querySelector('.thankyou-img').style.width = '100px';

})
