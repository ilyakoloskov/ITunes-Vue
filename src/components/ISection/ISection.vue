<template>
  <router-view
    :albums="albums"
  ></router-view>

</template>

<script>

export default {
  name: "i-sidebar",
  props: {
    albums: {
      type: Object
    }
  }
};
</script>

<style lang="sass">





</style>
