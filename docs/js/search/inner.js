const headResults = document.querySelector('.headname');
const text = document.querySelector('.searchResults');
const json = sessionStorage.getItem("json");
const head = sessionStorage.getItem("value");
const obj = JSON.parse(json);
let str = "";
if (obj[0].title === "Ошибка:") {
    str = `<h4>${obj[0].title}</h4><p>${obj[0].description}</p>`;
} else {
    for (let i = 0; i < obj.length; i++) {
        str += `<p><a href="${obj[i].link}">${obj[i].title}</a></p><p>${obj[i].description}</p>`;
    }
}

headResults.innerHTML = `Результаты поиска по запросу: ${head}`;
text.innerHTML = str;
sessionStorage.clear();