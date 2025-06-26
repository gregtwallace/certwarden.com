import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cert Warden',
  tagline: 'Centralized ACME Certificate Management',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.certwarden.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gregtwallace', // Usually your GitHub org/user name.
  projectName: 'certwarden.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // ensure proper compat between sitemap & cloudflare pages; otherwise sitemap slashing
  // is wrong and things like google search indexing don't work properly
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/certwarden_social_card.jpg',
    navbar: {
      title: 'Cert Warden',
      logo: {
        alt: 'Cert Warden Logo',
        src: 'img/certwarden_icon_rounded.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://forum.certwarden.com/',
          target: '_self',
          label: 'Forum',
          position: 'left',
        },
        {
          to: 'docs/contribute',
          label: 'Contribute',
          position: 'left',
          activeBaseRegex: '$^', // never show active
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/category/getting-started',
            },
            {
              label: 'Docs',
              to: 'docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.certwarden.com/',
              target: '_self',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/gregtwallace/certwarden/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contribute',
              to: 'docs/contribute',
            },
            {
              label: 'Source Code',
              href: 'https://github.com/gregtwallace/certwarden',
            },
            {
              label: 'Greg T. Wallace',
              href: 'https://www.gregtwallace.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Greg T. Wallace`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
