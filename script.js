let car = 0;
function cartp(){;
        let car1=parseInt(document.getElementById("nofi").value,10);
        if(car+car1>20){
            alert("You can't add more than 20 items");
        }
        else{
        car=car+car1;
        document.getElementById("out").innerHTML=car;                
        }
}
function cartm(){;
    if (car>0){
    let car1=parseInt(document.getElementById("nofi").value,10);
    car=car-car1;
    document.getElementById("out").innerHTML=car;
    }
    else{
        alert("You have no items in your cart");
    }
}
