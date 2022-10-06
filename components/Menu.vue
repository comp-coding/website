<template>
    <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

          <!-- Sidebar content here -->
          <li><NuxtLink to="/">Introduction</NuxtLink></li>
          <li><NuxtLink to="/curProj">Current Projects</NuxtLink></li>
          <li><NuxtLink>Rules</NuxtLink></li>
          <li><NuxtLink>Frequently Asked Questions</NuxtLink></li>
          <li><NuxtLink>Team</NuxtLink></li>
          <li><NuxtLink>Contact Us</NuxtLink></li>
        </ul>
      </div>
</template>