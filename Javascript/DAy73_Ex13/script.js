let cardsHTML = '';

function createCard(image, title, cName, views, monthsOld, duration) {
    if(views>=1000){
        views = (views/1000) + 'K'
    }
  cardsHTML += `
  <div class="card">
    <div class="thumbnail">
        <img class="thumbnail-img"
            src="${image}"
            alt="">
        <div class="time">${duration}</div>
    </div>
    <div class="info">
        <div class="title">
            ${title}
        </div>
        <div class="stats">
            ${cName} &bull; ${views} views &bull; ${monthsOld} months ago
        </div>
    </div>
  </div>
    `;

    document.querySelector('.container').innerHTML = cardsHTML;
}

createCard(
    'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw',
    'Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1', 
    'CodeWithHarry', 
    723000, 
    2, 
    '31:20'
);

createCard(
    'https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ',
    'Your First HTML Website | Sigma Web Development Course - Tutorial #2', 
    'CodeWithHarry', 
    381000,
    2, 
    '28:31'
);

createCard(
    'https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q',
    'Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3', 
    'CodeWithHarry', 
    231000,
    2, 
    '11:12'
);

createCard(
    'https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXT49aypaXDTfq5Y813UJXZZcVXA',
    'Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4', 
    'CodeWithHarry', 
    196000,
    2, 
    '19:34'
);

createCard(
    'https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCImJKujntN4XOIJVBfI5R8dzszzg',
    'Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5', 
    'CodeWithHarry', 
    191000,
    2, 
    '18:20'
);