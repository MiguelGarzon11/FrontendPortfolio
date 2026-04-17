
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
    "preload": [
      "chunk-5SQVCOGZ.js"
    ],
    "route": "/contactme"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11576, hash: 'd4adeaed9bfecc1be4e69f148b1d99a214acc9f89f910cc1f11d8599decb92f7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1682, hash: '65b6b495977fae55ddf36060a2f2f51e8a5bde4a36b09914a3d3843e4d3cde33', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 59956, hash: '050bc2aa45f1793f252b1ec2870359c1c6199a5d2b541120f6f5f6c2533b3436', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 70237, hash: '6b3d85fb6ba856488da7b5e6540e22a302f07b434a5d3e8089af644375158c6e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 36568, hash: '0bf660363460fd19b7318fbfa7e9b66aff4833700ee2dd5fa560f98cb4e5fde8', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contactme/index.html': {size: 41166, hash: '4cf72488738512a83e788ebba9c5db8733685a997434f4e7300444d58d4f48d6', text: () => import('./assets-chunks/contactme_index_html.mjs').then(m => m.default)},
    'styles-HOAVD3SH.css': {size: 52866, hash: '1ka1Z1tAGBE', text: () => import('./assets-chunks/styles-HOAVD3SH_css.mjs').then(m => m.default)}
  },
};
