<template>
  <div>

    <!-- main page -->
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />

      <!-- Page content here -->
      <div class="drawer-content">
        <Navbar />
          <div class="w-11/12 content-center mx-auto mb-10 transition-colors ease-linear shadow-md">
            <div class="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4 ">
              <span class="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
              <span class="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
              <span class="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
            </div>
            <div class="flex bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-96 rounded-b-lg h-auto">
              <NuxtPage />
            </div>
          </div>
        
      </div>

      <Menu />

    </div>
  </div>
</template>