const form = document.querySelector('#search');
const input = document.querySelector('#Inputtext');

// TODO history = fillText('about_karelia/history.html');

let textsArray = Array();
const textIndex = { link: "<a href = 'index.html'>О Карелии - главная страница</a>", description: "", text: "1234 Очень долго республика Карелия была широко известна в&nbsp;узких кругах любителей дикого туризма, охоты и&nbsp;рыбалки, но&nbsp;теперь все изменилось. Завораживающие скалы, обилие невероятных водопадов, будоражащие воображение болота, и&nbsp;множество троп, уходящих вглубь Тайги&nbsp;&mdash; это всё среди нас, это все&nbsp;&mdash; Карелия. Карелия открылась для всех видов туризма. Нет такого направления туризма, который нельзя встретить в&nbsp;этом дивном крае: <ul><li>&nbsp;путешественники</li><li>&nbsp;любители активного отдыха</li><li>&nbsp;любители экстремального туризма</li><li>&nbsp;любители спортивного туризма</li><li>&nbsp;туризм для детей и&nbsp;молодежи</li><li>&nbsp;любители круизного туризма</li><li>&nbsp;любители культурно&nbsp;&mdash; познавательного туризма</li><li>&nbsp;любители гастрономического туризма</li><li>&nbsp;паломнический туризм</li><li>&nbsp;рекреационный (лечебно&nbsp;&mdash; оздоровительный) туризм</li><li>&nbsp;любители экологического туризма</li></ul><p>Мы&nbsp;же хотим вам рассказать об&nbsp;этом дивном крае и&nbsp;его мотивах: о&nbsp;его быте, о&nbsp;народе, ранее жившем здесь, о&nbsp;музыке и&nbsp;музыкальных инструментах о&nbsp;кухне, а&nbsp;также, особое внимание обратим на&nbsp;достопримечательности! </p><p>Природа манит и&nbsp;завораживает, небо открывается другими оттенками синего, а&nbsp;звезды кажутся еще ближе, стоит только руку протянуть&nbsp;и... Но&nbsp;нет, все таки космос далеко. руку протянуть и&nbsp;они окажутся в&nbsp;ладони... Но&nbsp;на&nbsp;самом деле звезды и&nbsp;космос далеко. На&nbsp;Севере Карелии можно наблюдать Северное сияние&nbsp;&mdash; много фотографий сделано, картин написано, но&nbsp;они не&nbsp;передают всю красоту, насыщенность красок и&nbsp;тот завораживающий восторг, когда видишь его своими глазами! </p><p>Нельзя обойти стороной и&nbsp;древнее верование местных народов&nbsp;&mdash; шаманизм. Здесь он&nbsp;так&nbsp;же еще существует, а&nbsp;места проведения обрядов обладают великой силой. И&nbsp;это еще один повод посетить этот край. Многие сюда приезжают зарядиться энергией Космоса и&nbsp;Земли, например, на&nbsp;гору Воттоваара очистить свой разум и&nbsp;получить ответы на&nbsp;свои вопросы.</p>" };

textIndex.text += "<p> Подводя итог, как человек, живущий здесь и& nbsp;много путешествующий, хочется сказать: & laquo; Послушайте, ведь если звезды зажигают, значит это кому - нибудь нужно!..& raquo; (В.Маяковский).Так и & nbsp; с & nbsp; Карелией & nbsp;& mdash; нет больше такого края, где так легко дышится полной грудью, где мозг неподвластен угнетающим мыслям и & nbsp;чувство внутренней свободы будоражит и & nbsp;успокаивает одновременно.</p>";

// const historyObj = { link: "<a href='about_karelia/history.html'></a>", description: `<p>В&nbsp;процессе миграции людей по&nbsp;территориям, прилегающим к&nbsp;Карелии, исторически сложились три группы племён: вепсы, жившие между Ладожским и&nbsp;Онежским озерами; саами (лопари), занимавшие практически всю территорию современной Карелии и&nbsp;карелы, жившие к&nbsp;западу и&nbsp;северу от&nbsp;Ладожского озера. Само название Карелия приобрела благодаря одноименному населению. Основными занятиями древнейших жителей являлись охота и&nbsp;рыболовство. Об&nbsp;их&nbsp;жизни и&nbsp;быте нам помогают узнать археологические находки и&nbsp;сохранившиеся до&nbsp;наших времен наскальные рисунки&nbsp;&mdash; петроглифы.</p> " + ${fillText('about_karelia/history.html')}`, text: `1234 ${fillText('about_karelia/history.html')}` } // TODO

const textObj_4 = { link: "<a href = 'attractions.html'>Достопримечательности Карелии</a>", description: "", text: "1234 Ладожское озеро&nbsp;&mdash; настоящая жемчужина Карелии и Ленинградской области. Его суровая и&nbsp;величественная красота волнует людей не одно столетие. Такие великие художники, как Шишкин, Клодт, Куинджи, посещали эти места и&nbsp;передавали их&nbsp;красоту в&nbsp;своих полотнах. Но&nbsp;можно&nbsp;ли передать те&nbsp;эмоции и впечатления от&nbsp;пребывания у&nbsp;Ладоги!" };

// Заполнение описаниями
textsArray.push(textIndex); // TODO
// textsArray.push(historyObj); // TODO
textsArray.push(textObj_4); // TODO

// TODO
// function fillText(url) { 
//     fetch(url)
//         .then(res => res.text())
//         .then(html => html)
//         }; 

function sortArticles(value, maxCharCount) {
    let sortArray = new Array();
    for (let i = 0; i < textsArray.length; i++){
        if (textsArray[i].text.toLowerCase().includes(value.toLowerCase())) {
            textsArray[i].text = textsArray[i].text.slice(0, maxCharCount) + "...";
            sortArray.push(textsArray[i]);
        }
    }
    return sortArray;
}

function jsonSend(array, value) {
    let temp = value;
        // window.alert("Find " + temp); //! NOT NEEDED, just a check
        const myObj = JSON.stringify(array);
        localStorage.setItem("json", myObj);
        window.location.href = 'search.html';
    return true;
}

form.addEventListener('submit', function (e) { 
    e.preventDefault();  
    let value = input.value;
    resultArray = Array();
    resultArray = sortArticles(value, 400);
    jsonSend(resultArray, value);
})



