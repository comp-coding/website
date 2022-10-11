<template>
  <div class="m-10">
    <h1 class="font-extrabold text-transparent text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Contact Us
     </h1>
      <p class="mb-3 text-3xl">
            Have any questions? Feel free to reach us!
            </p>
            <br/>
        <div class="grid grid-flow-row items-center justify-center gap-10 md:grid-flow-col">
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