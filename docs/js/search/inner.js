
const text = document.querySelector('.searchResults');
let json = localStorage.getItem("json");
let obj = JSON.parse(json);
let str = "";
for (let i = 0; i < obj.length; i++) {
    str += `<p>${obj[i].link}<br>${obj[i].description}</p>`;
}
text.innerHTML = str;
str = "";
localStorage('json', null);

// const url_1 = 'index.html';
// str = getText(url_1);
// str = new DOMParser().parseFromString(url_1, 'text/html').querySelector('body');


// let js = {};
// fetch(url_1)
//     .then((response) => {
//         console.log(response);
//         console.log(response.url);
        // js = JSON.parse(response.json())
        // js = JSON.stringify(response)
        // console.log(js);
        // console.log(JSON.stringify(response).querySelector('body'))
        // js.querySelector('body')

// fetch(url_1)
//     .then(res => res.text())
//     .then(html => console.log(new DOMParser()
//     .parseFromString(html, "text/xml")
//     .querySelector('#text')));

// let variable = "";
// let jsn = { key: variable };
// function getText(url) {
//    return fetch(url)
//         .then(res => res.text())
//        .then(html => {
//            jsn.key = html;
//            console.log(jsn.key);
//        })
// }

// async function getText(url) {
//     const resp = await fetch(url);
//     const text = await resp.text();
//     jsn.key = await html;
//     return text;
//   }

// const js = { newKey: getText(url_1) };
// text.textContent = js.newKey;

// async function getText(url) {
//     const resp = await fetch(url);
//     const text = await resp.text();
//     return text;
//   }
  
//   async function run(url) {
//     const txt = await getText(url);
//       console.log(txt); // тут будет этот текст.
//       return txt;
//   }

// async function main(){
//     const t = await run(url_1);
//     text.textContent = t;
// }
// main();
