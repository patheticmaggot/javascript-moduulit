'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target');
let i;

for (i=0; i<names.length; i++) {
    target.innerHTML += '<li>'+ names[i] +'</li>';
}