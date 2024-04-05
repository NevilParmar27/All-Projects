import React from 'react'
import styles from './Navigation.module.css'

function Navigation() {
  return (
    <nav className = {`${styles.navigation} `}>
            <div className="logo">
                <img src="Frame 2 1.png" alt="logo" />
            </div>

            <div className="menus">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
    </nav>
  )
}

export default Navigation