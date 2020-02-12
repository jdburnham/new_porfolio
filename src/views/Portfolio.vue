<template>
  <div>
    <Navbar :isHome="false"></Navbar>
    <div class="pt-24">Hello There from Portfolio</div>
  </div>
</template>

<script>
import Navbar from '../components/NavBar'
export default {
  name: 'Portfolio',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
</style>