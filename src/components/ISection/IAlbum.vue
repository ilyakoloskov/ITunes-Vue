<template>
  <div class="album display-3" @click="$emit('selectedAlbum', album)">
    <div class="album__img-wrap">
      <img class="album__img img-cover" :src="album.albumCover" />
    </div>
    <span class="album__subname">{{ album.artistName }}</span>
    <span class="album__name color-alternate">{{ album.albumName }}</span>
  </div>
</template>

<script>
export default {
  name: "i-album",
  methods: {

  },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
