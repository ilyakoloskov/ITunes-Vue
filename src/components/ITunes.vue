<template>
  <i-header 
    :selected='selected'
    :playing="playing"
    :isPlaying='isPlaying'
    :isVolume="isVolume"
    :audio="audio"
    @updateVolume="$emit('updateVolume', $event)"
    @updateProgress="$emit('updateProgress', $event)"
    @playTrack="$emit('playTrack', $event)"
    @prevTrack="$emit('prevTrack', $event)"
    @nextTrack="$emit('nextTrack', $event)"/>
  <main class="main bg-background">
    <i-sidebar />
    <i-section
      :selected='selected' 
      :albums="albums"
      :albumPlaylist="albumPlaylist"
      :isPlaying='isPlaying'
      :isShowPlaylist="isShowPlaylist"
      @selectedAlbum="selectedAlbum"
      @playTrack="playTrack"
      @showPlaylist="showPlaylist"

      :albumsRows="albumsRows"
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
    }
  },
  components: {
    IHeader,
    ISection,
    ISidebar,
  },
  methods: {
    selectedAlbum(album){
      this.$emit('selectedAlbum', album)
    },
    playTrack(event){
      this.$emit('playTrack', event)
    },
    showPlaylist(album, index){
      this.$emit('showPlaylist', album, index)
    }
  },
  emits: ["nextTrack","prevTrack", "playTrack","updateVolume",'selectedAlbum',"updateProgress","playAlbum","showPlaylist"], 
};
</script>

<style lang="sass" scoped></style>
