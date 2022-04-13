<template>
  <i-tunes
    :selected="selected"
    :albumPlaylist="albumPlaylist"
    :isPlaying="isPlaying"
    :playing="playing"
    :isVolume="isVolume"
    :isShowPlaylist="isShowPlaylist"
    :albums="albums"
    :audio="audio"
    :albumsRows="albumsRows"

    @updateVolume="updateVolume"
    @updateProgress="updateProgress"
    @selectedAlbum="selectedAlbum"
    @prevTrack="prevTrack"
    @playTrack="playTrack"
    @nextTrack="nextTrack"
    @showPlaylist="showPlaylist"
  />
</template>

<script>
import ITunes from "./components/ITunes.vue";

export default {
  name: "App",
  components: {
    "i-tunes": ITunes,
  },
  data() {
    return {
      audio: new Audio(),
      trackIndex: 0,
      isPlaying: false,
      selected: {},
      playing: {},
      albumPlaylist:{},
      isVolume: 0,
      isShowPlaylist: -1,
      // Массив альбомов
      albums: [
        {
          artistName: "$UICIDEBOY$",
          albumName: "Dark Side Of The Clouds",
          albumCover: "./assets/covers/darkSideOfTheClouds.png",
          audio: {
            "Aite, Bet": "./assets/audio/Aite, bet.mp3",
            "CHERISH THE DEAD": "./assets/audio/CHERISH THE DEAD.mp3",
          },
          id: 1,
        },
        {
          artistName: "Slaughter To Prevail",
          albumName: "Kostolom",
          albumCover: "./assets/covers/kostolom.jpg",
          audio: {
            Bonebreaker: "./assets/audio/Bonebreaker.mp3",
          },
          id: 2,
        },
        {
          artistName: "Mick Gordon",
          albumName: "Doom",
          albumCover: "./assets/covers/doom.jpg",
          audio: {
            "Vega Core": "./assets/audio/VegaCore.mp3",
          },
          id: 3,
        },
        {
          artistName: "Heart In Hand",
          albumName: "Only Memories",
          albumCover: "./assets/covers/HeartInHand.jpeg",
          audio: {
            "Ghosts": "./assets/audio/Ghosts.mp3",
            "September": "./assets/audio/September.mp3",
          },
          id: 4,
        },
        {
          artistName: "$UICIDEBOY$",
          albumName: "Dark Side Of The Clouds",
          albumCover: "./assets/covers/darkSideOfTheClouds.png",
          audio: {
            "Aite, Bet": "./assets/audio/Aite, bet.mp3",
            "CHERISH THE DEAD": "./assets/audio/CHERISH THE DEAD.mp3",
          },
          id: 5,
        },
        {
          artistName: "Linkin Park",
          albumName: "Meteora",
          albumCover: "./assets/covers/Meteora.jpeg",
          audio: {
            "Somewhere I Belong": "./assets/audio/Somewhere I Belong.mp3",
          },
          id: 6,
        },
        {
          artistName: "$UICIDEBOY$",
          albumName: "Dark Side Of The Clouds",
          albumCover: "./assets/covers/darkSideOfTheClouds.png",
          audio: {
            "Aite, Bet": "./assets/audio/Aite, bet.mp3",
            "CHERISH THE DEAD": "./assets/audio/CHERISH THE DEAD.mp3",
          },
          id: 7,
        },
        {
          artistName: "$UICIDEBOY$",
          albumName: "Dark Side Of The Clouds",
          albumCover: "./assets/covers/darkSideOfTheClouds.png",
          audio: {
            "Aite, Bet": "./assets/audio/Aite, bet.mp3",
            "CHERISH THE DEAD": "./assets/audio/CHERISH THE DEAD.mp3",
          },
          id: 8,
        },
        
      ],
      styleInConsole: [
        'padding: 0.2rem 0.5rem;',
        'background: rgba(65,65,65,1);',
        'border-radius: 5px;',
        'color: rgba(223,223,223,1);'].join('')
      };
  },
  methods: {
    // Метод выбора альбома
    selectedAlbum(album) {
      // 1. Передаём параметром ассоциативный массив album (альбом который был выбран в компоненте) в глобальную переменню isSelected
      if(this.selected === album){
        console.log('Этот альбом уже выбран')
      }else{
        this.isPlaying = false
        this.selected = album;
        this.trackIndex = 0;
        let trackArray = Object.keys(this.selected.audio);
        let trackName = trackArray[this.trackIndex];
        // console.groupCollapsed('%c%s', this.styleInConsole, `5. Передаём в переменную trackName индекс массива, который являются названием трека`)
        //   console.log('%c%s', this.styleInConsole, 'Название трека:', trackName)
        // console.groupEnd();
        this.selected.trackSelected = true
        this.selected.trackName = trackName;
        this.audio.src = this.selected.audio[trackName];
        this.isVolume = this.audio.volume
        console.log('Выбран другой альбом')
      } 
      
      console.groupCollapsed('%c%s', this.styleInConsole,'Выбранный альбом',this.selected.artistName,'-', this.selected.albumName)
          console.groupCollapsed('%c%s', this.styleInConsole, '1. Передаём значение выбранного алобома в глобальную переменную selected ') 
          console.table(this.selected)
        console.groupEnd();
      console.groupEnd();
      
    },
    playTrack() {
        console.groupCollapsed('%c%s', this.styleInConsole, `2. При выборе альбома проигрывание трека начинается с первого элемента массива`)
        console.log('%c%s', this.styleInConsole, 'trackIndex:', this.trackIndex)
        console.groupEnd()
        this.playing = this.selected
        this.playing.albumSelected = true
      let time = setInterval(()=> { 
          this.audioCurentTime = Math.floor(this.audio.currentTime)
          this.playing.currentTime = Math.floor(this.audio.currentTime)
          if(this.audio.currentTime == this.audio.duration){
            console.log('Трек кончился')
            this.nextTrack()
          } 
          }, 1000 )
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.audio.play(); 
        if(Object.keys(this.playing).length == 0){
          this.isPlaying = false;
          console.log('Играет рандомный трек')
        }
      }
      else {
        this.isPlaying = false;
        this.audio.pause();
        clearInterval(time)
      }
    },
    nextTrack() {
      let trackArray = Object.keys(this.selected.audio);
      let trackName = trackArray[++this.trackIndex];
      this.selected.trackName = trackName;
      this.audio.src = this.selected.audio[trackName];
      console.log(trackArray)
      console.log(this.selected.trackName);
      this.isPlaying == false ? this.audio.pause() : this.audio.play()
      if(trackArray.length - 1  < this.trackIndex){
        this.reset()
      }
    },
    prevTrack() {
      let trackArray = Object.keys(this.selected.audio);
      if(this.audio.currentTime > 3){
        let trackName = trackArray[this.trackIndex];
        this.selected.trackName = trackName;
        this.audio.src = this.selected.audio[trackName];
        console.log(this.selected.trackName);
      }
      else{
        let trackName = trackArray[--this.trackIndex];
        this.selected.trackName = trackName;
        this.audio.src = this.selected.audio[trackName];
        console.log(this.selected.trackName);
      }
      if(this.trackIndex < 0){
        this.reset()
      }
      this.isPlaying == false ? this.audio.pause() : this.audio.play()
    },
    updateVolume(value){
      this.isVolume = +value
      this.audio.volume = +value
    },
    updateProgress(value){
      this.audio.currentTime = +value
      if(this.audio.currentTime == this.audio.duration){
        console.log('Трек кончился')
        this.nextTrack()
      }  
    },
    showPlaylist(album, index){
      if(this.albumPlaylist.id != album.id){
        this.isShowPlaylist = index
      }
      else {
        this.isShowPlaylist == !this.isShowPlaylist
        if(this.isShowPlaylist == index && index != -1){
          this.isShowPlaylist = -1
        }else{
          this.isShowPlaylist = index
        }
      }
      this.albumPlaylist = album
      console.log(index)
    },
    // ФУНКЦИЯ ДЛЯ СБРОСА ВСЕХ ГЛОБАЛЬНЫХ ДАННЫХ
    reset(){
      this.trackIndex = 0
      this.playing = {}
      this.selected = {}
      this.isPlaying = false
      this.isShowPlaylist = -1
    }
  },
  computed:{
    albumsRows(){
      let rows = []
      for(let i = 0; this.albums.length > i; i += 6){
        rows.push(this.albums.slice(i, i + 6))
      }
      return rows
    }
  }
};
</script>
<style lang="sass">
body
  overflow-y: scroll

body::-webkit-scrollbar 
  width: 5px

 
body::-webkit-scrollbar-track 
  background-color: rgba(38,38,38,1)

 
body::-webkit-scrollbar-thumb 
  background-color: rgba(151,151,151, 1)
  border-radius: 5px



</style>