var bdateInput = document.querySelector("#dateEl");
var numberEl=document.querySelector("#lucky-number");
var messageEl=document.querySelector("#outputmesage")
var btnEl=document.querySelector("#btn-el")

function checkLuckyNo(sum,luckyNo){
  //var luckyNo=numberEl.value;
 
  
  if (sum%luckyNo===0){
    
    messageEl.innerText="wo wo wo !! Your birthday is lucky number"
  }
  else{
   
    messageEl.innerText="Sorry!! Your birthday is not lucky number"
  }
}


function luckyBdayorNot(){
  var bdate=bdateInput.value;
  const sum=calculateSum(bdate);
  
  checkLuckyNo(sum,numberEl.value)

}

function calculateSum(bdate){
  bdate=bdate.replaceAll("-","");
  let sum=0;
  for (let index=0;index<bdate.length;index++){
    sum=sum+Number(bdate.charAt(index))
  }
  return sum;
}


btnEl.addEventListener("click", luckyBdayorNot)