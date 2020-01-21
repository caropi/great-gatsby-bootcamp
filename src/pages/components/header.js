import React from 'react'
import {Link} from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    Caroline Pisano
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link className={headerStyles.headerLink} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.headerLink} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.headerLink} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.headerLink} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
