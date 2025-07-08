import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Blog from '../pages/Blog.vue'
import Post from '../pages/Post.vue'
import { getPosts, getPost } from '../posts'
import { SITE_CONFIG } from '../constants'

const routes = [
  { 
    path: '/', 
    component: Home,
    meta: {
      title: 'Home',
      description: SITE_CONFIG.DESCRIPTION
    }
  },
  { 
    path: '/about', 
    component: About,
    meta: {
      title: 'About',
      description: `About ${SITE_CONFIG.AUTHOR}.`
    }
  },
  { 
    path: '/blog', 
    component: Blog,
    meta: {
      title: 'Blog',
      description: `All blog posts from ${SITE_CONFIG.AUTHOR}.`
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

const updateMetaTags = (title: string, description: string, keywords: string, url: string, image: string) => {
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
    let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    if (el) {
      el.setAttribute('content', metaTags[name] ?? '');
    } else {
      el = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        el.setAttribute('property', name);
      } else {
        el.setAttribute('name', name);
      }
      el.setAttribute('content', metaTags[name] ?? '');
      document.head.appendChild(el);
    }
  }
};

const updateJsonLd = (to: RouteLocationNormalized, url: string, image: string) => {
  const jsonLdEl = document.querySelector('script[type="application/ld+json"]');
  if (jsonLdEl) {
    let jsonLd: any = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'url': SITE_CONFIG.BASE_URL,
      'name': SITE_CONFIG.TITLE,
      'author': {
        '@type': 'Person',
        'name': SITE_CONFIG.AUTHOR
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
            'name': SITE_CONFIG.AUTHOR
          },
          'publisher': {
            '@type': 'Organization',
            'name': SITE_CONFIG.AUTHOR,
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
};

const setMeta = (to: RouteLocationNormalized) => {
  const title = `${SITE_CONFIG.TITLE} | ${to.meta.title}`;
  const description = to.meta.description as string;
  const keywords = (to.meta.keywords as string) ?? SITE_CONFIG.KEYWORDS;
  const url = `${SITE_CONFIG.BASE_URL}${to.path}`;
  const image = `${SITE_CONFIG.BASE_URL}/src/assets/logo.png`;

  updateMetaTags(title, description, keywords, url, image);
  updateJsonLd(to, url, image);
}

router.afterEach((to: RouteLocationNormalized) => {
  setMeta(to);
});

export default router
