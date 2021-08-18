//console.log("el javascript rahou yemchi")


// changer la valeur de chrono

let chrono = document.querySelector(".chrono")
let counter = 0


function incrementer(){
	counter++;
	let seconds = String(counter%60+100);
	let minutes = String(counter/60+100);
	chrono.innerHTML=minutes[1]+minutes[2]+":"+seconds[1]+seconds[2]
}
// 1000ms = 1s -> executi incrementer


function start(){
	setInterval(incrementer,1000) }

/*
    function stop (){
    clearInterval( chrono=counter)
}*/

function reset(){
    clearInterval( counter=0)
    
}