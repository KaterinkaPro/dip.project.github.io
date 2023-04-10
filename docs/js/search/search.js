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
    let epos = null;
    let legends = null;
    let sigvard = null;
    let giants = null;
    let monster = null;
    let about = null;

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
        epos = await getText('epos.html');
        legends = await getText('legends.html');
        sigvard = await getText('legends/captain_sivgard.html');
        giants = await getText('legends/giants.html');
        monster = await getText('legends/monster.html');
        about = await getText('about.html');
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
        epos = await getText('epos.html');
        legends = await getText('legends.html');
        sigvard = await getText('../legends/captain_sivgard.html');
        giants = await getText('../legends/giants.html');
        monster = await getText('../legends/monster.html');
        about = await getText('about.html');
    }

    const indexObj = {title: "О Карелии - главная страница", link: "index.html", description: "Очень долго республика Карелия была широко известна в&nbsp;узких кругах любителей дикого туризма, охоты и&nbsp;рыбалки, но&nbsp;теперь все изменилось. Завораживающие скалы, обилие невероятных водопадов, будоражащие воображение болота, и&nbsp;множество троп, уходящих вглубь Тайги&nbsp;&mdash; это всё среди нас, это все&nbsp;&mdash; Карелия. Карелия открылась для всех видов туризма. Нет такого направления туризма, который нельзя встретить в&nbsp;этом дивном крае", keywords: "туризм, любитель, карелия, край, здесь, звезда, где, природа, много, ещий, завораживать, космос, будоражить, небо, земля, народ, далеко, протянуть, рука, нельзя, жить, дивный, шаманизм, красота, насыщенность, краска", text: index };
    const historyObj = { title: "История Карелии", link: "about_karelia/history.html", description: "В&nbsp;процессе миграции людей по&nbsp;территориям, прилегающим к&nbsp;Карелии, исторически сложились три группы племён: вепсы, жившие между Ладожским и&nbsp;Онежским озерами; саами (лопари), занимавшие практически всю территорию современной Карелии и&nbsp;карелы, жившие к&nbsp;западу и&nbsp;северу от&nbsp;Ладожского озера. Само название Карелия приобрела благодаря одноименному населению. Основными занятиями древнейших жителей являлись охота и&nbsp;рыболовство. Об&nbsp;их&nbsp;жизни и&nbsp;быте нам помогают узнать археологические находки и&nbsp;сохранившиеся до&nbsp;наших времен наскальные рисунки&nbsp;&mdash; петроглифы.", keywords: "карелия, год, век, тысяча, датироваться, территория, н, э, город, петрозаводск, новый, iv, культура, состав, март, самый, республика, остров, первый, Карелия, Петрозаводск, III, Кижи, территория Карелии, век", text: history };
    const natureObj = { title: "Природа Карелии", link: "about_karelia/nature.html",  description: "Природа Карелии очаровывает любого, кто хоть единожды бывал в&nbsp;этих местах. И&nbsp;это неслучайно. Красивая северная природа изобилует буйными реками с&nbsp;крутыми порогами, девственно чистыми лесами, разнообразной флорой и&nbsp;фауной. В&nbsp;Карелии насчитывается более 60&nbsp;000&nbsp;озер, самые известные и&nbsp;самые крупные из&nbsp;которых&nbsp;&mdash; Онежское и&nbsp;Ладожское. В&nbsp;республике протекает множество рек и&nbsp;речушек, но&nbsp;все они короткие. Самая длинная из&nbsp;них&nbsp;&mdash; Кемь протяженностью в&nbsp;360&nbsp;км. Также есть и&nbsp;болота и&nbsp;водопады. Именно водоемы в&nbsp;сочетании с&nbsp;карельскими лесами и&nbsp;создают тот удивительный климат, который очаровывает всех.", keywords: "леса, карелия, больший, мир, карельский, район, водоем, расти, здесь, сосна, юг, самый, северный, обыкновенный, животный, белые, южный, разнообразный, близкий, фауна, река, более, республика, многочисленный, водиться, север", text: nature };
    const atrractionsObj = { title: "Достопримечательности Карелии", link: "attractions.html", keywords: "Онежское озеро, Кижи, Валаам, Ладожское озеро, Валаамский архипелаг, Горный Парк, Мраморный карьер, Ладога, Ладожское озеро", description: "Главные достопримечательности Карелии — озера и природные заповедники, водопады и пещеры, минеральные источники, петроглифы, древние центры православия и деревянное зодчество. В данном разделе вы найдете, что посмотреть в Карелии самостоятельно или с экскурсиями", text: attractions };
    const valaam_islandObj = { title: "Остров Валаам", link: "attractions/valaam_island.html",  description: "Валаамский архипелаг на&nbsp;Ладожском озере&nbsp;&mdash; это один из&nbsp;старейших центров русского православия. Монастырь здесь был основан не&nbsp;позднее начала XV&nbsp;века, а&nbsp;по&nbsp;некоторым данным еще раньше&nbsp;&mdash; в&nbsp;XI-XII&nbsp;веках. У&nbsp;монастырского комплекса сложная история&nbsp;&mdash; его территория входила в&nbsp;состав разных стран и&nbsp;становилась местом военных действий, в&nbsp;некоторые периоды монахи покидали его. Однако в&nbsp;1990-х началось возрождение этого православного центра.", keywords: "Валаам, Ладожское озеро, Валаамский архипелаг, XI-XII, Чайковский, остров", text: valaam_island };
    const kizhi_islandObj = { title: "Остров Кижи", link: "attractions/kizhi_island.html", description: "Остров Кижи, расположенный на&nbsp;севере Онежского озера,&nbsp;&mdash; это настоящий музей под открытым небом. Здесь находится несколько десятков памятников деревянной северорусской архитектуры. Среди них есть как здания, построенные на&nbsp;самом острове, так и&nbsp;привезенные сюда из&nbsp;разных районов Карелии.", keywords: "Кижи, Карелия, Кижский погост, Онежское озеро, открытое небо, Россия, остров", text: kizhi_island };
    const ladoga_lakeObj = { title: "Ладожское озеро", link: "attractions/lake_ladoga.html", description: "Ладога&nbsp;&mdash; крупнейшее пресноводное озеро Европы, его северная часть находится на&nbsp;территории Карелии. Живописные берега и&nbsp;сотни островов привлекают туристов не&nbsp;только своей природой, но&nbsp;и&nbsp;уникальными культурными объектами.", keywords: "Ладога, Ладожское озеро, Карелия, озеро, Ленинградская область, период навигации", text: ladoga_lake };
    const onega_lakeObj = { title: "Онежское озеро", link: "attractions/onega_lake.html", description: "Онежское озеро&nbsp;&mdash; объект важного хозяйственного значения. Оно расположено на&nbsp;северо-западе России в&nbsp;нескольких регионах. Большая часть водоема, а&nbsp;это&nbsp;80%, заходит в&nbsp;республику Карелию. Оставшиеся&nbsp;20% водной поверхности делят Ленинградская и&nbsp;Вологодская области. Огромный пресноводный водоем пользуется популярностью у&nbsp;туристов. Путешественников привлекают природные красоты северного края, древняя история.", keywords: "Онежское озеро, Кижи, береговая линия, восточное побережье, северная часть озера, Вытегра, Карелия, Медвежьегорск, Петрозаводск, Россия, Свирь, вид рыб, берег, озеро", text: onega_lake };
    const petroglyphsObj = { title: "Петроглифы", link: "attractions/petroglyphs.html", description: "Петроглифы Карелии&nbsp;&mdash; древние наскальные рисунки, выбитые на&nbsp;плоских камнях на&nbsp;восточном побережье озера Онега. Каменные изображения представляют огромную научную и&nbsp;художественную ценность и&nbsp;являются памятниками монументального искусства первобытной эпохи. В&nbsp;них можно заметить влияние материального и&nbsp;нематериального мира на&nbsp;жизнь древнего человека.", keywords: "Карелия, петроглиф Карелии, Онежское озеро, Всемирное наследие ЮНЕСКО, Пудожский район Карелии, IV-III, мыс Бесов, петроглиф, рисунок", text: petroglyphs };
    const ruskealaObj = { title: "Горный парк &laquo;Рускеала&raquo;", link: "attractions/ruskeala.html", description: "В&nbsp;XVIII веке на&nbsp;территории Сортавальского района Карелии добывали мрамор&nbsp;&mdash; именно отсюда привозился камень для украшения Эрмитажа и&nbsp;многих других зданий Петербурга. Месторождение разрабатывалось до&nbsp;середины XIX&nbsp;века, а&nbsp;затем было почти заброшено. Постепенно ландшафт возвращался в&nbsp;природное состояние: мраморный карьер заполнился водой и&nbsp;превратился в&nbsp;живописный водоем. Сейчас здесь находится горный парк &laquo;Рускеала&raquo;", keywords: "Горный Парк, Мраморный карьер, Карелия, Россия", text: ruskeala };
    const eposObj = { title: "Карело-финский поэтический эпос &laquo;Калевала&raquo;", link: "epos.html", description: "Калевала&nbsp;&mdash; это народно эпические эпосы, собранные воедино Элиасом Лённротом, финским собирателем народных сказаний. В&nbsp;этом произведении нету единого сюжета все герои пересекаются лишь однажды либо не&nbsp;пересекаются вообще. Калевалу простыми словами можно описать как сборник рассказов и&nbsp;преданий. В&nbsp;нём повествуется о&nbsp;создании мира и&nbsp;также о&nbsp;некоторых финских и&nbsp;карельских обрядах.", keywords: "калевала, руна, эпос, герой, вяйнямёйнен, после, волшебный, сампый, слово, время, народный, эпический, богатырь, финский, произведение, главный, север, мир, народ", text: epos };
    const legendsObj = { title: "Легенды Карелии", link: "legends.html", description: "Древний эпос и легенды Карелии собраны воедино и представляют собой", keywords: "Легедны, эпос, Ладога, монстр, капитан, Сигвард, гигант", text: legends };
    const sigvardObj = { title: "Легенда о сокровищах и капитане Сигварде", link: "legends/captain_sivgard.html", description: "Север хранит в&nbsp;себе множество тайн и&nbsp;загадок. Многие легенды и&nbsp;мифы передаются из&nbsp;уст в&nbsp;уста, из&nbsp;поколения в&nbsp;поколение, и&nbsp;у&nbsp;каждого народа свой фольклор.", keywords: "Ладога, капитан, быль, легенда, день. сигвард, дух, юхан, сокровище, ладога, ураган, волхв, поверье, море, сильный, кексгольм,тайна,  север, карелия", text: sigvard };
    const giantsObj = { title: "О Великинах", link: "legends/giants.html", description: "На&nbsp;Ладожском побережье существует предание, что когда-то в&nbsp;этих местах жили огромные люди, так называемые метелиляйнены, или мунккилайнены, которых постепенно вытеснили отсюда лапландцы и&nbsp;финны. Само название пошло от&nbsp;финского &laquo;meteli&raquo;&nbsp;&mdash; шум, все потому, что во&nbsp;время их&nbsp;передвижения по&nbsp;лесам, они создавали много шума. До&nbsp;сих пор люди обнаруживают следы их&nbsp;существования: огромные кости и&nbsp;плуги. Также есть странные места с&nbsp;нагромождением огромных валунов.", keywords: "стать	место, олоф, остров, великан, камень, время, леса, поколение, рассказ, человек, огромный, лодка, пайвиэ", text: giants };
    const monsterObj = { title: "Неизвестный монстр или тайна Ладожского озера", link: "legends/monster.html", description: "Я&nbsp;не&nbsp;знаю ни&nbsp;одного глубоководного озера, в&nbsp;котором хотя&nbsp;бы раз не&nbsp;было замечено некое явление, не&nbsp;поддающееся логическому и&nbsp;научному объяснению.", keywords: "Ладожское озеро, озеро, монстр, неизвестный, лодка, берег, рыбак, многий, ладожский, ещий, показаться, вод, ладога, шея, длинный, метр, чудище, существо, голова, цвета", text: monster };
    const aboutObj = { title: "О нас", link: "about.html", description: "В далеком 2022 году, на пороге 2023, группа энтузиастов - тестировщиков решили собраться и создать что-то новое на просторах интернета. Сперва цель создания веб приложение была для тестирования, но после сбора  команды цели поменялись. Захотелось создать не просто веб-приложение для тестирования, а ресурс, который был бы полезен для туристов. Шло время, люди в команде  менялись по разным причинам, но тестировщики шли к своей цели неизменно и вопреки всем проблемам и непосильным задачам. Что ждало их в конце? Как справились они со своей задаче? Через время и события пронесла команда свои задачи, и в конце, она-таки выкатила релиз!", keywords: "Команада, тестировик, разпработчик, програмист, энтузиаст", text: about };
    
    // Заполнение массива JSON-объектами: заглавие, ссылка, описание, ключевые слова, текст
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
    textsArray.push(eposObj);
    textsArray.push(legendsObj);
    textsArray.push(sigvardObj);
    textsArray.push(giantsObj);
    textsArray.push(monsterObj);
    textsArray.push(aboutObj);
      
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
        if (value.length > 2 && value.length < 257 && /[^\x00-\x7F]/gm.test(value)) {
            resultArray = Array();
            resultArray = sortArticles(value, 500);
            jsonSend(resultArray, value);
        }
    })
}

main(); // ЗАПУСК скрипта поиска.