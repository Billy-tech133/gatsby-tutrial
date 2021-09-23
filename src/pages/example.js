import React from "react"
import Header from "../examples/Header"
import ComponentName from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"
const example = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <h2>Hi from example page</h2>
      <Header />
      <ComponentName />

      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default example
