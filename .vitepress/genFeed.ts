import path from 'path'
import { readFileSync, writeFileSync } from 'fs'
import { Feed } from 'feed'
import { fileURLToPath } from 'url'
import postsData from './theme/posts.data.js'

const url = `https://verbose.ykaseng.com`
const dirname = path.dirname(fileURLToPath(import.meta.url))

const feed = new Feed({
  title: 'The Vue Point',
  description: 'The official blog for the Vue.js project',
  id: url,
  link: url,
  language: 'en',
  copyright: 'Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)'
})

postsData.load(true).then((posts) => {
  posts.forEach((post) => {
    const file = path.resolve(dirname, `dist${post.href}`)
    const rendered = readFileSync(file, 'utf-8')
    const content = rendered.match(
      /<div [^<>]+?class="prose[^<>]+?>([\s\S]*)<\/div><\/div><div class="eof-container"/
    )

    if (!content) {
      throw new Error(`no content match found for file ${post.href}`)
    }

    feed.addItem({
      title: post.title,
      id: `${url}${post.href}`,
      link: `${url}${post.href}`,
      description: post.excerpt,
      content: content[1],
      author: [
        {
          name: post.data.author
        }
      ],
      date: post.data.date
    })
  })

  writeFileSync(path.resolve(dirname, 'dist/feed.rss'), feed.rss2())
})
