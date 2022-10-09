<template>
  <section class="container mx-auto py-36 px-8">
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