

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
      "meta": {},
      "id": "_default_projects",
      "name": "projects",
      "module": false,
      "file": {
        "path": "src/routes/projects",
        "dir": "src/routes",
        "base": "projects",
        "ext": "",
        "name": "projects"
      },
      "children": [
        {
          "meta": {
            "noRoute": true
          },
          "id": "_default_projects__CenterButton_svelte",
          "name": "_CenterButton",
          "file": {
            "path": "src/routes/projects/_CenterButton.svelte",
            "dir": "src/routes/projects",
            "base": "_CenterButton.svelte",
            "ext": ".svelte",
            "name": "_CenterButton"
          },
          "asyncModule": () => import('../src/routes/projects/_CenterButton.svelte'),
          "children": []
        },
        {
          "meta": {
            "noRoute": true
          },
          "id": "_default_projects__Chator_svelte",
          "name": "_Chator",
          "file": {
            "path": "src/routes/projects/_Chator.svelte",
            "dir": "src/routes/projects",
            "base": "_Chator.svelte",
            "ext": ".svelte",
            "name": "_Chator"
          },
          "asyncModule": () => import('../src/routes/projects/_Chator.svelte'),
          "children": []
        },
        {
          "meta": {
            "noRoute": true
          },
          "id": "_default_projects__ProjectStocks_svelte",
          "name": "_ProjectStocks",
          "file": {
            "path": "src/routes/projects/_ProjectStocks.svelte",
            "dir": "src/routes/projects",
            "base": "_ProjectStocks.svelte",
            "ext": ".svelte",
            "name": "_ProjectStocks"
          },
          "asyncModule": () => import('../src/routes/projects/_ProjectStocks.svelte'),
          "children": []
        },
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_projects_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/projects/index.svelte",
            "dir": "src/routes/projects",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/projects/index.svelte'),
          "children": []
        }
      ]
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