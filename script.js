const buttons=document.getElementsByClassName('btn');
for(button of buttons){
    // button.classList.add('bg-lime-400')
    button.addEventListener('click',function(event){

        
        name=event.target.parentNode.childNodes[1].innerText;
// console.log(name);
price=event.target.parentNode.childNodes[3].childNodes[1].innerText;
// console.log(price);
catagory=event.target.parentNode.childNodes[5].childNodes[1].innerText
    // console.log(catagory) 
    // ---------------------------
const newDiv=document.createElement('div') ;
newDiv.classList.add("grid")
newDiv.classList.add("grid-cols-3")

const p1=document.createElement('p')  ;
const p2=document.createElement('p')  ;
const p3=document.createElement('p')  ;

newDiv.appendChild(p1);
newDiv.appendChild(p2);
newDiv.appendChild(p3);


const appendDiv=document.getElementById('newDiv');
appendDiv.appendChild(newDiv);


p1.innerText=name;
p2.innerText=price;
p3.innerText=catagory;
    
// -----------------------------
const totalAmount=document.getElementById('total-amount');
   const getTotalAmount=parseInt(totalAmount.innerText)+ parseInt(price);
// console.log(getTotalAmount);
totalAmount.innerText=getTotalAmount;


const grandtotalAmount=document.getElementById('grand-total');
 grandtotalAmount.innerText=getTotalAmount;
// -----------------------------------------------


const budgetLimitation=document.getElementById('budget');
const convertBudget=parseInt (budgetLimitation.innerText);
// console.log(typeof convertBudget)
const convertPrice=parseInt(price);
// console.log(typeof convertPrice)
const budget=convertBudget-convertPrice;
// console.log(budget)
budgetLimitation.innerText=budget;

const cartLimitation=document.getElementById('cart');
const cart=parseInt(cartLimitation.innerText)+1;
const cartValue= cartLimitation.innerText=cart;

if(cartValue>6){
    console.log('continue')
}
else{
    console.log('carry on')
}



const leftLimitation=document.getElementById('left');
leftLimitation.innerText=parseInt(leftLimitation.innerText)-1;
// --------------------------------------------



    })
}





// -----------------string number converted integer number----------------

convertValueInteger("budget")
convertValueInteger("cart")
convertValueInteger("left")

function convertValueInteger(elementId){
    const value=document.getElementById(elementId);
    const convertInteger=parseInt(value.innerText); 
    // console.log(convertInteger)
    return convertInteger ; 
}
// -------------------------------------------


// const cartCount =document.getElementById('cart')
// if(cartCount.innerText<5){
//     console.log('where are you now')
// }
// else{
//     console.log('you are foolish')
// }
