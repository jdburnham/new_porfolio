<template>
  <div class="flex justify-center items-center">
    <div class="h-20 bottom-o py-8 flex">
      <p class="pr-2">&copy; Josh Burnham</p>
      <a class="github" href="https://github.com/jdburnham" target="_blank">
        <GithubCircle />
      </a>
      <a class="reddit" href="https://reddit.com" target="_blank">
        <Reddit />
      </a>
      <a class="facebook" href="https://facebook.com" target="_blank">
        <Facebook />
      </a>
    </div>
  </div>
</template>

<script>
import GithubCircle from 'vue-material-design-icons/GithubCircle'
import Reddit from 'vue-material-design-icons/Reddit'
import Facebook from 'vue-material-design-icons/Facebook'
export default {
  name: 'Footer',
  components: {
    GithubCircle,
    Reddit,
    Facebook
  }
}
</script>

<style lang="scss" scoped>
.github:hover {
  @apply text-orange-500;
}
.reddit:hover {
  @apply text-red-700;
}
.facebook:hover {
  @apply text-blue-700;
}
</style>
