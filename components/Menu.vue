<template>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

      <!-- Sidebar content here -->
      <li>
        <NuxtLink to="/">Introduction</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/Projects">Projects</NuxtLink>
      </li> -->
      <li>
        <NuxtLink to="/Rules">Rules</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/FAQ">Frequently Asked Questions</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Team">Team</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Contact">Contact Us</NuxtLink>
      </li>

    </ul>
  </div>
</template>