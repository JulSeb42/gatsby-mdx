/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
    /* Your site config here */
    plugins: [
         {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: { default: path.resolve('./src/layouts/post.js') },
                extensions: [`.mdx`, `.md`],
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`
            }
        },
    ],
}