/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";

import Header from "./header"
import "./layout.css"

const Layout = ({children}) => {

    return (
        <>
            <div className='main-container , container-fluid'>
                <Header />
                <div>
                    <main>{children}</main>
                    <footer
                        style={{
                            marginTop: `var(--space-5)`,
                            fontSize: `var(--font-sm)`,
                        }}
                    >
                        © {new Date().getFullYear()} &middot; Built with
                        {` `}
                        <a href="https://www.gatsbyjs.com">Gatsby</a>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Layout
