import React from "react"
import Layout from "../components/layout"
import * as styles from "../components/blog.module.css"
console.log(styles)
const blog = () => {
  return (
    <Layout>
      <div className={styles.page}></div>
      <h1>This is out blog page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </Layout>
  )
}

export default blog
