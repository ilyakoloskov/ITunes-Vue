<template>
  <div class="search-view">
    <div class="search-view__wrap">
      <div class="search-view__inner">
        <span class="search-view__name display-1">Artists</span>
        <ul class="search-view__list">
          <i-album class='search-view__li'
            v-for="album in albums" 
            :key="album.id" 
            :album="album"
            :selected='selected' 
            :trackIndex="trackIndex"
            :isPlaying='isPlaying'

            @selectedAlbum="selectedAlbum"
            @playTrack="$emit('playTrack', album)"
        />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IAlbum from "@/components/ISection/IAlbum.vue";

export default {
  props: {
    albums: {
      type: Array,
    },
    selected: {
      type: Object,
    },
    trackIndex: {
        type: Number
    },
    isPlaying: {
        type: Boolean
    },
  },
  components: {
    IAlbum,
  },
  methods: {
    selectedAlbum(album, trackIndex, key){
      this.$emit('selectedAlbum', album, trackIndex, key)
    },
    playTrack(trackIndex){
      this.$emit('playTrack', trackIndex)
    }
  },
  emits: ["playTrack", "selectedAlbum"],
};
</script>

<style lang="sass">
.search-view
    position: absolute
    top: 50px
    min-height: 10vh
    max-height: 50vh
    width: 25vw
    right: 2vh
    background: rgba(38,38,38,1)
    padding: 10px 20px
    border: 1px solid rgba(151,151,151, 0.5)
    border-radius: 10px
    overflow-y: scroll
    &__inner
        margin-bottom: 10px
    &__name
        border-bottom: 1px solid rgba(151,151,151, 0.5)
        display: block
        margin-bottom: 5px
    &__li
        display: flex
        align-items: center
        margin-bottom: 5px
    .album__img-wrap
        height: 50px
    .album__button-wrap
        width: 35px
        height: 35px
        left: 15%
        bottom: 15%
    &__cover
        width: 50px
        height: 50px
        margin-right: 10px
        border-radius: 5px
        background-size: cover
    &__track-name
        margin-bottom: 5px

    &__list
        .album
            display: flex
            flex-direction: row
</style>
