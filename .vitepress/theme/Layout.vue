<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import Header from './Header.vue'
import NotFound from './NotFound.vue'
import Footer from './Footer.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
const isNotFound = computed(() => route.component === NotFound)
</script>

<template>
    <Header />
    <main>
        <Home v-if="isIndex"/>
        <NotFound v-else-if="isNotFound"/>
        <Article v-else/>
    </main>
    <Footer />
</template>