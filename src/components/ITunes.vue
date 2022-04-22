<template>
  <i-header 
    :selected='selected'
    :playing="playing"
    :audio="audio"
    :isPlaying='isPlaying'
    :isVolume="isVolume"
    :isLoopTrack="isLoopTrack"
    :isLoopAlbum="isLoopAlbum" 
    :isMixTracks="isMixTracks"

    @mixTracks="mixTracks"
    @updateVolume="$emit('updateVolume', $event)"
    @updateProgress="$emit('updateProgress', $event)"
    @playTrack="$emit('playTrack', $event)"
    @prevTrack="$emit('prevTrack', $event)"
    @nextTrack="$emit('nextTrack', $event)"
    @loop="loop"/>
  <main class="main bg-background">
    <i-sidebar />
    <i-section
      :selected='selected' 
      :albums="albums"
      :albumPlaylist="albumPlaylist"
      :isPlaying='isPlaying'
      :isShowPlaylist="isShowPlaylist"
      :albumsRows="albumsRows"
      :playing="playing"
      :trackIndex="trackIndex"
      
      @selectedAlbum="selectedAlbum"
      @playTrack="playTrack"
      @showPlaylist="showPlaylist"
    /> 
  </main>


</template>

<script>
import IHeader from '@/components/IHeader/IHeader.vue'
import ISidebar from '@/components/ISidebar/ISidebar.vue'
import ISection from '@/components/ISection/ISection.vue'

export default {
  name: 'i-tunes',
  data() {
    return{

    }
  },
  props: {
    albums: {
      type: Array,
      required: true
    },
    albumPlaylist: {
      type: Object
    },
    selected:{
      type: Object
    },
    playing: {
      type: Object,
    },
    isPlaying:{
      type: Boolean
    },
    isLoopTrack:{
      type: Boolean
    },
    isLoopAlbum:{
      type: Boolean
    },
    isVolume:{
      type: Number,
    },
    audio:{
      type: Object
    },
    isShowPlaylist: {
      type: Number
    },
    albumsRows: {
      type: Array
    },
    trackIndex: {
      type: Number
    },
    isMixTracks: {
      type: Boolean
    }
  },
  components: {
    IHeader,
    ISection,
    ISidebar,
  },
  methods: {
    selectedAlbum(album, trackIndex, key){
      this.$emit('selectedAlbum', album, trackIndex, key)
    },
    playTrack(trackIndex){
      this.$emit('playTrack', trackIndex)
    },
    showPlaylist(album, index){
      this.$emit('showPlaylist', album, index)
    },
    loop(count){
      this.$emit('loop', count)
    },
    mixTracks(){
      this.$emit('mixTracks')
    }
  },
  emits: ["nextTrack",
          "prevTrack", 
          "playTrack",
          "updateVolume",
          'selectedAlbum',
          "updateProgress",
          "playAlbum",
          "showPlaylist", 
          "loop",
          "mixTracks"
    ], 
};
</script>

<style lang="sass" scoped></style>
