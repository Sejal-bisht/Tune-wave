console.log("welcome to  tune waves");

//Initializing the Variables here
let songIndex = 0;
let audioElement = new Audio('CS.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName: "Counting Stars", filePath: "CS.mp3", coverPath:"Counting Stars.jpg"},
    {songName: "Game Of Thrones Theme Song", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Counting Starts", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Counting Starts", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Counting Starts", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Counting Starts", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Counting Starts", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
 if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("fa-solid fa-play");
    masterPlay.classList.add("fa-solid fa-circle-pause");
    gif.style.opacity = 1;
 }    
 else{
        audioElement.pause();
        masterPlay.classList.remove("fa-solid fa-circle-pause");
        masterPlay.classList.add("fa-solid fa-play");
        gif.style.opacity = 0;
 }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seek
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;    
})
