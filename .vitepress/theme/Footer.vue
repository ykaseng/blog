<template>
    <footer class="footer-container">
        <nav>
            <ul>
                <li><a href="https://ykaseng.com">who</a></li>
                <li><a href="https://verbose.ykaseng.com">log</a></li>
                <li><a href="https://github.com/ykaseng">git</a></li>
                <li><a href="https://verbose.ykaseng.com/feed.rss">rss</a></li>
                <li><a href="https://github.com/ykaseng/blog/blob/main/LICENSE">cc by-sa 4.0</a></li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
ul {
    padding: unset;
}

li {
    display: inline;
}

nav li:not(:last-child)::after {
    content: " :: ";
}

.footer-container {
    border-top: 1px solid var(--color-text);
}
</style>