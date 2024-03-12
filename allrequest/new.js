// old version 
const xhr= new XMLHttpRequest();
xhr.open("GET",'https://jsonplaceholder.typicode.com/posts',true);
xhr.onload=()=>{
console.log(JSON.parse(xhr.responseText));}
// using fetch
xhr.send()