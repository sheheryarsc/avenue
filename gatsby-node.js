const path = require(`path`)
const {func} = require("prop-types")
const axios = require("axios")

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions
}


exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    await createCategoryPages(createPage, graphql)

}

async function createCategoryPages(createPage, graphql) {

    const allContentfulMainCategoriesData = await graphql(`
   query {
    allContentfulMainCategories {
    nodes {
      slug
      categoryBannerImage {
        id
        url
      }
      categoryImage {
        id
      }
      subCategory {
        subCategoryName
        slug
      }
    }
  }
}`,
    )
    console.log("allContentfulProviderDetailPage.data", allContentfulMainCategoriesData.data.allContentfulMainCategories.nodes)


    allContentfulMainCategoriesData.data.allContentfulMainCategories.nodes.forEach(node => {
        console.log("each node" , node)
        createPage({
            path: `categories/${node.slug}`,
            component: path.resolve(`./src/templates/categories.js`),
            context: {
                slug: node.slug,
                name : node
            },
        })

    })


}
