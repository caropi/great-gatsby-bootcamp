import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

import Layout from "./components/layout"
import blogStyles from './blog.module.scss'
import Head from "./components/head"


const BlogPage = () => {
    const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)
    return (
        <Layout>
          <Head title='Blog'/>
            <h1>Blog</h1>
                    <ol className={blogStyles.posts} >
            {data.allContentfulBlogPost.edges.map((d, i) => {
                return (
                        <li className={blogStyles.post} key={i}>
                          <Link to={`/blog/${d.node.slug}`}>
                            <h2>{d.node.title}</h2>
                            <p>{d.node.publishedDate}</p>
                          </Link>
                        </li>

                )
            })}
                    </ol>
        </Layout>
    )
}

export default BlogPage
