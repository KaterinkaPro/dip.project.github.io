
const text = document.querySelector('.searchResults');
// text.innerHTML = localStorage.getItem('discription');

let json = localStorage.getItem("json");
let obj = JSON.parse(json);
text.innerHTML = obj;
let str = "";
for (let i = 0; i < obj.length; i++) {
    str += `<p>${obj[i].link}<br>${obj[i].description}</p>`;
        "<p>" + obj[i].link + obj[i].description + "</p>";
}
text.innerHTML = str;