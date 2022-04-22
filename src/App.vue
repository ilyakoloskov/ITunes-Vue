<template>
  <i-tunes
    :selected="selected"
    :albumPlaylist="albumPlaylist"
    :playing="playing"
    :albums="albums"
    :audio="audio"
    :albumsRows="albumsRows"
    :trackIndex="trackIndex"
    :isVolume="isVolume"
    :isShowPlaylist="isShowPlaylist"
    :isLoopTrack="isLoopTrack"
    :isLoopAlbum="isLoopAlbum"
    :isPlaying="isPlaying"
    :isMixTracks="isMixTracks"

    @mixTracks="mixTracks"
    @updateVolume="updateVolume"
    @updateProgress="updateProgress"
    @selectedAlbum="selectedAlbum"
    @prevTrack="prevTrack"
    @playTrack="playTrack"
    @nextTrack="nextTrack"
    @showPlaylist="showPlaylist"
    @loop="loop"
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
      selected: {},
      playing: {},

      albumPlaylist:{},
      isVolume: 0.8,
      isShowPlaylist: -1,
      isMixTracks: false,
      isPlaying: false,
      isLoopTrack: false,
      isLoopAlbum: false,
      // Массив альбомов
      albums: [
        {
          artistName: "$uicideboy$",
          albumName: "Dark Side Of The Clouds",
          albumCover: "./assets/covers/$uicideboy$/DarkSideOfTheClouds.png",
          audio: {
            "Aite, Bet": "./assets/audio/$uicideboy$/DarkSideOfTheClouds/Aite,bet.mp3",
          },
          id: 1,
        },
        {
          artistName: "$uicideboy$",
          albumName: "My Liver Will Handle What My Heart Can't",
          albumCover: "./assets/covers/$uicideboy$/MyLiverWillHandleWhatMyHeartCant.png",
          audio: {
            "CHERISH THE DEAD": "./assets/audio/$uicideboy$/MyLiverWillHandleWhatMyHeartCan't/CherishTheDead.mp3",
          },
          id: 2,
        },
        {
          artistName: "Slaughter To Prevail",
          albumName: "Kostolom",
          albumCover: "./assets/covers/SlaughterToPrevail/Kostolom.jpg",
          audio: {
            Bonebreaker: "./assets/audio/SlaughterToPrevail/Kostolom/Bonebreaker.mp3",
          },
          id: 3,
        },
        {
          artistName: "Mick Gordon",
          albumName: "Doom",
          albumCover: "./assets/covers/Doom/Doom.jpg",
          audio: {
            "Vega Core": "./assets/audio/Doom/VegaCore.mp3",
          },
          id: 4,
        },
        {
          artistName: "Heart In Hand",
          albumName: "Only Memories",
          albumCover: "./assets/covers/HeartInHand/OnlyMemories.jpeg",
          audio: {
            "Ghosts": "./assets/audio/HeartInHand/OnlyMemories/Ghosts.mp3",
            "September": "./assets/audio/HeartInHand/OnlyMemories/September.mp3",
          },
          id: 5,
        },
        {
          artistName: "Heart In Hand",
          albumName: "Almost There",
          albumCover: "./assets/covers/HeartInHand/AlmostThere.jpeg",
          audio: {
            "Almost There": "./assets/audio/HeartInHand/AlmostThere/AlmostThere.mp3",
            "Latter": "./assets/audio/HeartInHand/AlmostThere/Latter.mp3",
            "Sleeping Alone": "./assets/audio/HeartInHand/AlmostThere/SleepingAlone.mp3",
          },
          id: 6,
        },
        {
          artistName: "Linkin Park",
          albumName: "Meteora",
          albumCover: "./assets/covers/LinkinPark/Meteora.jpeg",
          audio: {
            "Somewhere I Belong": "./assets/audio/LinkinPark/Meteora/SomewhereIBelong.mp3",
          },
          id: 7,
        },
        {
          artistName: "Rozz Dyliams",
          albumName: "SUS PhiXioN",
          albumCover: "./assets/covers/RozzDyliams/Criminy.jpeg",
          audio: {
            "Criminy [Chopped & Screwed] PhiXioN": "./assets/audio/RozzDyliams/Criminy/Criminy.mp3",
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
    selectedAlbum(album, trackIndex, key) {
      // ШАБЛОН КОМЕНТАРИЕВ
    // console.groupCollapsed('%c%s', this.styleInConsole, `5. Передаём в переменную trackName индекс массива, который являются названием трека`)
      //   console.log('%c%s', this.styleInConsole, 'Название трека:', trackName)
      // console.groupEnd();

        if(this.selected === album) {
          if(this.trackIndex != trackIndex){
            this.isPlaying = false
            this.trackIndex = trackIndex
            let trackArray = Object.keys(this.selected.audio);
            let trackName = trackArray[this.trackIndex];
            this.selected.trackName = trackName;
            this.audio.src = this.selected.audio[trackName]
          }
        }else{
          this.trackIndex = trackIndex
          this.isPlaying = false
          this.selected = album;
          let trackArray = Object.keys(this.selected.audio);
          let trackName = trackArray[this.trackIndex];
          this.selected.trackName = trackName;
          console.log('key', key, 'trackName')
          this.audio.src = this.selected.audio[trackName]
          console.log('Выбран другой альбом')
        }
    },
    playTrack(trackIndex) {
        console.groupCollapsed('%c%s', this.styleInConsole, `2. При выборе альбома проигрывание трека начинается с первого элемента массива`)
        console.log('%c%s', this.styleInConsole, 'trackIndex:', this.trackIndex)
        console.groupEnd()

        this.playing = this.selected
        // this.playing.albumSelected = true
      let time = setInterval(()=> { 
          this.audioCurentTime = Math.floor(this.audio.currentTime)
          this.playing.currentTime = Math.floor(this.audio.currentTime)
          if(this.audio.currentTime == this.audio.duration){
            console.log('Трек кончился')
            this.nextTrack()
          } 
          }, 1000 )
      if (!this.isPlaying) {
        if(Object.keys(this.playing).length === 0){
          this.isPlaying = false;
          console.log('Играет рандомный трек')
        }
        console.log(Object.keys(this.playing))
        this.isPlaying = true;
        this.audio.play(); 
      }
      else {
        this.isPlaying = false;
        this.audio.pause();
        clearInterval(time)
      }
    console.log(trackIndex)
    },
    nextTrack() {
      let trackArray = Object.keys(this.selected.audio);
      let trackName = trackArray[++this.trackIndex];
      this.selected.trackName = trackName;
      this.audio.src = this.selected.audio[trackName];
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
    loop(count){
      if(count === 1){
        let album = Object.keys(this.selected.audio)
        let albumLength = Object.keys(this.selected.audio).length
        let lastTrack = album[album.length - 1]
        this.isLoopAlbum = true
        if(albumLength === this.trackIndex){
          this.trackIndex = 0
          console.log('if ed3d343d34d34:', this.trackIndex)
        }
        console.log('length',Object.keys(this.selected.audio).length - 1, 'trackIndex', this.trackIndex, 'lastTrack', lastTrack)
        // if(albumLength === this.trackIndex){
        //   console.log('Repeat album:', albumLength, this.trackIndex)
        //   this.trackIndex = 0
        // }
        // console.log('Repeat album:', lastTrack, album[this.trackIndex])
      }else if(count === 2){
        this.isLoopTrack = true
        console.log('Repeat track')
      }else if(count >= 2){
        this.isLoopTrack = false
        this.isLoopAlbum = false
        console.log('Repeat false')
      }
      this.audio.loop = this.isLoopTrack
    },
    mixTracks(){
      this.isMixTracks = !this.isMixTracks
      console.log(this.isMixTracks)
    },
    updateVolume(value){
      this.isVolume = +value
      this.audio.volume = this.isVolume 
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
    },
    // ФУНКЦИЯ ДЛЯ СБРОСА ВСЕХ ГЛОБАЛЬНЫХ ДАННЫХ
    reset(){
      this.trackIndex = 0
      this.playing = {}
      this.selected = {}
      this.isPlaying = false
      // Скрываем плейлист 
      // this.isShowPlaylist = -1
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


