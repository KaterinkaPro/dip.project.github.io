
const text = document.querySelector('.searchResults');
let json = localStorage.getItem("json");
let obj = JSON.parse(json);
text.innerHTML = obj;
let str = "";
for (let i = 0; i < obj.length; i++) {
    str += `<p>${obj[i].link}<br>${obj[i].text}</p>`;
}
text.innerHTML = str;

// const url_1 = 'index.html';
// fetch(url_1)
//     .then((response) => {
//         console.log(response);
//         console.log(response.url);
//     });

// fetch("url")
//   .then(res => res.text())
//   .then(html => console.log(html))

// fetch(url_1)
//     .then(res => res.text())
//     .then(html => console.log(new DOMParser()
//         .parseFromString(html, "text/xml")
//         .querySelector("body")));

