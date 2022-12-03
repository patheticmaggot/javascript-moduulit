'use strict';

async function searchengine() {
    let main = document.querySelector("main")
    if (main.firstChild != null) {
        while (main.firstChild) {
        main.removeChild(main.firstChild);
        }
    }
    let searchword = document.getElementById('search').value
    const request = 'https://api.tvmaze.com/search/shows?q=' + searchword
    await fetch(request).then((response) =>
        response.json().then((response_json) => {
            if (response.ok === false) {
                console.log('search failed...')
            } else {
                for (let i in response_json) {
                    const article = document.createElement('article');
                        article.className = 'showoptions'
                        const h2 = document.createElement('h2');
                            h2.innerHTML = response_json[i]["show"]["name"];
                        const figure = document.createElement('figure');
                            const image = document.createElement('img');
                                if (response_json[i]["show"]["image"] !== null) {
                                    image.src = response_json[i]["show"]["image"]["medium"]
                                } else {
                                    image.src = 'https://dummyimage.com/210x295/fff/aaa'
                                }
                                image.alt = response_json[i]["show"]["name"];
                            const figcap = document.createElement('figcaption');
                                const a = document.createElement('a')
                                    a.innerHTML = 'Link to details';
                                    a.href = response_json[i]["show"]["url"]
                                    a.target = "_blank"
                        const p = document.createElement('p')
                                p.innerHTML = response_json[i]["show"]["summary"]
                        const p2 = document.createElement('p')
                        for (let k in response_json[i]['show']['genres']) {
                            p2.innerHTML += response_json[i]['show']['genres'][k]
                            if (parseInt(k) !== response_json[i]['show']['genres'].length - 1) {
                                p2.innerHTML += ' | '
                            }
                        }
                    figure.appendChild(image)
                    figcap.appendChild(a)
                    figure.appendChild(figcap)
                    article.appendChild(h2)
                    article.appendChild(figure)
                    article.appendChild(p)
                    article.appendChild(p2)
                    document.querySelector('main').appendChild(article)
                }
            }
        }))
}

document.getElementById('searchbutton').addEventListener('click', function () {searchengine()});
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && document.getElementById('search') === document.activeElement) {
        searchengine()
    }
});


