<template>
  <div class="w-11/12 content-center mx-auto mb-10 transition-colors ease-linear shadow-md">
    <div class="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4 ">
        <span class="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
        <span class="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
        <span class="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
    </div>
  <div class="flex bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-96 rounded-b-lg h-auto">

            <div class="text-center lg:text-left m-10 justify-center">
              <h1 class="mb-3 text-5xl font-bold">Rules</h1>

                    <div class="text-center lg:text-left m-10">
        <div v-for="item in items" v-bind:key="item.id">
          <p class="mb-3 text-2xl font-semibold">{{item.rule}}</p>
          <p class="mb-3 font-thin pb-6">
            {{item.expl}}
          </p>
        </div>

      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          rule: "Respect",
          expl: "We expect you to respect everyone in the society. This includes respecting the opinions of others, respecting the time of others, and respecting the rules of the society.",
        },
        {
          id: 2,
          rule: "Participation",
          expl: "We expect you to participate in the society. This includes participating in society events, participating in society projects, and participating in society discussions.",
        },
        {
          id: 3,
          rule: "Contribution",
          expl: "We expect you to contribute to the society. This includes contributing to society events, contributing to society projects, and contributing to society discussions.",
        },
        {
          id: 4,
          rule: "Responsibility",
          expl: "We expect you to be responsible for your actions. This includes being responsible for your actions in the society, being responsible for your actions in society events, being responsible for your actions in society projects, and being responsible for your actions in society discussions.",
        },
        {
          id: 5,
          rule: "Privacy",
          expl: "We expect you to respect the privacy of others. This includes respecting the privacy of others in society events, respecting the privacy of others in society projects, and respecting the privacy of others in society discussions.",
        },
      ]
    }
  },
  head() {
    return {
      title: 'club.dev | Rules'
    }
  }
}
</script>