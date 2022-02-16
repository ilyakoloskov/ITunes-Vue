<template>
  <section class="main-view">
    <div
      class="album display-3"
      v-for="album in IS_DATA_BASE"
      :key="album.albumName"
      @click="SET_SELECTED(album)"
    >
      <div class="album__img-wrap">
        <img class="album__img img-cover" :src="album.albumCover" />
      </div>
      <span class="album__subname">{{ album.artistName }}</span>
      <span class="album__name color-alternate">{{ album.albumName }}</span>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {},
  methods: {
    ...mapActions(["SET_SELECTED"]),
  },
  computed: {
    ...mapGetters(["IS_DATA_BASE", "IS_SELECTED"]),
  },
};
</script>

<style lang="scss" scoped></style>
