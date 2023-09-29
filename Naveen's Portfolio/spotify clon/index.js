console.log("welcome to spotify")
//Initialize the Variables
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let marterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName("songitem"));




let songs = [
    { songName: 'Softly', filepath: '1.mp3', coverpath: '1.jpg' },
    { songName: 'Admirie you', filepath: '2.mp3', coverpath: '2.jpg' },
    { songName: 'Jee ni lagda', filepath: '3.mp3', coverpath: '3.jpg' },
    { songName: 'Check Kar', filepath: '4.mp3', coverpath: '4.jpg' },
    { songName: 'Cheque', filepath: '5.mp3', coverpath: '5.jpg' },
    { songName: 'Still Rolline', filepath: '6.mp3', coverpath: '6.jpg' },
    { songName: 'Minna Minna', filepath: '7.mp3', coverpath: '7.jpg' }, 
    { songName: 'Old Skool', filepath: '8.mp3', coverpath: '8.jpg' },
    { songName: 'Ute Dekh', filepath: '9.mp3', coverpath: '9.jpg' },
    

]
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    element.get
})

// Handler play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})

audioElement.addEventListener('timeupdate',()=>{
   
    //Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
    myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime= myProgressBar.value*audioElement.duration/100;

    })
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id)
        makeAllPlay();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause"); 
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');



    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})