'use strict';

async function searchengine() {
    let searchword = document.getElementById('search').value
    const request = 'https://api.tvmaze.com/singlesearch/shows?q=' + searchword
    await fetch(request).then((response) =>
        response.json().then((response_json) => {
            if (response.ok) {
                console.log('löytyi sarja: ' + response_json["name"]);
            } else {
                console.log('haku epäonnistui.')
            }
        }))
}
document.getElementById('searchbutton').addEventListener('click', function () {searchengine()});