<template>
  <header class="header">
    <!-- HEADER-SETTINGS -->
    <div class="header__settings header-inner player">
      <div class="header__player">
        <i-button type="prev" @click="$emit('prevTrack', $event)"/>
        <i-button
          :type="isPlaying ? 'pause' : 'play'"
          @click.space="$emit('playTrack', $event)"
        />
        <i-button type="next" @click="$emit('nextTrack', $event)" />
      </div>
      <i-input
        @input="$emit('updateVolume', $event.target.value)"
        :value="isVolume"
        class="input-volumes range"
        id="track-volume"
        min="0"
        max="1"
        step="0.01"
        type="range"
        :style="{
          '--range-value-track-volume': isVolume * 100 + '%',
        }"
      />
    </div>
    <!-- HEADER-TRACK -->
    <i-header-track
      :playing='playing'
      :selected='selected'
      :isPlaying='isPlaying'
      :isVolume="isVolume"
      :audio="audio"
      :isLoopTrack="isLoopTrack"
      :isLoopAlbum="isLoopAlbum"
      :isMixTracks="isMixTracks"

      @mixTracks="$emit('mixTracks')"
      @loop="loop"
      @updateVolume="$emit('updateVolume', $event)"
      @updateProgress="$emit('updateProgress', $event)"
    />
    <!-- HEADER-HELPER -->
    <div class="header__helper header-inner">
      <button class="header__helper-list">
        <svg
          width="25"
          height="25"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.16016 9.50586C6.85449 9.50586 7.4082 8.95215 7.4082 8.25781C7.4082 7.57227 6.85449 7.00977 6.16016 7.00977C5.47461 7.00977 4.91211 7.57227 4.91211 8.25781C4.91211 8.95215 5.47461 9.50586 6.16016 9.50586ZM10.291 9.10156H22.2266C22.7012 9.10156 23.0791 8.73242 23.0791 8.25781C23.0791 7.7832 22.71 7.41406 22.2266 7.41406H10.291C9.8252 7.41406 9.44727 7.7832 9.44727 8.25781C9.44727 8.73242 9.81641 9.10156 10.291 9.10156ZM6.16016 14.9111C6.85449 14.9111 7.4082 14.3574 7.4082 13.6631C7.4082 12.9775 6.85449 12.415 6.16016 12.415C5.47461 12.415 4.91211 12.9775 4.91211 13.6631C4.91211 14.3574 5.47461 14.9111 6.16016 14.9111ZM10.291 14.5068H22.2266C22.7012 14.5068 23.0791 14.1377 23.0791 13.6631C23.0791 13.1885 22.71 12.8193 22.2266 12.8193H10.291C9.8252 12.8193 9.44727 13.1885 9.44727 13.6631C9.44727 14.1377 9.81641 14.5068 10.291 14.5068ZM6.16016 20.3164C6.85449 20.3164 7.4082 19.7627 7.4082 19.0684C7.4082 18.3828 6.85449 17.8203 6.16016 17.8203C5.47461 17.8203 4.91211 18.3828 4.91211 19.0684C4.91211 19.7627 5.47461 20.3164 6.16016 20.3164ZM10.291 19.9121H22.2266C22.7012 19.9121 23.0791 19.543 23.0791 19.0684C23.0791 18.5938 22.71 18.2246 22.2266 18.2246H10.291C9.8252 18.2246 9.44727 18.5938 9.44727 19.0684C9.44727 19.543 9.81641 19.9121 10.291 19.9121Z"
            fill="#1C1C1E"
          />
        </svg>
      </button>
      <i-input
        id="search"
        class="header__helper-search search"
        type="text"
        placeholder="Search"
        :value="searchQuery" @input="updateSearchQuery"
      />
      <i-search
        v-if="searchQuery"
        :albums="search"
        :selected='selected'
        :trackIndex="trackIndex"
        :isPlaying='isPlaying'

        @selectedAlbum="selectedAlbum"
        @playTrack="playTrack"
      >
      </i-search>
    </div>

  </header>
  
</template>

<script>
import IHeaderTrack from '@/components/IHeader/IHeaderTrack.vue'
import ISearch from '@/components/UI/ISearch.vue';

export default {
  name: "i-header",
  data() {
    return {
      audioProgress: '',
      isShowSearch: false,
    };
  },
  props: {
    selected: {
      type: Object,
    },
    playing: {
      type: Object,
    },
    search: {
      type: Array
    },
    isPlaying: {
      type: Boolean,
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
    isMixTracks:{
      type: Boolean
    },
    audio:{
      type: Object
    },
    albums: {
      type: Object
    },
    searchQuery: {
      type: [String, Number],
    },
    trackIndex: {
      type: Number
    },
  },
  components: {
     IHeaderTrack
    , ISearch
  },
  methods: {
    loop(count){
      this.$emit('loop', count)
    },
    showSearch(){
      this.isShowSearch = true
      console.log('12')
    },
    updateSearchQuery(event){
      this.$emit('updateSearchQuery', event.target.value)
    },
    selectedAlbum(album, trackIndex, key){
      this.$emit('selectedAlbum', album, trackIndex, key)
    },
    playTrack(trackIndex){
      this.$emit('playTrack', trackIndex)
    },
  },
  computed: {

  },
  watch: {

  },
  emits: [
    "nextTrack",
    "prevTrack",
    "playTrack",
    "updateVolume",
    "updateProgress",
    "loop",
    "mixTracks",
    "updateSearchQuery"
  ],
};
</script>

<style lang="sass">
#track-volume
    &::before
        width: var(--range-value-track-volume)
        border-radius: 4px

</style>
