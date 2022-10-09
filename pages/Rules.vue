<template>
  <div class="mockup-window border-2 border-base-300 bg-base-100 flex-col">
    <div class="m-10">
      <h1 class="mb-3 text-5xl font-bold">Rules</h1>
      <p class="mb-3 text-3xl">Our expectations from you:</p>
      <br>

      <div v-for="item in items" v-bind:key="item.id">
      <p class="mb-3 text-2xl">{{item.rule}}</p>
      <p class="mb-3">{{item.expl}}</p>
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
  }
}
</script>