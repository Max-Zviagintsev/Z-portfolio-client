module.exports = {
    siteMetadata: {
        siteUrl: `https://z-portfolio.tk/`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-favicon`,
        'gatsby-plugin-antd',
        {
            resolve: `gatsby-plugin-less`,
            options: {
                javascriptEnabled: true,
                modifyVars: {
                    'layout-body-background': '#FFFFFF',
                    'layout-header-background': 'transparent',
                    'layout-header-height': '18px',
                    'layout-header-padding': '0'
                }
            }
        },
        {
            resolve: `gatsby-source-drupal`,
            options: {
                baseUrl: 'http://dev-z-portfolio.pantheonsite.io',
                apiBase: `jsonapi`, // optional, defaults to `jsonapi`
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-130108544-1",
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Enables Google Optimize using your container Id
                optimizeId: "GTM-5R8MQ5S",
                // Any additional create only fields (optional)
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "https://z-portfolio.tk/",
            },
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/favicon.png",

                // WebApp Manifest Configuration
                appName: null, // Inferred with your package.json
                appDescription: null,
                developerName: null,
                developerURL: null,
                dir: 'auto',
                lang: 'en-US',
                background: '#fff',
                theme_color: '#fff',
                display: 'standalone',
                orientation: 'any',
                start_url: '/?homescreen=1',
                version: '1.0',

                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: false,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        }
    ]
};