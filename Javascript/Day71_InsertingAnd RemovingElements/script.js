/*
document.querySelector('.container').innerText
'Hey I am a box'

document.querySelector('.container').outerHTML
'<div class="container">\n        <div class="box">Hey I am a box</div>\n    </div>
'
document.querySelector('.container').tagName
'DIV'

document.querySelector('.container').nodeName
'DIV'

document.querySelector('.container').textContent
'\n        Hey I am a box\n    '

document.querySelector('.container').hidden
false

document.querySelector('.container').hidden = true
true

document.querySelector('.box').innerText = 'Hey I am Aditya'
'Hey I am Aditya'

document.querySelector('.box').hasAttribute('style')
false

document.querySelector('.box').getAttribute('Style')
'display: flex;'

document.querySelector('.box').setAttribute('Style', "display: inline")
undefined

document.querySelector('.box').attributes
NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

document.querySelector('.box').removeAttribute('style')
undefined

document.designMode = 'on'
'on'

document.querySelector(".box").dataset
DOMStringMap {createdby: 'harry'}

document.querySelector(".box").remove()
undefined
document.querySelector(".box").remove()
undefined

document.querySelector(".box").classList
DOMTokenList ['box', value: 'box']

document.querySelector(".box").className
'box'

//Adding and removing class (if red is prsent then it will remove the clss else it will add red)
document.querySelector(".box").classList.toggle('red')
false
document.querySelector(".box").classList.toggle('red')
true
*/

let div = document.createElement('div');
div.innerHTML = 'I have been inserted by Aditya using javascript'
div.setAttribute('class', 'js-div');
// document.querySelector('.container').append(div);
// document.querySelector('.container').before(div);
// document.querySelector('.container').after(div);
// document.querySelector('.container').prepend(div);
let cont = document.querySelector('.container');
// cont.insertAdjacentHTML('afterend', 'I am after conatiner');
cont.insertAdjacentHTML('beforebegin', 'I am before conatiner');