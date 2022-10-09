// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    components: {
        global: true,
        dirs: ['~/components']
    },
    title: 'club.dev',
})

