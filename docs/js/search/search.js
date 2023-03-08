const form = document.querySelector('#search');
const input = document.querySelector('#Inputtext');

let textsArray = Array();
let descriptionArray = Array();
const descIndex = { link: "<a href = 'index.html'>О Карелии - главная страница</a>", description: "1234 Очень долго республика Карелия была широко известна в&nbsp;узких кругах любителей дикого туризма, охоты и&nbsp;рыбалки, но&nbsp;теперь все изменилось. Завораживающие скалы, обилие невероятных водопадов, будоражащие воображение болота, и&nbsp;множество троп, уходящих вглубь Тайги&nbsp;&mdash; это всё среди нас, это все&nbsp;&mdash; Карелия. Карелия открылась для всех видов туризма. Нет такого направления туризма, который нельзя встретить в&nbsp;этом дивном крае:" };
const descObj_4 = { link: "<a href = 'attractions.html'>Достопримечательности Карелии</a>", description: "1234 Ладожское озеро&nbsp;&mdash; настоящая жемчужина Карелии и Ленинградской области. Его суровая и&nbsp;величественная красота волнует людей не одно столетие. Такие великие художники, как Шишкин, Клодт, Куинджи, посещали эти места и&nbsp;передавали их&nbsp;красоту в&nbsp;своих полотнах. Но&nbsp;можно&nbsp;ли передать те&nbsp;эмоции и впечатления от&nbsp;пребывания у&nbsp;Ладоги!" };

// Заполнение описаниями
descriptionArray.push(descIndex);
descriptionArray.push(descObj_4);

// Заполнение текстами
textsArray.push(descIndex); // TODO
textsArray.push(descObj_4); // TODO

function sortArticles(value) {
    let sortArray = new Array();
    for (let i = 0; i < textsArray.length; i++){
        if (textsArray[i].description.toLowerCase().includes(value.toLowerCase())) {
            sortArray.push(descriptionArray[i]);
        }
    }
    return sortArray;
}

function jsonSend(array, value) {
    let temp = value;
    if (array[0].description.toLowerCase().includes(value.toLowerCase())) {
        window.alert("Find " + temp);
        const myObj = JSON.stringify(array);
        localStorage.setItem("json", myObj);
        window.location.href = 'search.html';
    }
    return true;
}

document.getElementById('search').addEventListener('submit', function (e) { 
    e.preventDefault();  
    let value = document.getElementById('Inputtext').value;
    resultArray = Array();
    resultArray = sortArticles(value);
    jsonSend(resultArray, value);
})



