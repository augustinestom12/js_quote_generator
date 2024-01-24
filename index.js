const url="https://api.quotable.io/random";
let btn = document.querySelector('#btn');
let quote=document.querySelector('#quote');
let person=document.querySelector('#person');

btn.addEventListener('click',async function(){
 let response = await fetch(url);
let q=await response.json();
quote.innerText=q.content;
person.innerText=q.author;
});
