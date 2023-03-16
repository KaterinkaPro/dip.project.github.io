
const text = document.querySelector('.searchResults');
let json = localStorage.getItem("json");
let obj = JSON.parse(json);
let str = "";
for (let i = 0; i < obj.length; i++) {
    str += `<p>${obj[i].link}<br>${obj[i].description}</p>`;
}
text.innerHTML = str;