import React from 'react'
import {Link} from 'gatsby'

import Layout from './components/layout'

const indexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, unde beatae. Amet ipsa mollitia doloribus adipisci nam autem, veniam ad quod harum libero. Quidem unde accusamus expedita officia voluptatibus vitae.</h2>
            
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default indexPage
