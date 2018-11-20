module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
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
                baseUrl: `http://zportfolio.lndo.site/`,
                apiBase: `jsonapi`, // optional, defaults to `jsonapi`
            }
        }
    ]
};