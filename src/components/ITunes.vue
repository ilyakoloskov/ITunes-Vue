<template>
  <Header />
  <main class="main bg-background">
    <Sidebar />
    <Section /> 
  </main>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import Header from '@/components/Header/Header.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Section from '@/components/Section/Section.vue'



export default {
  data() {
    return{
      getIsPlaying: this.isPlaying,
    }
  },
  components: {
    Header,
    Section,
    Sidebar
    // Audio
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'isSelected',
      'isAudio',
      'isDataBase',
    ]),
  },
  methods: {
    ...mapMutations([
      'setIsPlaying',
      'setIsSelected'
    ]),
  },

};
</script>

<style lang="sass" scoped></style>
