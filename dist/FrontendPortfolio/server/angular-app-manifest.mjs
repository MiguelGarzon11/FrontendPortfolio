
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/presentation/components/contactme/contactme.ts": [
    "chunk-KAMSBNVE.js"
  ]
},
  assets: {
    'index.csr.html': {size: 10120, hash: '9ffc1f838ec211b80a9dacbbb05a1e78928c10f401e2adaf8f6c11fca7ffc98d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1682, hash: '8f7e32545b5cfa94bfd2098583870ecfd58446d05bc4e3d7f6533ef9091de737', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PBLWUAMK.css': {size: 48534, hash: 'mpMtktAXwHQ', text: () => import('./assets-chunks/styles-PBLWUAMK_css.mjs').then(m => m.default)}
  },
};
