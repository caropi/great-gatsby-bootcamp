import React from 'react'
import {Link} from 'gatsby'

import Layout from "./components/layout"
import Head from "./components/head"


const AboutPage = () => {
    return (
        <Layout>
            <Head title='About'/>
            <h1>About</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt mollitia in praesentium a quos atque, est amet voluptates neque sit provident veritatis fuga voluptatibus magnam aut. Harum, unde inventore.</p>
            <Link to="/contact">Contact meee</Link>
        </Layout>
    )
}

export default AboutPage
