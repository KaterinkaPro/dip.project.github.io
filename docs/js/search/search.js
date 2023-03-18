const form = document.querySelector('#search');
const input = document.querySelector('#Inputtext');

async function main() {
    // Переменные для хранения текста страниц.
    let index = null;
    let history = null;
    let nature = null;
    let attractions = null;

    const response = await fetch('index.html');
    if (response.ok) {
        index = await getText('index.html');
        history = await getText('about_karelia/history.html');
        nature = await getText('about_karelia/nature.html');
        attractions = await getText('attractions');
    } else {
        index = await getText('../index.html');
        history = await getText('../about_karelia/history.html');
        nature = await getText('../about_karelia/nature.html');
        attractions = await getText('../attractions');
    }
    
    let textsArray = Array();

    const indexObj = {title: "О Карелии - главная страница", link: "index.html", keywords: "qwerty", description: "Очень долго республика Карелия была широко известна в&nbsp;узких кругах любителей дикого туризма, охоты и&nbsp;рыбалки, но&nbsp;теперь все изменилось. Завораживающие скалы, обилие невероятных водопадов, будоражащие воображение болота, и&nbsp;множество троп, уходящих вглубь Тайги&nbsp;&mdash; это всё среди нас, это все&nbsp;&mdash; Карелия. Карелия открылась для всех видов туризма. Нет такого направления туризма, который нельзя встретить в&nbsp;этом дивном крае", text: "1234" + index };
    
    const historyObj = { title: "История Карелии", link: "about_karelia/history.html", keywords: "qwerty", description: "В&nbsp;процессе миграции людей по&nbsp;территориям, прилегающим к&nbsp;Карелии, исторически сложились три группы племён: вепсы, жившие между Ладожским и&nbsp;Онежским озерами; саами (лопари), занимавшие практически всю территорию современной Карелии и&nbsp;карелы, жившие к&nbsp;западу и&nbsp;северу от&nbsp;Ладожского озера. Само название Карелия приобрела благодаря одноименному населению. Основными занятиями древнейших жителей являлись охота и&nbsp;рыболовство. Об&nbsp;их&nbsp;жизни и&nbsp;быте нам помогают узнать археологические находки и&nbsp;сохранившиеся до&nbsp;наших времен наскальные рисунки&nbsp;&mdash; петроглифы.", text: "1234" + history };

    const natureObj = { title: "Природа Карелии", link: "about_karelia/nature.html", keywords: "qwerty", description: "Природа Карелии очаровывает любого, кто хоть единожды бывал в&nbsp;этих местах. И&nbsp;это неслучайно. Красивая северная природа изобилует буйными реками с&nbsp;крутыми порогами, девственно чистыми лесами, разнообразной флорой и&nbsp;фауной. В&nbsp;Карелии насчитывается более 60&nbsp;000&nbsp;озер, самые известные и&nbsp;самые крупные из&nbsp;которых&nbsp;&mdash; Онежское и&nbsp;Ладожское. В&nbsp;республике протекает множество рек и&nbsp;речушек, но&nbsp;все они короткие. Самая длинная из&nbsp;них&nbsp;&mdash; Кемь протяженностью в&nbsp;360&nbsp;км. Также есть и&nbsp;болота и&nbsp;водопады. Именно водоемы в&nbsp;сочетании с&nbsp;карельскими лесами и&nbsp;создают тот удивительный климат, который очаровывает всех.", text: "1234" + nature };
    
    const atrractionsObj = { title: "Достопримечательности Карелии", link: "attractions.html", keywords: "qwerty", description: "Ладожское озеро&nbsp;&mdash; настоящая жемчужина Карелии и Ленинградской области. Его суровая и&nbsp;величественная красота волнует людей не одно столетие. Такие великие художники, как Шишкин, Клодт, Куинджи, посещали эти места и&nbsp;передавали их&nbsp;красоту в&nbsp;своих полотнах. Но&nbsp;можно&nbsp;ли передать те&nbsp;эмоции и впечатления от&nbsp;пребывания у&nbsp;Ладоги!", text: "1234" + attractions };
    
    //! TODO
    // const nameObj1 = { title: "", link: "",  description: "", keywords: "qwerty", text: name1 };
    // const nameObj2 = { title: "", link: "", description: "", keywords: "qwerty", text: name2 };
    // const nameObj3 = { title: "", link: "", description: "", keywords: "qwerty", text: name3 };
    // const nameObj4 = { title: "", link: "", description: "", keywords: "qwerty", text: name4 };
    // const nameObj5 = { title: "", link: "", description: "", keywords: "qwerty", text: name5 };
    // const nameObj6 = { title: "", link: "", description: "", keywords: "qwerty", text: name6 };
    // const nameObj7 = { title: "", link: "", description: "", keywords: "qwerty", text: name7 };
    // const nameObj8 = { title: "", link: "", description: "", keywords: "qwerty", text: name8 };


    // Заполнение JSON-объектами: ссылка, описание, текст
    textsArray.push(indexObj);
    textsArray.push(historyObj);
    textsArray.push(natureObj);
    textsArray.push(atrractionsObj);

    //! TODO
    // textsArray.push(nameObj1);
    // textsArray.push(nameObj2);
    // textsArray.push(nameObj3);
    // textsArray.push(nameObj4);
    // textsArray.push(nameObj5);
    // textsArray.push(nameObj6);
    // textsArray.push(nameObj7);
    // textsArray.push(nameObj8);
    
    async function getText(url) {
        const resp = await fetch(url);
        const text = await resp.text();
        return text;
    }

    function fillDescription(count, maxCharCount) {
        textsArray[count].description = textsArray[count].description.slice(0, maxCharCount) + "...";
        return textsArray[count];
    }
    
    function sortArticles(value, maxCharCount) {
        let sortArray = new Array();
        for (let i = 0; i < textsArray.length; i++) {
            if (textsArray[i].keywords.toLowerCase().includes(value.toLowerCase())) {
                sortArray.push(fillDescription(i, maxCharCount));
        } else if (textsArray[i].text.toLowerCase().includes(value.toLowerCase())) {
                sortArray.push(fillDescription(i, maxCharCount))
            }
        }
        return sortArray;
    }
    
    async function jsonSend(array, value) {
        let temp = value;
        // window.alert("Find " + temp); //! NOT NEEDED, just a check
        const myObj = JSON.stringify(array);
        sessionStorage.setItem("json", myObj);
        if (response.ok) {
            window.location.href = 'search.html';
        } else {
            window.location.href = '../search.html';
        }
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let value = input.value;
        resultArray = Array();
        resultArray = sortArticles(value, 400);
        jsonSend(resultArray, value);
    })
}

main();     
