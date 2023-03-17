
const text = document.querySelector('.searchResults');
let json = localStorage.getItem("json");
let obj = JSON.parse(json);
let str = "";
    for (let i = 0; i < obj.length; i++) {
        str += `<p><a href="${obj[i].link}">${obj[i].title}</a></p><p>${obj[i].description}</p>`;
    }

text.innerHTML = str;
localStorage.clear();