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
    <div>
        <Content class="prose" />
    </div>
    <div class="eof-container">
        <a href="/">EOF</a>
    </div>
    <div class="postnav-container">
        <div class="postnav postnav-prev" v-if="prevPost">
            <h3>
                PREV
            </h3>
            <a :href="prevPost.href">{{ prevPost.title }}</a>
        </div>
        <div class="postnav postnav-next" :class="[!prevPost ? 'offset-50' : '']" v-if="nextPost">
            <h3>
                NEXT
            </h3>
            <a :href="nextPost.href">{{ nextPost.title }}</a>
        </div>
    </div>
</template>

<style scoped>
:deep h1,
:deep h2 {
    display: flex;
    justify-content: space-between;
}

:deep h1 a,
:deep h2 a {
    display: none;
    font-size: 20px;
    font-weight: bolder;
}

:deep h1:hover a,
:deep h2:hover a {
    display: inline;
    border-bottom: none;
}

:deep span.lang {
    position: absolute;
    right: .5em;
    font-size: .75em;
    color: var(--color-overlay0);
}

:deep button.copy {
    display: none;
}

.eof-container {
    margin: 1em auto;
}

.postnav-container {
    display: flex;
    flex-wrap: wrap;
}

.postnav-next {
    align-self: flex-end;
    text-align: right;
}

.postnav {
    flex: 0 0 auto;
    width: 50%;
    margin: 1em 0 1em 0;
}

.postnav h3 {
    margin: unset;
}

@media (min-width: 768px) {
    .offset-50 {
        margin-left: 50%;
    }

}

@media (max-width: 768px) {
    .postnav {
        flex: 0 0 auto;
        width: 100%;
    }

    .postnav h3 {
        margin-bottom: .2em;
    }

    .postnav-next {
        text-align: unset;
    }
}
</style>