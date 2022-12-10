async function getReply() {
    let reply = await fetch('https://gogoanime.consumet.org/popular');
    let content = await reply.json();
    content = content.splice(0, 20);

    let list = document.querySelector('.container');
    let key;
    for(key in content) {
        list.innerHTML +=`<div class="anime-post">
        <img class='anime-img' src = "${content[key].animeImg}">
        <p class="anime-title">${content[key].animeTitle} </p>
        <p class="anime-data">${content[key].releasedDate} </p>
        </div>
        `
    }
}
getReply()




