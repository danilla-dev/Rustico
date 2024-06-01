import React from 'react'
import styles from './ContentContainer.module.scss'
import HomePage from '../../pages/HomePage'

const ContentContainer = () => {
	return (
		<div className={styles.context_container}>
			<HomePage />
		</div>
	)
}

export default ContentContainer
