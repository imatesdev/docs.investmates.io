// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'InvestMates',
  tagline: 'A Platform for Next-Gen Investors',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.investmates.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imatesdev', // Usually your GitHub org/user name.
  projectName: 'docs.investmates.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'InvestMates Docs',
        logo: {
          alt: 'InvestMates Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://investmates.io/#investmatesapp',
            label: 'Download App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Home',
                href: 'https://investmates.io/',
              },
              {
                label: 'Creators',
                href: 'https://investmates.io/creators'
              },
              {
                label: 'About',
                href: 'https://investmates.io/aboutus'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/watch?v=uhERl1D6b2s'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/investmates',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/investmates.io/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/investmates_io',
              },
            ],
          },
          {
            title: 'App',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro',
              },
              {
                label: 'Play Store',
                href: 'https://play.google.com/store/apps/details?id=com.investmates.io&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
              },
              {
                label: 'App Store',
                href: 'https://apps.apple.com/in/app/investmates/id1618762983'
              }
            ],
          },
        ],
        copyright: `Copyright © 2023 InvestMates. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
