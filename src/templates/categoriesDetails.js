import * as React from "react"
import {useStaticQuery, graphql ,Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function (props) {


    const data = useStaticQuery(
        graphql`
   query SubCategory {
  allContentfulSubCategory {
    nodes {
      slug
      subCategoryName
      subCategoryPicture {
        id
        file {
          url
        }
      }
    }
  }
}
    `
    )

    const categoriesData = props.pageContext.name;
    const sabCategoriesData = data.allContentfulSubCategory.nodes;


    return (
        <Layout>
            <section className='mainCategories container-fluid'>
                <section className='row'>
                    <img
                        className="d-block w-100"
                        src={categoriesData.categoryBannerImage.url}
                        alt="First slide"
                    />
                    <h2>{categoriesData.categoryName}</h2>
                </section>
                <section className='row'>
                    {

                        sabCategoriesData.map((item) =>
                            <Link to={`categories/${item.slug}`} className='singleCategory col-3'>

                                    <img
                                        className="d-block w-100"
                                        src={item.subCategoryPicture.file.url}
                                        alt="First slide"
                                    />
                                    <h3>{item.subCategoryName}</h3>

                            </Link>
                        )
                    }
                </section>
            </section>
        </Layout>
    )
}
