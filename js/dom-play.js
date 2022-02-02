const spans = document.querySelectorAll('div#play span')

console.log(spans);

for(const mySpan of spans){
    
    mySpan.addEventListener('click',function(ev){
        //alert(mySpan.dataset.actor); // refers to data-actor
        highlightActor(mySpan.dataset.actor);
    }); //ev for event
}


function highlightActor(myActor){ //highlightActor = function

    for(const mySpan of spans){
        if(myActor == mySpan.dataset.actor){
        mySpan.style.backgroundColor='yellow';
        }else{
        mySpan.style.backgroundColor='white';
    }

}

}