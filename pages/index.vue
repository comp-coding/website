<template>
    <div class="flex bg-gray-100 dark:bg-gray-700 w-full rounded-b-lg h-3/6 flex-col md:flex-row">
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
            <h1 class="font-extrabold title text-transparent text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
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
<style>
    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
    .title {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #ffff00, #d61010);
	    background-size: 400% 400%;
	    animation: gradient 15s ease infinite;
	    height: 6rem;
        background-clip: text;
        overflow: hidden;
    }
    
</style>

<script>
export default {
    head() {
      return {
        title: 'club.dev | Home'
      }
    }
  }
  </script>