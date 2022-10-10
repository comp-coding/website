<template>
    <div class="flex bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-96 rounded-b-lg h-3/6">
        <div class="text-left mt-7">
            <div class="mockup-code mx-8">
                <pre data-prefix="$"><code>curl clubdev.vercel.app</code></pre>
                <pre data-prefix=">" class="text-warning"><code>Resolving hostname</code></pre>
                <pre data-prefix=">" class="text-warning"><code>Connecting to hostname</code></pre>
                <pre data-prefix=">" class="text-success"><code>Connected!</code></pre>
                <pre data-prefix=">"><code>Rendering webpage...</code></pre>
            </div>
        </div>
        <div class="text-center lg:text-left m-10 justify-center">
            <h1 class="mb-3 text-5xl font-bold">
                Club.dev 
            </h1>
            <p class="mb-3 text-3xl">
                A place for developers to learn, share, and grow. 
            </p>
            <p class="mb-3">
                Club.dev is a society that focuses on development of projects as well as real world skills required that can be
                marketed easily to help prepare for the future. We were founded by a group of KGV students passionate about computer science. 
            </p>
        </div>   
    </div>


</template>
<script>
export default {
    head() {
      return {
        title: 'club.dev | Home'
      }
    }
  }
  </script>