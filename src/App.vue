<template>
  <i-tunes
    :isSelected="isSelected"
    :isPlaying="isPlaying"
    :albums="albums"
    @selectedAlbum="selected"
    @playTrack="playTrack"
    @nextTrack="nextTrack"
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
      isSelected: {},
      isAudioDuration: null,
      isVolume: Number,
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
      ],
    };
  },
  methods: {
    selected(album) {
      this.trackIndex = 0;
      this.isPlaying = false
      this.isSelected = album;
      let trackArray = Object.keys(this.isSelected.audio);
      let trackName = trackArray[this.trackIndex];
      this.isSelected.trackSelected = true
      this.isSelected.trackName = trackName;
      this.audio.src = this.isSelected.audio[trackName];
      this.isVolume = this.audio.volume 
    },
    playTrack() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.audio.play();
      } else {
        this.isPlaying = false;
        this.audio.pause();
      }
    },
    nextTrack() {
      let trackArray = Object.keys(this.isSelected.audio);
      let trackName = trackArray[this.trackIndex++];
      this.isSelected.trackName = trackName;
      this.audio.src = this.isSelected.audio[trackName];
      console.log(this.isSelected.trackName);
      this.audio.play()
    },
    prevTrack() {
      let trackArray = Object.keys(this.isSelected.audio);
      let trackName = trackArray[this.trackIndex--];
      this.isSelected.trackName = trackName;
      this.audio.src = this.isSelected.audio[trackName];
    },
  },
};
</script>
