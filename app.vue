<template>
  <div>

    <!-- main page -->
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />

      <!-- Page content here -->
      <div class="drawer-content">
        <Navbar />
        <Hero />
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