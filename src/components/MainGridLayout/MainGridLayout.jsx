import React from 'react'
import styles from './MainGridLayout.module.scss'

const MainGridLayout = ({ children }) => {
	return <div className={styles.grid_container}>{children}</div>
}

export default MainGridLayout
