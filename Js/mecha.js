
//Включение строгого режима
"use sctrict"
//Включение строгого режима


function showMessageH() {
	const el = document.getElementById("block_one");
	el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
}


function showMessageA() {
const el= document.getElementById("block_twos");
	el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
}

function showMessageE() {
const el= document.getElementById("block_four");
	el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
}

function showMessageT() {
const el= document.getElementById("block_five");
	el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
}
/*Пока что этих блоков нет
function showMessageW() {
const el= document.getElementById("block_twos");
	el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
}

function showMessageP() {
const el= document.getElementById("block_twos");
	el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
}

function showMessageC() {
const el= document.getElementById("block_twos");
	el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
}
Пока что этих блоков нет*/

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');

for (let elm of elements) {
  observer.observe(elm);
}