import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'verbose',
  titleTemplate: false,
  description: 'an attempt to log projects i\'ve worked on, my thoughts on contemporary issues and culture.',
  head: [
    ['meta', { author: 'Ka Seng Yang' }],
    ['meta', { name: 'keywords', content: 'ykaseng, ka seng, ka seng yang, kaseng, ykaseng.com, verbose.ykaseng.com, git, portfolio, program, programming, project, code, coding, codes, dev, develop, developer, code, api, unixporn, unix porn, unixp0rn, unixpr0n, images, photos, etc, random' }],
  ],
  markdown: {
    anchor: {
      level: 2
    },
    toc: { level: [2] },
  }
})
