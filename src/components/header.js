import React from "react"
import {useStaticQuery, graphql ,Link} from "gatsby"


const Header = () => {
    const data = useStaticQuery(
        graphql`
      query HeaderPageQuery {
    allContentfulMainMenu {
    nodes {
      menuItem
    }
  }
  }
    `
    )
    const menuItem = data.allContentfulMainMenu.nodes

    return (
        <header className='row'>
            <div className='col-4'></div>
            <div className='col-8'>
                {
                    menuItem.map((item) =>
                        <Link
                            to=""
                            activeStyle={{color: "green"}}
                            partiallyActive={true} // `/blog#hello-world` matches now
                        >
                            {item.menuItem}
                        </Link>
                    ).reverse()
                }
            </div>
        </header>
    )
}

export default Header