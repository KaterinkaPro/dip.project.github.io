const form = document.querySelector('#search');
const input = document.querySelector('#Inputtext');

async function main() {
    // Переменные для хранения текста страниц.
    let index = null;
    let history = null;
    let nature = null;
    let attractions = null;
    let valaam_island = null;
    let kizhi_island = null;
    let ladoga_lake = null;
    let onega_lake = null;
    let petroglyphs = null;
    let ruskeala = null;

    const response = await fetch('index.html');
    if (response.ok) {
        index = await getText('index.html');
        history = await getText('about_karelia/history.html');
        nature = await getText('about_karelia/nature.html');
        attractions = await getText('attractions.html');
        valaam_island = await getText('attractions/valaam_island.html');
        kizhi_island = await getText('attractions/kizhi_island.html');
        ladoga_lake = await getText('attractions/lake_ladoga.html');
        onega_lake = await getText('attractions/onega_lake.html');
        petroglyphs = await getText('attractions/petroglyphs.html');
        ruskeala = await getText('attractions/ruskeala.html');
    } else {
        index = await getText('../index.html');
        history = await getText('../about_karelia/history.html');
        nature = await getText('../about_karelia/nature.html');
        attractions = await getText('../attractions.html');
        valaam_island = await getText('../attractions/valaam_island.html');
        kizhi_island = await getText('../attractions/kizhi_island.html');
        ladoga_lake = await getText('../attractions/lake_ladoga.html');
        onega_lake = await getText('../attractions/onega_lake.html');
        petroglyphs = await getText('../attractions/petroglyphs.html');
        ruskeala = await getText('../attractions/ruskeala.html');
    }

    const indexObj = {title: "О Карелии - главная страница", link: "index.html", keywords: "qwerty", description: "Очень долго республика Карелия была широко известна в&nbsp;узких кругах любителей дикого туризма, охоты и&nbsp;рыбалки, но&nbsp;теперь все изменилось. Завораживающие скалы, обилие невероятных водопадов, будоражащие воображение болота, и&nbsp;множество троп, уходящих вглубь Тайги&nbsp;&mdash; это всё среди нас, это все&nbsp;&mdash; Карелия. Карелия открылась для всех видов туризма. Нет такого направления туризма, который нельзя встретить в&nbsp;этом дивном крае", text: index };    
    const historyObj = { title: "История Карелии", link: "about_karelia/history.html", keywords: "qwerty", description: "В&nbsp;процессе миграции людей по&nbsp;территориям, прилегающим к&nbsp;Карелии, исторически сложились три группы племён: вепсы, жившие между Ладожским и&nbsp;Онежским озерами; саами (лопари), занимавшие практически всю территорию современной Карелии и&nbsp;карелы, жившие к&nbsp;западу и&nbsp;северу от&nbsp;Ладожского озера. Само название Карелия приобрела благодаря одноименному населению. Основными занятиями древнейших жителей являлись охота и&nbsp;рыболовство. Об&nbsp;их&nbsp;жизни и&nbsp;быте нам помогают узнать археологические находки и&nbsp;сохранившиеся до&nbsp;наших времен наскальные рисунки&nbsp;&mdash; петроглифы.", text: history };
    const natureObj = { title: "Природа Карелии", link: "about_karelia/nature.html", keywords: "qwerty", description: "Природа Карелии очаровывает любого, кто хоть единожды бывал в&nbsp;этих местах. И&nbsp;это неслучайно. Красивая северная природа изобилует буйными реками с&nbsp;крутыми порогами, девственно чистыми лесами, разнообразной флорой и&nbsp;фауной. В&nbsp;Карелии насчитывается более 60&nbsp;000&nbsp;озер, самые известные и&nbsp;самые крупные из&nbsp;которых&nbsp;&mdash; Онежское и&nbsp;Ладожское. В&nbsp;республике протекает множество рек и&nbsp;речушек, но&nbsp;все они короткие. Самая длинная из&nbsp;них&nbsp;&mdash; Кемь протяженностью в&nbsp;360&nbsp;км. Также есть и&nbsp;болота и&nbsp;водопады. Именно водоемы в&nbsp;сочетании с&nbsp;карельскими лесами и&nbsp;создают тот удивительный климат, который очаровывает всех.", text: nature };    
    const atrractionsObj = { title: "Достопримечательности Карелии", link: "attractions.html", keywords: "qwerty", description: "Ладожское озеро&nbsp;&mdash; настоящая жемчужина Карелии и Ленинградской области. Его суровая и&nbsp;величественная красота волнует людей не одно столетие. Такие великие художники, как Шишкин, Клодт, Куинджи, посещали эти места и&nbsp;передавали их&nbsp;красоту в&nbsp;своих полотнах. Но&nbsp;можно&nbsp;ли передать те&nbsp;эмоции и впечатления от&nbsp;пребывания у&nbsp;Ладоги!", text: attractions };
    
    //! TODO
    const valaam_islandObj = { title: "Остров Валаам", link: "attractions/valaam_island.html",  description: "Валаамский архипелаг на&nbsp;Ладожском озере&nbsp;&mdash; это один из&nbsp;старейших центров русского православия. Монастырь здесь был основан не&nbsp;позднее начала XV&nbsp;века, а&nbsp;по&nbsp;некоторым данным еще раньше&nbsp;&mdash; в&nbsp;XI-XII&nbsp;веках. У&nbsp;монастырского комплекса сложная история&nbsp;&mdash; его территория входила в&nbsp;состав разных стран и&nbsp;становилась местом военных действий, в&nbsp;некоторые периоды монахи покидали его. Однако в&nbsp;1990-х началось возрождение этого православного центра.", keywords: "qwerty", text: valaam_island };
    const kizhi_islandObj = { title: "Остров Кижи", link: "attractions/kizhi_island.html", description: "Остров Кижи, расположенный на&nbsp;севере Онежского озера,&nbsp;&mdash; это настоящий музей под открытым небом. Здесь находится несколько десятков памятников деревянной северорусской архитектуры. Среди них есть как здания, построенные на&nbsp;самом острове, так и&nbsp;привезенные сюда из&nbsp;разных районов Карелии.", keywords: "qwerty", text: kizhi_island };
    const ladoga_lakeObj = { title: "Ладожское озеро", link: "attractions/lake_ladoga.html", description: "Ладога&nbsp;&mdash; крупнейшее пресноводное озеро Европы, его северная часть находится на&nbsp;территории Карелии. Живописные берега и&nbsp;сотни островов привлекают туристов не&nbsp;только своей природой, но&nbsp;и&nbsp;уникальными культурными объектами.", keywords: "qwerty", text: ladoga_lake };
    const onega_lakeObj = { title: "Онежское озеро", link: "attractions/onega_lake.html", description: "Онежское озеро&nbsp;&mdash; объект важного хозяйственного значения. Оно расположено на&nbsp;северо-западе России в&nbsp;нескольких регионах. Большая часть водоема, а&nbsp;это&nbsp;80%, заходит в&nbsp;республику Карелию. Оставшиеся&nbsp;20% водной поверхности делят Ленинградская и&nbsp;Вологодская области. Огромный пресноводный водоем пользуется популярностью у&nbsp;туристов. Путешественников привлекают природные красоты северного края, древняя история.", keywords: "qwerty", text: onega_lake };
    const petroglyphsObj = { title: "Петроглифы", link: "attractions/petroglyphs.html", description: "Петроглифы Карелии&nbsp;&mdash; древние наскальные рисунки, выбитые на&nbsp;плоских камнях на&nbsp;восточном побережье озера Онега. Каменные изображения представляют огромную научную и&nbsp;художественную ценность и&nbsp;являются памятниками монументального искусства первобытной эпохи. В&nbsp;них можно заметить влияние материального и&nbsp;нематериального мира на&nbsp;жизнь древнего человека.", keywords: "qwerty", text: petroglyphs };
    const ruskealaObj = { title: "Горный парк &laquo;Рускеала&raquo;", link: "attractions/ruskeala.html", description: "В&nbsp;XVIII веке на&nbsp;территории Сортавальского района Карелии добывали мрамор&nbsp;&mdash; именно отсюда привозился камень для украшения Эрмитажа и&nbsp;многих других зданий Петербурга. Месторождение разрабатывалось до&nbsp;середины XIX&nbsp;века, а&nbsp;затем было почти заброшено. Постепенно ландшафт возвращался в&nbsp;природное состояние: мраморный карьер заполнился водой и&nbsp;превратился в&nbsp;живописный водоем. Сейчас здесь находится горный парк &laquo;Рускеала&raquo;", keywords: "qwerty", text: ruskeala };
    // const nameObj = { title: "", link: "", description: "", keywords: "qwerty", text: name7 };
    // const nameObj = { title: "", link: "", description: "", keywords: "qwerty", text: name8 };


    // Заполнение массива JSON-объектами: заглавие, ссылка, описание, ключевые слова, текст
    //! TODO
    let textsArray = Array();
    textsArray.push(indexObj);
    textsArray.push(historyObj);
    textsArray.push(natureObj);
    textsArray.push(atrractionsObj);
    textsArray.push(valaam_islandObj);
    textsArray.push(kizhi_islandObj);
    textsArray.push(ladoga_lakeObj);
    textsArray.push(onega_lakeObj);
    textsArray.push(petroglyphsObj);
    textsArray.push(ruskealaObj);
    // textsArray.push();
    // textsArray.push();
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
        if (sortArray.length < 1)
            sortArray.push({ title: "Ошибка:", link: "./", description: `По Вашему запросу: <b>${value}</b> ничего не найдено. Попробуйте сформулировать немного другой запрос`, keywords: "", text: value });
        return sortArray;
    }
    
    async function jsonSend(array, value) {
        let temp = value;
        // window.alert("Find " + temp); //! NOT NEEDED, just a check
        const myObj = JSON.stringify(array);
        sessionStorage.setItem("json", myObj);
        sessionStorage.setItem("value", value);
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
        resultArray = sortArticles(value, 500);
        jsonSend(resultArray, value);
    })
}

main();     
