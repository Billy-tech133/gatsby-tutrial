import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1>Hello from gatsby</h1>
      <ExampleButton>Click me</ExampleButton>
    </Layout>
  )
}
