<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>

<template>
    <Header />
    <main>
        <Home v-if="isIndex"/>
        <Article v-else/>
    </main>
    <Footer />
</template>