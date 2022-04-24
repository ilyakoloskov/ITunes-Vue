<template>
    <i-albums-row
      :selected='selected' 
      :albums="albums"
      :isPlaying='isPlaying'
      :albumPlaylist="albumPlaylist"
      :isShowPlaylist="isShowPlaylist"
      :albumsRows="albumsRows"
      :playing="playing"
      :trackIndex="trackIndex"
      @selectedAlbum="selectedAlbum"
      @playTrack="playTrack"
      @showPlaylist="showPlaylist"
    />
</template>

<script>

import IAlbumsRow from '@/components/ISection/IAlbumsRow.vue'

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
    playing: {
      type: Object
    },
    trackIndex: {
      type: Number
    }
  },
  data(){
    return{
      
    }
  },
  methods: {
    selectedAlbum(album, trackIndex, key){
      this.$emit('selectedAlbum', album, trackIndex, key)
    },
    showPlaylist(album, index){
      this.$emit('showPlaylist', album, index)
    },
    playTrack(trackIndex){
      this.$emit('playTrack', trackIndex)
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
