// console.log(document.body);

// console.log(document.body.childNodes);

// console.log(document.body.childNodes[1]);

// console.log(document.body.childNodes[1].childNodes);

// let cont = document.body.childNodes[1];
// console.log(cont.firstChild);

// cont = document.body.childNodes[1];
// <div class=​"container">​…​</div>​

// cont.firstChild
// #text

// cont.firstElementChild
// <div class=​"box">​BOX1​</div>​

// cont.lastElementChild
// <div class=​"box">​BOX5​</div>​

// cont.lastElementChild.style.background = 'red';
// 'red'




// document.body.firstElementChild

// document.body.firstElementChild.childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]


// document.body.firstElementChild.children[3]
// <div class=​"box">​BOX4​</div>​

// document.body.firstElementChild.children[3].nextElementSibling
// <div class=​"box">​BOX5​</div>​

// document.body.firstElementChild.children[3].previousElementSibling
// <div class=​"box">​BOX3​</div>​

// document.body.firstElementChild.children[3].previousSibling
// #text


// document.body.children
// HTMLCollection(3) [div.container, table, script]

// document.body.children[1]
// <table>​…​</table>
// ​
// document.body.children[1].rows
// HTMLCollection(2) [tr, tr]