
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/shop"
  },
  {
    "renderMode": 2,
    "route": "/shop-single"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 39183, hash: 'b33d1a121245a5758153c548e2b06d2274f61d9b2ed130b27bab002bc3ddbe4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 39704, hash: '727035ed7a0a18379a3bedfd32c75c242b99e9fd85afaf82c686a224529447e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 52114, hash: '9bf8fc0077ee3086030f1f3ffa8f4b74fa0b479099ee5a2ae53e17c774865843', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'shop-single/index.html': {size: 55633, hash: '7a03822dd9b860625de0507b970bd2a209c068e06627a227943328a90922c00f', text: () => import('./assets-chunks/shop-single_index_html.mjs').then(m => m.default)},
    'index.html': {size: 74704, hash: '63a37cd5d474e590d67bbbc1f2d3f078c9ceaef0e121d02848344ce2be145cd9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 67128, hash: 'd5a9599b4f81e710adf98ed8a1bbbebcf0dac1778e74cd5db6a4b92daaa0f675', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 74704, hash: '63a37cd5d474e590d67bbbc1f2d3f078c9ceaef0e121d02848344ce2be145cd9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 48478, hash: 'ec59401349f09a8264ac62d607b0e875dfa3cf051d2cf370358b115744f724e1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
