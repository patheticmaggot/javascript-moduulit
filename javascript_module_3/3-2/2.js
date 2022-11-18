'use strict';
const target = document.querySelector('#target');
const list = ['First item', 'Second item', 'Third item'];
let i, listitem;

for (i=0; i<list.length; i++) {
    listitem = document.createElement('li');
    listitem.innerHTML = list[i];
    target.appendChild(listitem);
}