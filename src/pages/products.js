import React, { Component } from "react"
import Layout from "../components/layout"
import * as styles from "../components/products.module.css"

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>this is out products</h1>
          <p className={styles.text}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC
          </p>
        </div>
      </Layout>
    )
  }
}
