let currentSong = new Audio();

let currFolder;

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

async function getSongs(folder){
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/Video-Day84-SpotifyClone/${folder}/`);
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let aElms = div.getElementsByTagName('a');
    let songs = [];
    for (let index = 0; index < aElms.length; index++) {
        const element = aElms[index];
        if (element.href.endsWith('.mp3')) {
            songs.push(element.href.split(`/${folder}/`)[1]);            
        }        
    }
    
    //Set all the songs to library
    let songUL = document.querySelector('.songList ul');
    songUL.innerHTML = "";
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
    Array.from(document.querySelectorAll('.songList li'))
      .forEach( e => {
        e.addEventListener('click', () => {
            playMusic(e.querySelector('.songName').innerHTML);
        });
    });

    return songs;
}

const playMusic = (songName, pause=false) => {
    currentSong.src = `${currFolder}/` + songName;
    if(!pause){
        currentSong.play();
        play.src = 'Images/pause.svg';
    }
    document.querySelector('.songinfo').innerHTML = decodeURI(songName);
    document.querySelector('.songtime').innerHTML = '00:00 / 00:00';
}

async function displayAlbums () {
    let a = await fetch(`http://127.0.0.1:3000/Video-Day84-SpotifyClone/Songs/`);
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let aElems = div.getElementsByTagName('a');
    let array = Array.from(aElems);
    
    for (let index = 0; index < array.length; index++) {
        const elem = array[index];
        
        if(elem.href.includes('/Songs')){
            let folderName = elem.href.split('/').slice(-2)[0];

            //grt the mete data of folder
            let a = await fetch(`http://127.0.0.1:3000/Video-Day84-SpotifyClone/Songs/${folderName}/info.json`);
            let response = await a.json();
            const cardContainer = document.querySelector('.cardContainer')
            cardContainer.innerHTML += `
            <div data-folder="${folderName}" class="card">
                <div class="play">
                    <img src="Images/play.svg" alt="">
                </div>
                <img src="Songs/${folderName}/cover.jpeg" alt="lofi">
                <h2>${response.title}</h2>
                <p>${response.description}</p>
            </div>
            `;
        }
    };

    //Load the playlist when album is clicked
    Array.from(document.getElementsByClassName('card')).forEach(elem => {
        let songsFolder = elem.dataset.folder;
        elem.addEventListener('click', async (item) => {
            play.src = 'Images/playSong.svg';
            songs = await getSongs(`Songs/${songsFolder}`);
            playMusic(songs[0], false);
        });
    });
}

async function main (){
    let songs = await getSongs('Songs/Sadabahar');
    playMusic(songs[0], true);

    //Display all the albums
    displayAlbums();

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
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector('.circle').style.left = percent + '%';
        currentSong.currentTime = ((currentSong.duration )* percent) / 100;
    });

    //Adding hamburger menu
    document.querySelector('.hamburgur').addEventListener('click', () => {
        document.querySelector('.left').style.left = 0;;
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
    document.querySelector('.volume').addEventListener('mouseover', ()=> {
        document.querySelector('.range').classList.remove('hide');
    });
    document.querySelector('.volume').addEventListener('mouseout', ()=> {
        document.querySelector('.range').classList.remove('hide');      
        document.querySelector('.range').classList.add('hide');   
    });

    document.querySelector('.range').getElementsByTagName('input')[0]
        .addEventListener('change', (e)=> {
            currentSong.volume = parseInt(e.target.value) / 100;
        });

    //mute volume
    document.querySelector('.volume img').addEventListener('click', (e)=> {
        if(e.target.src.includes('Images/volume.svg')){
            e.target.src = e.target.src.replace('Images/volume.svg',"Images/mute.svg");
            currentSong.volume = 0;
            document.querySelector('.range').getElementsByTagName('input')[0].value = 0;
        }else {
            e.target.src = e.target.src.replace("Images/mute.svg",'Images/volume.svg');
            currentSong.volume = 0.1;
            document.querySelector('.range').getElementsByTagName('input')[0].value = 10;
        }
    })

}

main();