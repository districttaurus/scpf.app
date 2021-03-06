/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  legislation: [
    {
      type: 'doc',
      label: 'Game Terms',
      id: 'terms/terms'
    },
    {
      type: 'category',
      label: 'Legislation',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'legislation'
        }
      ]
    },
    {
      type: 'doc',
      label: 'Credits/Legal',
      id: 'credits'
    }
  ]
};

module.exports = sidebars;
