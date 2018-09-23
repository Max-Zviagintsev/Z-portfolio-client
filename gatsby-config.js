module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        'gatsby-plugin-antd',
        {
            resolve: `gatsby-plugin-less`,
            options: {
                javascriptEnabled: true,
                modifyVars: {
                    'layout-header-background': 'transparent',
                    'layout-header-height': '18px',
                    'layout-header-padding': '0'
                }
            }
        }
    ]
};