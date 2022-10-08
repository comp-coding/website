<template>
  <div>

    <!-- main page -->
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />

      <!-- Page content here -->
      <div class="drawer-content">
        <Navbar />
        <NuxtPage />
      </div>

      <Menu />

    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'club.dev'
    }
  }
}
</script>