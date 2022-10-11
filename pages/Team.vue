<template>
  <section class="container mx-auto px-8 h-auto pb-20">
  <h1 class="text-center font-extrabold title text-transparent text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-10 mt-10">The Team</h1>
  <div class="flex justify items-center gap-10 flex-col md:flex-row">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/Alex.png"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">Alex Climie</h2>
        <div class="card-actions justify-end">
          <a href="mailto:climia1@kgv.hk" class="btn btn-primary">Contact</a>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/Dhairya.png"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">Dhairya Shah</h2>
        <div class="card-actions justify-end">
          <a href="mailto:shahd1@kgv.hk" class="btn btn-primary">Contact</a>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/Erik.png"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">Erik Xu</h2>
        <div class="card-actions justify-end">
          <a href="mailto:xuj1@kgv.hk" class="btn btn-primary">Contact</a>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/Ethan.png"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">Ethan Cheung</h2>
        <div class="card-actions justify-end">
          <a href="mailto:cheunt3@kgv.hk" class="btn btn-primary">Contact</a>
        </div>
      </div>
    </div>
    </div>
  </section>
  
</template>

<style>
  .card{
    transition: ease-in 0.3s;
    opacity: 0.7;
  }
  .card:hover{
    transform: scale(1.05);
    opacity: 1;
  }
</style>

<script>
export default {
  head() {
    return {
      title: 'club.dev | Team'
    }
  }
}
</script>