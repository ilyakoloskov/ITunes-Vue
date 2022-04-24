<template>
  <div class="main-view__row" 
    v-for="(albumRow, index) in albumsRows" :key="albumRow.id">
    <div class="main-view__album-wrapper">
      <i-album
        v-for="album in albumRow"
        :key="album.id"
        :album="album"

        :isPlaying="isPlaying"
        :selected="selected"
        :trackIndex="trackIndex"
        @selectedAlbum="selectedAlbum"
        @playTrack="$emit('playTrack', album)"
        @showPlaylist="$emit('showPlaylist', album, index)"
      />
    </div>
    <transition-group name="play-list">
      <i-play-list 
        v-if="isShowPlaylist == index" 
        :albumPlaylist="albumPlaylist"
        :isPlaying="isPlaying"
        :selected="selected"
        :trackIndex="trackIndex"
        :playing="playing"
        @selectedAlbum="selectedAlbum"
        @playTrack="playTrack"
      />
      
    </transition-group>
  </div>

</template>

<script>
import IAlbum from "./IAlbum.vue";
import IPlayList from "./IPlayList.vue";

export default {
  name: "i-albums-row",
  data(){
    return{
      
    }
  },
  components: {
    IAlbum,
    IPlayList,
  },
  props: {
    albums: {
      type: Array,
      required: true,
    },
    isPlaying: {
      type: Boolean,
    },
    selected: {
      type: Object,
    },
    isShowPlaylist: {
      type: Number,
    },
    albumsRows: {
      type: Array
    },
    albumPlaylist: {
      type: Object
    },
    playing: {
      type: Object
    },
    trackIndex: {
      type: Number
    }
  },
  computed:{

  },
  methods: {
    selectedAlbum(album, trackIndex, key){
      this.$emit('selectedAlbum', album, trackIndex, key)
    },
    playTrack(trackIndex){
      this.$emit('playTrack', trackIndex)
    }
  },
  emits: ["selectedAlbum", "playTrack", "playAlbum", "showPlaylist"],
};
</script>

<style lang="sass" scoped>
.play-list-enter-active,
.play-list-leave-active 
  transition: all 0.5s ease
  max-height: 100vh
  border-top: 1px solid RGBA(50,50,50,1)
  border-bottom: 1px solid RGBA(50,50,50,1)

.play-list-enter-from,
.play-list-leave-to 
  max-height: 0vh
  padding: 0 40px
  border-top: 1px solid RGBA(150,150,150,1)
  border-bottom: 1px solid RGBA(50,50,50,1)

.play-list-move 
  transition: transform 0.5s ease

</style>
