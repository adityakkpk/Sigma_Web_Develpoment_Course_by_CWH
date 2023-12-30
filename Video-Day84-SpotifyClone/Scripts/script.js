let currentSong = new Audio();

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

const playMusic = (songName) => {
    currentSong.src = "Songs/" + songName;
    currentSong.play();
    play.src = 'Images/pause.svg';
}

async function main (){
    let songs = await getSongs();

    let songUL = document.querySelector('.songList ul');

    for (const song of songs) {
        songUL.innerHTML += `
        <li>
        <div class="info">
            <img class="invert" src="Images/music.svg" alt="">
                <div class="songName">${song.replaceAll('%20', ' ')}</div>
            </div>
            <div class="playNow">
                <span>Play Now</span>
                <img class="invert" src="Images/playSong.svg" alt="">
            </div>
        </li>
        
        `;
    }

    //Attach an eventListeiner on each song of library
    Array.from(document.querySelector('.songList').getElementsByTagName('li'))
      .forEach( e => {
        e.addEventListener('click', () => {
            playMusic(e.getElementsByTagName('div')[1].innerHTML);
        });
      });

    //Attach event on play, next and prevous
    play.addEventListener('click', () => {
        if(currentSong.paused){
            currentSong.play();
            play.src = 'Images/pause.svg';
        }else {
            currentSong.pause();
            play.src = 'Images/playSong.svg';
        }
    });
}

main();