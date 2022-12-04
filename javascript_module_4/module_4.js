'use strict';

/*
const request = 'https://api.tvmaze.com/search/shows?q=dome'
await fetch(request).then((response) =>
    response.json().then((response_json) => {
        if (response.ok === false) {
            console.log('search failed...')
        } else {
            console.log(response_json)
        }
    }))
*/
/*
const request = 'https://api.tvmaze.com/search/shows?q=dome'
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
                    const image = document.createElement('img');
                        if (response_json[i]["show"]["image"] === null) {
                            image.src = 'https://via.placeholder.com/210x295?text=image+not+found'
                        } else {
                            image.src = response_json[i]["show"]["image"]["medium"]
                        }
                        image.alt = response_json[i]["show"]["name"];
                    const summarycontainer = document.createElement('div')
                        summarycontainer.className = 'summaryout'
                    const summary = document.createElement('p')
                        summary.className = 'summaryin'
                        if (response_json[i]["show"]["summary"] === null) {
                            summary.innerHTML = 'Show summary not found.'
                        } else {
                            summary.innerHTML = response_json[i]["show"]["summary"]
                        }
                    const genre = document.createElement('p')
                        genre.className = 'genre'
                        if (response_json[i]['show']['genres'].length === 0) {
                            genre.innerHTML = 'in the genre of its own'
                        } else {
                            for (let k in response_json[i]['show']['genres']) {
                                genre.innerHTML += response_json[i]['show']['genres'][k]
                                if (parseInt(k) !== response_json[i]['show']['genres'].length - 1) {
                                    genre.innerHTML += ' | '
                                }
                            }
                        }
                    const link = document.createElement('a')
                            link.innerHTML = 'Link to details';
                            link.href = response_json[i]["show"]["url"]
                            link.target ='_blank'

                article.appendChild(h2)
                article.appendChild(image)
                article.appendChild(genre)
                article.appendChild(link)
                summarycontainer.appendChild(summary)
                article.appendChild(summarycontainer)
                document.querySelector('main').appendChild(article)
            }
        }
    }))
*/
async function searchengine() {
    let main = document.querySelector("main");
    if (main.firstChild != null) {
        while (main.firstChild) {
        main.removeChild(main.firstChild);
        }
    }
    let searchword = document.getElementById('search').value;
    const request = 'https://api.tvmaze.com/search/shows?q=' + searchword;
    await fetch(request).then((response) =>
        response.json().then((response_json) => {
            if (response.ok === false) {
                console.log('search failed...');
            } else {
                for (let i in response_json) {
                    const article = document.createElement('article');
                        article.className = 'showoptions';
                        const h2 = document.createElement('h2');
                            h2.innerHTML = response_json[i]["show"]["name"];
                        const image = document.createElement('img');
                            if (response_json[i]["show"]["image"] === null) {
                                image.src = 'https://via.placeholder.com/210x295?text=image+not+found';
                            } else {
                                image.src = response_json[i]["show"]["image"]["medium"];
                            }
                            image.alt = response_json[i]["show"]["name"];
                        const summarycontainer = document.createElement('div');
                            summarycontainer.className = 'summaryout';
                        const summary = document.createElement('p');
                            summary.className = 'summaryin';
                            if (response_json[i]["show"]["summary"] === null) {
                                summary.innerHTML = 'Show summary not found.';
                            } else {
                                summary.innerHTML = response_json[i]["show"]["summary"];
                            }
                        const genre = document.createElement('p');
                            genre.className = 'genre';
                            if (response_json[i]['show']['genres'].length === 0) {
                                genre.innerHTML = 'in the genre of its own';
                            } else {
                                for (let k in response_json[i]['show']['genres']) {
                                    genre.innerHTML += response_json[i]['show']['genres'][k];
                                    if (parseInt(k) !== response_json[i]['show']['genres'].length - 1) {
                                        genre.innerHTML += ' | ';
                                    }
                                }
                            }
                        const link = document.createElement('a');
                                link.innerHTML = 'Link to details';
                                link.href = response_json[i]["show"]["url"];
                                link.target ='_blank';

                    article.appendChild(h2);
                    article.appendChild(image);
                    article.appendChild(genre);
                    article.appendChild(link);
                    summarycontainer.appendChild(summary);
                    article.appendChild(summarycontainer);
                    document.querySelector('main').appendChild(article);
                }
            }
        }))
    }

document.getElementById('searchbutton').addEventListener('click', function () {searchengine()});
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && document.getElementById('search') === document.activeElement) {
        searchengine();
    }
});
