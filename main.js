// let elem = document.querySelector('.wrap')
//
// elem.addEventListener('click', () => {
//     let target = event.target;
//     if (target.closest('.card')) {
//         target.closest('.card').classList.toggle('new')
//     }
// })
//
// let text = document.querySelector('.card__title')
// elem.addEventListener('dblclick', () => {
//     let target = event.target;
//     if (target.classList.contains('card__text')) {
//         target.outerHTML = `<input class="card__text" value=${target.innerHTML}>`
//         console.log(target.innerHTML)
//     }
// })
//
// elem.addEventListener('click', () => {
//     let target = event.target;
//     if (target.lastElementChild.classList
//     ('card__text') && target.tagName == 'INPUT') {
//         target.outerHTML = `<p class="card__text">value=${target.innerHTML}</p>`
//         console.log(target.innerHTML)
//     }
// })

// let div = document.querySelector('.block');
// let ul = document.querySelector('.list');
// let li = document.querySelector('.item');
//
// div.addEventListener('click', (event) => console.log(event.target))
// div.addEventListener('click', (event) => {
//     console.log('ul')
//     event.stopPropagation()
// }, true)
// div.addEventListener('click', (event) => {
//     console.log('li')
//     event.stopPropagation()
// })


// let elem = document.querySelector('.btn2')
//
// elem.onclick = function (event){
//     console.log(event)
// }

// let input = document.querySelector('.input')
// elem.onclick = hello
//
// function hello() {
//     alert(input.value)
//     console.log(input.value)
// }
//
// function change(text) {
//     let state = confirm(text);
//     if (state) {
//         document.querySelector('.btn').innerHTML = 'Hello'
//     }
// }
//
// elem.addEventListener('click', hello)
//
// elem.addEventListener('mouseover', () => console.log('onmouse'))

// let elem = document.querySelector('.example')

// console.log(elem.offsetTop)
// console.log(elem.offsetLeft)
// console.log(elem.clientTop)
// console.log(elem.clientLeft)
// console.log(elem.offsetWidth)
// console.log(elem.clientWidth)
// console.log(elem.offsetHeight)
// console.log(elem.clientHeight)
// console.log(elem.scrollTop)
// console.log(elem.scrollHeight)
// console.log(elem.offsetParent)
// console.log(elem.offsetWidth-elem.clientWidth-elem.clientLeft*2)
// elem.style.height = elem.scrollHeight + 'px';
// console.log(document.body.scrollTop)
// console.log(document.documentElement.clientHeight)
// console.log(document.documentElement.clientWidth)
// console.log(window.pageXOffset)
// console.log(window.pageYOffset)
// console.log(window.screenX)
// console.log(window.screenY)
// elem.scrollTo(0, 50)
// elem.scrollBy(0, 100)