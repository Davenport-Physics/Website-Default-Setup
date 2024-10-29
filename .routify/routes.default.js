

export default {
  "meta": {},
  "id": "_default",
  "name": "",
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "asyncModule": () => import('../src/routes/_module.svelte'),
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_LatestYoutube_svelte",
      "name": "LatestYoutube",
      "file": {
        "path": "src/routes/LatestYoutube.svelte",
        "dir": "src/routes",
        "base": "LatestYoutube.svelte",
        "ext": ".svelte",
        "name": "LatestYoutube"
      },
      "asyncModule": () => import('../src/routes/LatestYoutube.svelte'),
      "children": []
    },
    {
      "meta": {
        "noRoute": true
      },
      "id": "_default__ContactModal_svelte",
      "name": "_ContactModal",
      "file": {
        "path": "src/routes/_ContactModal.svelte",
        "dir": "src/routes",
        "base": "_ContactModal.svelte",
        "ext": ".svelte",
        "name": "_ContactModal"
      },
      "asyncModule": () => import('../src/routes/_ContactModal.svelte'),
      "children": []
    },
    {
      "meta": {
        "noRoute": true
      },
      "id": "_default__FirstSegment_svelte",
      "name": "_FirstSegment",
      "file": {
        "path": "src/routes/_FirstSegment.svelte",
        "dir": "src/routes",
        "base": "_FirstSegment.svelte",
        "ext": ".svelte",
        "name": "_FirstSegment"
      },
      "asyncModule": () => import('../src/routes/_FirstSegment.svelte'),
      "children": []
    },
    {
      "meta": {
        "noRoute": true
      },
      "id": "_default__OpenSource_svelte",
      "name": "_OpenSource",
      "file": {
        "path": "src/routes/_OpenSource.svelte",
        "dir": "src/routes",
        "base": "_OpenSource.svelte",
        "ext": ".svelte",
        "name": "_OpenSource"
      },
      "asyncModule": () => import('../src/routes/_OpenSource.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_about",
      "name": "about",
      "module": false,
      "file": {
        "path": "src/routes/about",
        "dir": "src/routes",
        "base": "about",
        "ext": "",
        "name": "about"
      },
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_about_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/about/index.svelte",
            "dir": "src/routes/about",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/about/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_contact",
      "name": "contact",
      "module": false,
      "file": {
        "path": "src/routes/contact",
        "dir": "src/routes",
        "base": "contact",
        "ext": "",
        "name": "contact"
      },
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_contact_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/contact/index.svelte",
            "dir": "src/routes/contact",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/contact/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "isDefault": true
      },
      "id": "_default_index_svelte",
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true,
        "order": false,
        "inline": false
      },
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}