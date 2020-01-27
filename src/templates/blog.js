import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../pages/components/layout'

export const query = graphql(`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
    }
  }
`)

const Blog = () => {
    return (
        <Layout>
            This is a blog template
        </Layout>
    )
}

export default Blog