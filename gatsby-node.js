exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: 'babel-plugin-import',
        options: {
            libraryName: 'antd',
            style: true
        }
    })
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /react-coverflow/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
};