async function getSongs(){
    let a = await fetch('http://127.0.0.1:3000/Video-Day84-SpotifyClone/Songs/');
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let aElms = div.getElementsByTagName('a');
    let songs = [];
    for (let index = 0; index < aElms.length; index++) {
        const element = aElms[index];
        if (element.href.endsWith('.mp3')) {
            songs.push(element.href.split('/Songs/')[1]);            
        }        
    }
    return songs;
}

async function main (){
    let songs = await getSongs();

    let songUL = document.querySelector('.songList ul');

    for (const song of songs) {
        songUL.innerHTML += `
        <li>
            <img class="invert" src="Images/music.svg" alt="">
            <div class="info">
                <div class="songName">${song.replaceAll('%20', ' ')}</div>
            </div>
            <div class="playNow">
                <span>Play Now</span>
                <img class="invert" src="Images/playSong.svg" alt="">
            </div>
        </li>
        
        `;
    }

    let audio = new Audio(songs[0]);
    // audio.play();
}

main();