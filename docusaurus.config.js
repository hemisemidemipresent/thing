/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Cyber Quincy Documentation',
    tagline: 'BTD6 Discord bot',
    url: 'https://site.netlify.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon:
        'https://cdn.discordapp.com/icons/598768024761139240/c1d6f5a0857b719986ddf8d90e80c686.webp?size=256',
    organizationName: 'cyberquincy', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Cyber Quincy Documentation',
            logo: {
                alt: 'Documentation',
                src:
                    'https://cdn.discordapp.com/icons/598768024761139240/c1d6f5a0857b719986ddf8d90e80c686.webp?size=256',
            },
            items: [
                {
                    to: 'https://tinyurl.com/cyberquincy',
                    position: 'left',
                    label: 'Invite',
                },
                {
                    to: '/docs/introduction/getting-started',
                    position: 'left',
                    label: 'Guide',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/hemisemidemipresent/thing',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/VMX5hZA',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Cyber Quincy Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
