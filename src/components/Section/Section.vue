<template>
    <section class="main-view">
      <div
        class="album display-3" 
        v-for="album in isDataBase"
        :key="album"
        @click="setIsSelected(album)"
        > 
        <div
          class="album__img-wrap">
          <img 
            class="album__img img-cover"
            :src="album.albumCover"
          />
        </div>
        <span class="album__subname">{{album.artistName}}</span>
        <span class="album__name color-alternate">{{album.albumName}}</span>
      </div>
    </section>  
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
    export default {
        data(){
            
        },
        methods: {
          ...mapMutations([
            'setIsSelected'
          ]),
        },
        computed: {
          ...mapGetters([
            'isDataBase',
          ])
        },
    }
</script>

<style lang="scss" scoped>

</style>