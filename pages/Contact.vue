<template>
  <div class="m-10">
    <h1 class="mb-3 text-5xl font-bold">
          Contact Us
     </h1>
      <p class="mb-3 text-3xl">
            Have any questions? Feel free to reach us!
            </p>
            <br/>
        <div class="flex flex-row gap-10 justify-center md:flex-column">
          <NuxtLink to="mailto:shad1@kgv.hk" target="_blank"><img src="/Gmail.webp" class="h-20"/></NuxtLink>
          <NuxtLink to="https://github.com/kgv-club-dev" target="_blank"><img src="/Github.png" class="h-20"/></NuxtLink>
          <NuxtLink to="https://discord.gg/BhgT6keGrD" target="_blank"><img src="/Discord.png" class="h-20"/></NuxtLink>
          <NuxtLink to="https://hackclub.com/slack/?continent=Asia" target="_blank"><img src="/Slack.png" class="h-20"/></NuxtLink>
        </div>
    
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'club.dev | Contact'
    }
  }
}
</script>