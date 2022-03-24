let firstH = document.querySelector("h1");
firstH.innerText = "Hello World";

let pArray = document.querySelectorAll("p");

for (let p of pArray){
    p.innerText = " Hello World ";
}

let element = document.getElementsByClassName("header");
for (let el of element){
    el.innerText = "This is a New website!";
}
let dropdownList = document.getElementById("dropdown");
console.log(dropdownList.children);
dropdownList.style.backgroundColor = "red";

let newP =  document.createElement("p");
let parent = document.getElementById("paragraph");
parent.append(newP);
newP.innerText = "New paragraph";

let aLink = document.getElementsByTagName("a");
aLink.style.backgroundColor = "green";

aLink.classlist.remove('alinkclass');
aLink.classlist.add("anotherlink");
