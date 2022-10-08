<template>
  <div class="mockup-window border-2 border-base-300 bg-base-100 flex-col">
      <div class="m-10">
          <div class="text-center lg:text-left m-10">
              <h1 class="mb-3 text-5xl font-bold">
                  Frequently Asked Questions </h1>
                  <div v-for="item in items" v-bind:key="item.id">
                    <p class="mb-3 text-2xl">{{item.question}}</p>
                  <p class="mb-3">
                    {{item.answer}}
                    </p>
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
          id:1,
          question: "What is Club.dev?",
          answer: "Club.dev is a society founded by a group of students with a strong passion for Computer science."
        },
        {
          id:2,
          question: "What is the purpose of Club.dev?",
          answer: "This society focuses on development of projects as well as real world skills required that can be marketed easily to help prepare for the future."
        },
        {
          id:3,
          question: "What level of programming should I have to join?",
          answer: "Intermediate experience in written program languages, or any Computer Science students from IGCSE or IB."
        },
        {
          id:4,
          question: "When and where will the Club be hosted",
          answer: "",
        },
        {
          id:5,
          question: "What skills will be taught?",
          answer: "",
        },
      ]

  }
}
}
</script>
