<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { data as posts } from './posts.data.js'

const { frontmatter: data } = useData()

const route = useRoute()

function findCurrentIndex() {
    return posts.findIndex((p) => p.href === route.path)
}

// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<template>
    <h1>Article</h1>
    <Content />
    <div v-if="nextPost">
        <h3>
            Next Article
        </h3>
        <div>
            <a :href="nextPost.href">{{ nextPost.title }}</a>
        </div>
    </div>
    <div v-if="prevPost">
        <h3>
            Previous Article
        </h3>
        <div>
            <a :href="prevPost.href">{{ prevPost.title }}</a>
        </div>
    </div>
    <div>
        <a href="/">← Back to the blog</a>
    </div>
</template>