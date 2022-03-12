
function addition(){
  let numberOne = parseInt(document.getElementById("numberOneAddition").value);
  let numberTwo = parseInt(document.getElementById("numberTwoAddition").value);
  document.getElementById("buttonAddition").innerHTML= (numberOne+numberTwo).toString();
}
function subtraction(){
  let numberOne = parseInt(document.getElementById("numberOneSubtraction").value);
  let numberTwo = parseInt(document.getElementById("numberTwoSubtraction").value);
   document.getElementById("buttonSubtraction").innerHTML= (numberOne-numberTwo).toString();
}
function multiplication(){
  let numberOne = parseInt(document.getElementById("numberOneMultiplication").value);
  let numberTwo = parseInt(document.getElementById("numberTwoMultiplication").value);
  document.getElementById("buttonMultiplication").innerHTML= (numberOne*numberTwo).toString();
}

function division(){
  let numberOne = parseInt(document.getElementById("numberOneDivision").value);
  let numberTwo = parseInt(document.getElementById("numberTwoDivision").value);
 document.getElementById("buttonDivision").innerHTML= (numberOne/numberTwo).toString();
}

function refreshPage(){
  window.location.reload();
}

/*
const Calculate = (guessOne, guessTwo, callback) => {
  const result = guessOne * guessTwo
  callback(result)
}

Calculate(1,2, (result)=> {
  document.getElementById("result").innerHTML=result
})


const sumar = (a,b=0)=> {
  return a+b
}

sumar (1)

const restar = (a,b=0)=> {
  return a-b
}
restar(a)
*/
