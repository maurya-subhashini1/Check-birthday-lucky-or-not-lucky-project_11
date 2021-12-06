const dateOfBirth=document.querySelector("#date-of-birth")
const luckyNumber=document.querySelector("#lucky-number")
const chackNumberButton=document.querySelector("#chack-button")
const outputBox=document.querySelector("#output-box")



function compareValues(sum,luckyNumber){
    if(sum%luckyNumber==0){
        outputBox.innerText="Your birthday is lucky  🎉🎂";
    }else{
        outputBox.innerText="Your birthday is not lucky 😐😐";
    }
}



function chackBirthdateIsLucky(){
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    if(sum&&dob){
    compareValues(sum,luckyNumber.value)
    }else{
    outputBox.innerText="please enter both the fields👇";
    }
}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++){
        sum=sum+Number(dob.charAt(index));
    }
    return sum

}






chackNumberButton.addEventListener("click",chackBirthdateIsLucky)
   