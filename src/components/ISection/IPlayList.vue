<template>
    <div class="playlist">
      <div
        class="playlist__cover"
        :style="{
          backgroundImage: 'url(' + albumPlaylist.albumCover + ')',
        }"
      >
        <i-button
          class='playlist__cover-btn' 
          :type="selected.id === albumPlaylist.id && isPlaying ? 'pause' : 'play'"
          @click="playInPlayList(albumPlaylist, trackIndex), $emit('playTrack', album)"
        />
      </div>
    
      <div class='playlist__wrap'>
        <strong class='playlist__album-name h3'>{{albumPlaylist.albumName}}</strong>
        <h3 class='playlist__artist-name color-primary h3'>{{albumPlaylist.artistName}}</h3>
        <ul class="playlist__list display-3">
          <li class="playlist__item"
            v-for="(audio, key, index) in albumPlaylist.audio" :key="audio.id"

          >
            <!-- v-on:mouseover="mouseOverPlaylistItem(index)"
            v-on:mouseleave="mouseleavePlaylistItem(index)" -->
          <div class='playlist__item-inner'>
            <div 
              class='playlist__item-inner-btn'>
              <i-button
                v-if="selected.id === albumPlaylist.id && trackIndex === index && playingItem"
                class='playlist__item-btn playlist__item-btn-volume'
                :type="selected.id === albumPlaylist.id && trackIndex === index && isPlaying ? 'volumeOn' : 'volumeOff'"
                @click="$emit('selectedAlbum', albumPlaylist, index, key), $emit('playTrack', index), playingItem = true"
              />

              <i-button
                class='playlist__item-btn playlist__item-btn-play' 
                :type="selected.id === albumPlaylist.id && trackIndex === index && isPlaying ? 'pause' : 'play'"
                @click="$emit('selectedAlbum', albumPlaylist, index, key), $emit('playTrack', index)"
              />
            </div>
            <span  
              :class="{
                'btn-hide': selected.id === albumPlaylist.id && trackIndex === index
              }"
             class="playlist__item-index color-alternate display-4">{{index + 1}}</span>
                          <!-- v-else -->
          </div>
          <span class="playlist__item-track-name">{{key}}</span>

          <!-- <i-duration-time :audio="audio"/> -->
          </li>
        </ul>  
      </div>
      
    <!-- <div class='playlist__arrow'
      :style="{
        left: this.selected.arrowSelected + 'px'
      }"
    ></div> -->
  </div>

</template>

<script>
// import IDurationTime from '../UI/IDurationTime.vue';
export default {
  name: "i-play-list",
  // components: { IDurationTime },
  data() {
    return {
      hoverItemBtn: false,
      playingItem: true,
      albumTrackIndex: 0,
    };
  },

  props: {
    albums: {
      type: Object
    },
    albumPlaylist: {
      type: Object
    },
    isPlaying: {
      type: Boolean,
    },
    selected: {
      type: Object,
    },
    playing: {
      type: Object
    },
    trackIndex: {
      type: Number
    }
  },
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
};
</script>

<style lang="sass">

.playlist
    background-color: rgba(15,15,15,1)
    display: grid
    gap: 30px
    grid-template-columns: 0.5fr 1fr
    padding: 40px
    width: 100%
    border-top: 1px solid RGBA(50,50,50,1)
    border-bottom: 1px solid RGBA(50,50,50,1)
    position: relative
    &__cover
      width: 400px
      height: 400px
      background-size: cover
      border-radius: 20px
      display: grid
      &-btn
        display: none
        width: 60px
        height: 60px
        place-self: center
        border-radius: 50%
        background-color: rgba(240,240,240, 0.9) !important
        svg
          width: 50px
          height: 50px
        path 
          fill: rgba(16,107,255,1) !important
      &:hover
        .playlist__cover-btn
          display: block
    &__album-name
      text-transform: uppercase
      margin-bottom: 5px
      display: inline-block
      font-weight: bold
      line-height: 1.1
    &__artist-name
      text-transform: uppercase
      margin-bottom: 15px
    &__item
      display: flex
      align-items: center
      border-bottom: 1px solid rgba(91,91,91,1)
      min-height: 40px
      &-inner
        margin-right: 20px
        width: 28px
        height: 28px
        display: flex
        align-items: center
      &:first-child
        border-top: 1px solid rgba(91,91,91,1)

      &-btn
        &-play
          display: none
      
      svg
        width: 25px
        height: 25px
      path
        fill: rgba(16,107,255,1) !important
      &:hover
        .playlist__item-index
          display: none

        .playlist__item-btn-play
          display: flex

        .playlist__item-btn-volume
          display: none


    &__arrow
      position: absolute
      width: 20px
      height: 20px
      background-color: red
      top: -20px
.btn
  &-hide
    display: none !important
</style>
