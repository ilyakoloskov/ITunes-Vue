<template>
  <section class="main-view">
    <i-albums-row
      :selected='selected' 
      :albums="albums"
      :isPlaying='isPlaying'
      :albumPlaylist="albumPlaylist"
      :isShowPlaylist="isShowPlaylist"
      :albumsRows="albumsRows"
      @selectedAlbum="selectedAlbum"
      @playTrack="$emit('playTrack', album, index)"
      @showPlaylist="showPlaylist"
    />
  </section>

</template>

<script>

import IAlbumsRow from './IAlbumsRow.vue'

export default {
  name: 'i-section',
  props: {
    albums: {
      type: Array,
      required: true
    },
    isPlaying: {
      type: Boolean,
    },
    selected: {
      type: Object,
    },
    isShowPlaylist: {
      type: Number
    },
    albumsRows: {
      type: Array
    },
    albumPlaylist: {
      type: Object
    },
  },
  data(){
    return{
      
    }
  },
  methods: {
    selectedAlbum(album){
      this.$emit('selectedAlbum', album)
    },
    showPlaylist(album, index){
      this.$emit('showPlaylist', album, index)
    },
    playTrack(event){
      this.$emit('playTrack', event)
    },
  },
  computed: {

  },
  components: {
    IAlbumsRow
    
  },
  emits: ["selectedAlbum", "playTrack","playAlbum","showPlaylist"],
};
</script>

<style lang="sass">





</style>
