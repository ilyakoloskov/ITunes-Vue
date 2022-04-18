<template>
  <div class="album display-3">
    <div class="album__img-wrap">
      <img class="album__img img-cover" :src="album.albumCover" @click="$emit('showPlaylist', album)"/>
      <div class='album__button-wrap'>
        <i-button
          class='album__button'
          :type="selected.id === album.id && isPlaying ? 'pause' : 'play'"
          @click="playInPlayList(album, trackIndex), $emit('playTrack', album)"
        />
      </div>
    </div>
    <span class="album__subname clip-text">{{ album.artistName }}</span>
    <span class="album__name color-alternate clip-text">{{ album.albumName }}</span>
  </div>

</template>

<script>
import IButton from '../UI/IButton.vue';
export default {
  components: { IButton },
  data() {
    return {
      albumTrackIndex: 0,
    }
  },
  name: "i-album",
  methods: {
    playInPlayList(album, trackIndex){
      if(this.album != this.selected) {
        this.$emit('selectedAlbum', album, this.albumTrackIndex)
        console.log('if')
      }else{
        this.$emit('selectedAlbum', album, trackIndex)
        console.log('else')
      }
    }
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
    isPlaying: {
      type: Boolean,
    },
    selected: {
      type: Object,
    },
    trackIndex: {
      type: Number
    }
  },
  emits: ["playTrack", "selectedAlbum", "showPlaylist"],
  computed: {

  }
};
</script>

<style lang="sass">
.album
  &__button
    display: flex
    align-items: center
    &-wrap
      width: 40px
      height: 40px
      position: absolute
      display: flex 
      place-content: center 
      left: 5%
      bottom: 5%
      z-index: 10
      border-radius: 50%
      background-color: rgba(240,240,240, 0.9)
      display: none
      svg
        width: 30px
        height: 30px
      path 
        fill: rgba(16,107,255,1) !important
  &__img-wrap
    &:hover
      outline: 2px solid rgba(16,107,255,1)
  
      .album__button-wrap
        display: flex


    
</style>
