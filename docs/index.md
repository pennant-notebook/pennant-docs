---
layout: page
title: 'Pennant: Open-Source & Cloud-Based Real-Time Collaborative Computational Notebook'
hero:
  name: 'Pennant'
  text: 'Empowering Collaboration in Computational Notebooks'
  tagline: 'Pennant integrates note-taking, code execution, and real-time collaboration into a unified platform. It supports JavaScript, Python, and Markdown, tailored for developers, learners, and educators.'
# Uncomment and update the following lines once you have the images ready
# head:
#   - [
#       "meta",
#       {
#         property: "og:image",
#         content: "/path-to-your-image.png",
#       },
#     ]

#   image:
#     src: /pennant-logo.png
#     alt: "Pennant Logo"
# actions:
#   - theme: brand
#     text: "Get Started"
#     link: "/docs/introduction"
#   - theme: alt
#     text: "View on GitHub"
#     link: "https://github.com/pennant-notebook"
---

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  window.location.href = '/docs/introduction';
});
</script>

<Home
  :externalLinks=[]
/>
