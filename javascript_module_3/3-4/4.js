'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.querySelector('#target');
let listitem;

for (let i of students) {
    listitem = document.createElement('option');
    listitem.value = i.id;
    listitem.innerHTML = i.name;
    target.appendChild(listitem);
}