import * as React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const categories = ({props}) => {
    console.log("serverData", props)
    return (
        <Layout>
            <h1>
                This page is <b>rendered server-side</b>
            </h1>
        </Layout>
    )
}

export default categories
