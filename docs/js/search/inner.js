
const text = document.querySelector('.searchResults');
let json = sessionStorage.getItem("json");
let obj = JSON.parse(json);
let str = "";
if (obj[0].title === "Ошибка:") {
    str = `<h4>${obj[0].title}</h4><p>${obj[0].description}</p>`;
} else {
    for (let i = 0; i < obj.length; i++) {
        str += `<p><a href="${obj[i].link}">${obj[i].title}</a></p><p>${obj[i].description}</p>`;
    }
}
if (obj.length < 4)
    
text.innerHTML = str;
sessionStorage.clear();