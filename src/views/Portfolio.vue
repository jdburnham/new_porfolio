<template>
  <div>
    <Navbar :isHome="false"></Navbar>
    <div
      class="pt-24 min-h-screen w-screen top flex flex-col flex-wrap justify-center items-center px-8 bg-gray-400 shadow-lg"
    >
      <div class="w-full flex flex-wrap mb-8">
        <div class="w-1/4 p-2" v-for="(project, index) in projects" :key="index">
          <Card :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/NavBar'
import Card from '../components/Card'
import projects from '../data/projects'
export default {
  name: 'Portfolio',
  data() {
    return {
      projects
    }
  },
  components: {
    Navbar,
    Card
  }
}
</script>

<style lang="scss" scoped>
</style>