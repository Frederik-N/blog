import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Blog from '../pages/Blog.vue'
import Post from '../pages/Post.vue'
import { getPosts, getPost } from '../posts'

const routes = [
  { 
    path: '/', 
    component: Home,
    meta: {
      title: 'Home',
      description: 'A personal blog by Frederik Sahlholdt. I write about software development, technology, and other things I find interesting.'
    }
  },
  { 
    path: '/about', 
    component: About,
    meta: {
      title: 'About',
      description: 'About Frederik Sahlholdt.'
    }
  },
  { 
    path: '/blog', 
    component: Blog,
    meta: {
      title: 'Blog',
      description: 'All blog posts from Frederik Sahlholdt.'
    }
  },
  ...getPosts().map(post => ({
    path: post.path,
    component: Post,
    props: { postSlug: post.slug },
    meta: {
      title: post.title,
      description: post.excerpt,
      keywords: post.tags.join(', ')
    }
  })),
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const setMeta = (to: RouteLocationNormalized) => {
  const title = `Frederik Sahlholdt | ${to.meta.title}`;
  const description = to.meta.description as string;
  const keywords = to.meta.keywords as string;
  const url = `https://frederiksahlholdt.com${to.path}`;
  const image = `https://frederiksahlholdt.com/src/assets/logo.png`;

  document.title = title;

  const metaTags: { [key: string]: string } = {
    'description': description,
    'keywords': keywords,
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:image': image,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:url': url,
    'twitter:image': image
  };

  for (const name in metaTags) {
    const el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    if (el && metaTags[name]) {
      el.setAttribute('content', metaTags[name]);
    }
  }

  const jsonLdEl = document.querySelector('script[type="application/ld+json"]');
  if (jsonLdEl) {
    let jsonLd: any = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'url': 'https://frederiksahlholdt.com/',
      'name': 'Frederik Sahlholdt | Blog',
      'author': {
        '@type': 'Person',
        'name': 'Frederik Sahlholdt'
      }
    };

    if (to.path.startsWith('/blog/')) {
      const postSlug = to.path.split('/').pop();
      const post = getPost(postSlug as string);
      if (post) {
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          'headline': post.title,
          'datePublished': post.date,
          'author': {
            '@type': 'Person',
            'name': 'Frederik Sahlholdt'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Frederik Sahlholdt',
            'logo': {
              '@type': 'ImageObject',
              'url': image
            }
          },
          'description': post.excerpt,
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': url
          },
          'image': image
        };
      }
    }
    jsonLdEl.textContent = JSON.stringify(jsonLd, null, 2);
  }
}

router.afterEach((to: RouteLocationNormalized) => {
  setMeta(to);
});

export default router
