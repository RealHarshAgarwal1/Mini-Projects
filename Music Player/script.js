var arr=[
    {
        songName:"Jale 2",url:"./songs/Jale 2.mp3",cover:"./Posters/jale.jpg"
    },
    {
        songName:"Pehle Bhi main",url:"./songs/Pehle Bhi main.mp3",cover:"./Posters/animal.jpg"
    },
    {
        songName:"Ram siya ram",url:"./songs/Ram siya ram.mp3",cover:"./Posters/ram.jpg"
    },
    {
        songName:"Arjan Valley",url:"./songs/Arjan Vailly Ne.mp3",cover:"./Posters/animal.jpg"
    }
]
var audio = new Audio();
var allSongs = document.querySelector("#all-songs")
var banner=document.querySelector("#left");
var selectedSong=0;
var play=document.querySelector("#play");
var backward=document.querySelector("#backward");
var forward=document.querySelector("#forward");

function songList(){
    var clutter="";
arr.forEach(function(song,idx) {
    console.log(song);
    clutter+=`<div class="song-card" id=${idx}>
    <div class="part-1">
    <img  class="song" src=${song.cover} alt="">
    <h2>${song.songName}</h2>
    </div>
    <h6>2:54</h6>
</div>`
});
allSongs.innerHTML=clutter;
audio.src=arr[selectedSong].url;
banner.style.backgroundImage=`url(${arr[selectedSong].cover})`
}
songList();
allSongs.addEventListener("click",function(detail){
    selectedSong= detail.target.id;
    play.innerHTML="<i class='ri-pause-line'></i>";
    songList();
    audio.play();
})
var flag=0;
play.addEventListener("click",function(){
    if(flag===0){
        play.innerHTML="<i class='ri-pause-line'></i>";
        audio.play();
        flag=1;
    }else{
        play.innerHTML="<i class='ri-play-fill'></i>";
        audio.pause();
        flag=0;
    }
})
forward.addEventListener("click",function(){
    selectedSong++;
    if(selectedSong>=arr.length){
        selectedSong=0;
    }
    songList();
    play.innerHTML="<i class='ri-pause-line'></i>";
    audio.play();
})
backward.addEventListener("click",function(){
    selectedSong--;
    if(selectedSong<=0){
        selectedSong=arr.length-1;
    }
    songList();
    play.innerHTML="<i class='ri-pause-line'></i>";
    audio.play();
})