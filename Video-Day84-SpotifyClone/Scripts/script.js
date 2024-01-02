let currentSong = new Audio();

let songs;

function secondsToMinutes(seconds){
    if(isNaN(seconds) || seconds < 0){
        return '00:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
}

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

const playMusic = (songName, pause=false) => {
    currentSong.src = "Songs/" + songName;
    if(!pause){
        currentSong.play();
        play.src = 'Images/pause.svg';
    }
    document.querySelector('.songinfo').innerHTML = decodeURI(songName);
    document.querySelector('.songtime').innerHTML = '00:00 / 00:00';
}

async function main (){
    songs = await getSongs();

    playMusic(songs[0], true);

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

    //listein for timeupdate event
    currentSong.addEventListener('timeupdate', ()=>{
        document.querySelector('.songtime').innerHTML = `${secondsToMinutes(currentSong.currentTime)} / ${secondsToMinutes(currentSong.duration)}`;
        document.querySelector('.circle').style.left = ((currentSong.currentTime / currentSong.duration)) * 100 + "%";
    });

    //add Eventlisteiner on seekbar
    document.querySelector('.seekbar').addEventListener('click', (e) => {
        // console.log(e.offsetX, e.target.getBoundingClientRect().width);
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector('.circle').style.left = percent + '%';
        currentSong.currentTime = ((currentSong.duration )* percent) / 100;
    });

    //Adding hamburger menu
    document.querySelector('.hamburgur').addEventListener('click', () => {
        document.querySelector('.left').style.left = 0;
        // document.querySelector('.left').style.display = 'block';
    });
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.left').style.left = '-120%';
    });


    //Previous and next buttons
    previous.addEventListener('click', ()=> {  
        let songIndex = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if((songIndex - 1) >= 0)
        playMusic(songs[songIndex - 1]);
    });
    next.addEventListener('click', ()=> {
        let songIndex = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if((songIndex + 1) < songs.length){
            playMusic(songs[songIndex + 1]);
        }
    });

    //Add event on volume
    document.querySelector('.volume').addEventListener('click', ()=> {
        document.querySelector('.range').classList.remove('hide');
        
        setTimeout(() => {
            document.querySelector('.range').classList.add('hide');            
        }, 5000);
    });

    document.querySelector('.range').getElementsByTagName('input')[0]
        .addEventListener('change', (e)=> {
            currentSong.volume = parseInt(e.target.value) / 100;
        });
}

main();