<script setup lang="ts">
import { data as posts } from './posts.data.js'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <p>{{ frontmatter.subtext }}</p>
    <ul>
        <li v-for="{ title, href, date } of posts">
            <a :href="href">{{ date.unix }} {{ title }}</a>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
</style>