<script setup lang="ts">
import { data as posts } from './posts.data.js'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <h1>{{ frontmatter.title }}</h1>
    <p>{{ frontmatter.subtext }}</p>
    <ul>
        <li v-for="{ title, href, date } of posts">
            <h2><a :href="href">{{ title }}</a></h2>
        </li>
    </ul>
</template>