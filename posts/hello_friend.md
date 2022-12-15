---
title: hello, friend
date: 1970-01-01
author: Ka Seng Yang
---

# hello, friend

It occured to me—in a dazed, caffeinated frenzy, midway through the initial scaffoldings for a "new" idea and realizing that I have previously attempted and subsequently abandoned the project under conditions which were not dissimilar—that it might not be such an awful idea to keep a log of some sort. Here's one iteration of an attempt to currate projects I've worked on, my thoughts concerning contemporary culture and whatever else I find interesting into something with a semblance of coherence.

This blog is older than you know. I prefer counting from the emergence of one repository to the emergence of the next. In which case, this is the fourth version. Since there are only as many posts at the time of writing as there have been iterations (and the run-on sencences), it should not surprise you that writing doesn't come naturally to me. So, don't expect too much out of this site.

I am perfectly aware that this blog might end up being read by a grand total of three curious or exceptionally bored people. To that end, let me start off by sharing this relevant code snippet from a heartbeat implementation.

``` go
sendPulse := func() {
    select {
        case heartbeat <-struct{}{}:
        default:
    }
}
```

Note that we include a `default` clause. We must always guard against the fact that no one may be listening to our heartbeat. The results emitted from the goroutine are critical, but the pulses are not.

This blog is also available as an RSS [feed](https://verbose.ykaseng.com/feed.rss) so that you can enjoy the excitement of nothing ever happening from the comfort of your favourite RSS aggregator! Will he blog? Will he skip another two years before writing another post? Find out next week!