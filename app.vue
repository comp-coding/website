
<template>
  <div>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->

    <!-- navbar -->
    <Navbar />

    <!-- Hero + introduction -->
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <div class="mockup-code">
          <pre data-prefix="$"><code>curl clubdev.vercel.app</code></pre> 
          <pre data-prefix=">" class="text-warning"><code>Resolving hostname</code></pre>
          <pre data-prefix=">" class="text-warning"><code>Connecting to hostname</code></pre>
          <pre data-prefix=">" class="text-success"><code>Connected!</code></pre>
          <pre data-prefix=">"><code>Rendering webpage...</code></pre>
        </div>
        <div>
          <h1 class="text-5xl font-bold">Welcome to club.dev!</h1>
          <p class="py-6">This club is supported by KGV CAS and Hack Club, a nonprofit organisation that provides us with many teaching resources. This club is expected to start shortly after Challenge Week 2022, and signups will be available on Lionel soon. The website is still under development.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>    
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Introduction</a></li>
      <li><a>Current Projects</a></li>
      <li><a>Rules</a></li>
      <li><a>Frequently Asked Questions</a></li>
      <li><a>Team</a></li>
      <li><a>Contact Us</a></li>
      
    </ul>
  </div>
</div>


  </div>
</template>
<script>
import Navbar from "~/components/Navbar";
export default {
  
  components: {
    Navbar,
}
}
</script>