<template>
  <Header />
  <main class="main bg-background">
    <Sidebar />
    <Section /> 
  </main>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Section from '@/components/Section/Section.vue'



export default {
  data() {
    return{

    }
  },
  components: {
    Header,
    Section,
    Sidebar
    // Audio
  },
};
</script>

<style lang="sass" scoped></style>
