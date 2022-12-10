import * as React from "react"
import {Link} from "gatsby"
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import {graphql} from 'gatsby'

import {StaticImage} from "gatsby-plugin-image"
import Carousel from 'react-bootstrap/Carousel';

const IndexPage = ({data}) => {


    const bannerimages = data?.allContentfulBannerImages.nodes;
    const mainCategories = data?.allContentfulMainCategories.nodes;

    console.log("bannerImgs", bannerimages)
    console.log("mainCategories", mainCategories)
    return (
        <Layout>


            <Carousel>
                {

                    bannerimages.map((item) =>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.bannerImage.file.url}
                                alt="First slide"
                            />
                            <div className='shan'></div>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }

            </Carousel>

            <section className='mainCategories container-fluid'>
                <section className='row'>
                    <h2>Main Categories</h2>
                    {

                        mainCategories.map((item) =>
                            <Link to={`categories/${item.slug}`} className='singleCategory col-3'>
                                <section className=''>
                                    <img
                                        className="d-block w-100"
                                        src={item.categoryImage.file.url}
                                        alt="First slide"
                                    />
                                    <h3>{item.categoryName}</h3>
                                </section>
                            </Link>
                        )
                    }
                </section>
            </section>

        </Layout>
    )
}

export default IndexPage
export const query = graphql`
  query HomePageQuery {
  allContentfulBannerImages {
    nodes {
      bannerImage {
        id
        file {
          url
        }
      }
    }
  }
   allContentfulMainCategories {
    nodes {
      categoryName
      slug
      categoryImage {
        file {
          url
        }
      }
    }
  }
  }
`
