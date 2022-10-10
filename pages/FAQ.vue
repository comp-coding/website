<template>
  <div class="w-11/12 content-center mx-auto mb-10 transition-colors ease-linear shadow-md w-11/12">
    <div class="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4 ">
        <span class="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
        <span class="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
        <span class="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
    </div>
  <div class="flex bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-96 rounded-b-lg h-3/6">

            <div class="text-center lg:text-left m-10 justify-center">
              <h1 class="mb-3 text-5xl font-bold">Frequently Asked Questions </h1>

                    <div class="text-center lg:text-left m-10">
        <div v-for="item in items" v-bind:key="item.id">
          <p class="mb-3 text-2xl font-semibold">{{item.question}}</p>
          <p class="mb-3 font-thin pb-6">
            {{item.answer}}
          </p>
        </div>
        <h1 class='text-2xl'>Have any more questions? <NuxtLink to='/Contact' class='text-sky-600'>Contact us.</NuxtLink></h1>

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
          question: "What is Club.dev?",
          answer: "Club.dev is a society founded by a group of students with a strong passion for computer science."
        },
        {
          id: 2,
          question: "What is the purpose of Club.dev?",
          answer: "This society focuses on development of projects as well as real world skills required that can be marketed easily to help prepare for the future."
        },
        {
          id: 3,
          question: "What level of programming should I have to join?",
          answer: "Intermediate experience in written program languages, or any Computer Science students from IGCSE or IB."
        },
        {
          id: 4,
          question: "When and where will the Club be hosted",
          answer: "It will be hosted every tuesday lunchtime @ ICT3. External sessions may considered later on.",
        },
        {
          id: 5,
          question: "What skills will be taught?",
          answer: "Although it is not neccessary to participate in the sessions, we will cover usage of tools and skills used in real world development like version control with git. ",
        },
      ]
    }
  },
  head() {
    return {
      title: 'club.dev | FAQ'
    }
  }
}
</script>
