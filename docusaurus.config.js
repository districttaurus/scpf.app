// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'District Taurus',
  tagline: 'Special Containment Procedures Foundation',
  url: 'https://scpf.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'districttaurus', // Usually your GitHub org/user name.
  projectName: 'scpf.app', // Usually your repo name.

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/districttaurus/scpf.app/tree/main/',
            routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/districttaurus/scpf.app/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'district taurus, scp, scpf, special containment procedures, special containment procedures foundation, secure contain protect, roblox group, roblox game, taurus, stratus, roblox scpf, roblox scp'}],
      navbar: {
        title: 'District Taurus',
        logo: {
          alt: 'District Taurus Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'terms/terms',
            position: 'left',
            label: 'Game Terms',
          },
          {
            type: 'doc',
            docId: 'legislation/legislation',
            position: 'left',
            label: 'Legislation',
          },
          {
            to: '/blog', 
            label: 'News', 
            position: 'left'
          },
          {
            type: 'doc', 
            docId: 'credits', 
            label: 'Credits/Legal',
            position: 'left'
          },
          {
            href: 'https://wiki.scpf.app',
            label: 'Wiki',
            position: 'left',
          },
          {
            href: 'https://stratus.scpf.app',
            label: 'Stratus',
            position: 'left',
          },
          {
            href: 'https://discord.gg/vZjvfvZfKK',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://www.roblox.com/groups/15094000/SCPF-Special-Containment-Procedures-Foundation#!/about',
            label: 'Group',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Game Terms',
                to: '/terms',
              },
              {
                label: 'Legislation',
                to: '/legislation',
              },
              {
                label: 'News',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/vZjvfvZfKK',
              },
              {
                label: 'Roblox',
                href: 'https://www.roblox.com/groups/15094000/SCPF-Special-Containment-Procedures-Foundation#!/about',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Support',
                href: 'https://support.scpf.app',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/districttaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ulferno Limited (registered company in England and Wales, No. 14179021)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
