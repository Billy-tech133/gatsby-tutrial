import React from "react"
import Layout from "./components/layout"
function error() {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "uppercase" }}>
        this is our error page
      </h1>
    </Layout>
  )
}

export default error
