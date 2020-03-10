/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async gatsbyNodeHelpers => {
  const { graphql, actions } = gatsbyNodeHelpers
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlog.edges.forEach((item) => {
    createPage({
      path: item.node.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: item.node.slug
      }
    })
  })
}
