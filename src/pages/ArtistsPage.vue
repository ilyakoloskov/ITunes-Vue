<template>
  <div class="artist-page">
    <sidebar class="artist-page__sidebar">
      <ul class="artist-page__list">
        <li class="artist-page__item color-text" v-for="artist in albums" :key="artist.id">
          <img :src="artist.albumCover" class="artist-page__item-icon"/>
          <div class="artist-page__item-name">{{artist.artistName}}</div>
        </li>
      </ul>
    </sidebar>
    <div class="artist-page__main">
        Under development 
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  props: {
      albums: {
          type: Object
      }
  },
};
</script>

<style lang="sass">
.artist-page
    display: grid
    grid-template-columns: 300px 1fr
    position: absolute
    height: 100%
    width: 100%
    &__main
        padding: 10px 40px

    &__sidebar, &__main
        overflow-y: scroll
        height: 100%
        &::-webkit-scrollbar
            width: 5px
        &::-webkit-scrollbar-track
            background-color: rgba(38,38,38,1)
        &::-webkit-scrollbar-thumb
            background-color: rgba(151,151,151, 1)
            border-radius: 5px

    &__item
        display: flex
        align-items: center
        gap: 15px
        padding: 0 10px
        &-icon
            width: 40px
            height: 40px
            border-radius: 50%
        &-name
            border-bottom: 1px solid RGBA(50,50,50,1)
            padding: 15px 10px
            width: 100%
// .artist-page__sidebar::-webkit-scrollbar
//     width: 5px
</style>
