<template>
  <section class="main-view">
    <i-album 
      :album="album"
      v-for="album in albums" :key="album.id"
      @selectedAlbum="$emit('selectedAlbum', album)"
    />
  </section>
</template>

<script>
import IAlbum from './IAlbum'

export default {
  name: 'i-section',
  data() {},
  props: {
    albums: {
      type: Array,
      required: true
    }
  },
  methods: {
  },
  computed: {
  },
  components: {
    IAlbum
  },
  emits: ["selectedAlbum"],
};
</script>

<style lang="scss" scoped></style>
