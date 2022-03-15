<template>
  <i-header 
    :isSelected='isSelected'
    :isPlaying='isPlaying'
    :isVolume="isVolume"
    @updateVolume="$emit('updateVolume', $event)"
    @playTrack="$emit('playTrack', $event)"
    @prevTrack="$emit('prevTrack', $event)"
    @nextTrack="$emit('nextTrack', $event)"/>
  <main class="main bg-background">
    <i-sidebar />
    <i-section 
      :albums="albums"
      @selectedAlbum="selectedAlbum"
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
    isSelected:{
      type: Object
    },
    isPlaying:{
      type: Boolean
    },
    isVolume:{
      type: String
    }
  },
  components: {
    IHeader,
    ISection,
    ISidebar
  },
  methods: {
    selectedAlbum(album){
      console.log(album)
      this.$emit('selectedAlbum', album)
    },
  },
  emits: ["nextTrack","prevTrack", "playTrack"], 
};
</script>

<style lang="sass" scoped></style>
