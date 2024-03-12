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



