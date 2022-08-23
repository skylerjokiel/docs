module.exports = function (opts) {
  if (!opts) opts = {}
  if (!opts.extras) opts.extras = []

  return {
    docs: [
      "installation",
      {
        type: "category",
        label: "Tutorials",
        items: [
          { type: "autogenerated", dirName: "tutorial" },
        ]
      },
      {
        type: "category",
        label: "Getting Started",
        collapsed: false,
        items: [{
          type: 'autogenerated',
          dirName: 'common/concepts'
        }]
      },
      {
        type: "category",
        label: "Data Model",
        items: [{
          type: 'autogenerated',
          dirName: 'common/datamodel'
        }]
      },
      {
        type: "category",
        label: "Mesh Network",
        items: [
          {
          type: 'autogenerated',
          dirName: 'common/mesh-network'
        }]
      },
      {
        type: "category",
        label: "Quick Tips",
        items: [{
          type: 'autogenerated',
          dirName: 'common/quick-tips'
        }, {
          type: 'autogenerated',
          dirName: 'quick-tips'
        }]
      },
      {
        type: "category",
        label: "Security",
        items: [{
          type: 'autogenerated',
          dirName: 'common/security'
        }]
      },
      {
        type: "category",
        label: "Integration Guides",
        items: [{
          type: 'autogenerated',
          dirName: 'common/guides'
        }]
      },
      {
        type: "category",
        label: "How it Works",
        items: [{
          type: 'autogenerated',
          dirName: 'common/how-it-works'
        }]
      },
      opts.api,
      "common/v2",
      "common/troubleshooting"
    ]
  }
}
