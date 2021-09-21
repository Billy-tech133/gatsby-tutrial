/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "Gatsby tutorial",
    description: "some random description",
    author: "@johnDoe",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: 24 },
  },

  plugins: [`gatsby-plugin-styled-components`],
}
