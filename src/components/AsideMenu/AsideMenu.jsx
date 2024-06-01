import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../assets/logo.png'
import styles from './AsideMenu.module.scss'

const AsideMenu = () => {
	const menuItems = [
		{ name: 'Pizza', path: 'menu/pizza' },
		{ name: 'Dania szybkie', path: 'menu/fast-foods' },
		{ name: 'Makarony', path: 'menu/pasta' },
		{ name: 'Zestawy obiadowe', path: 'menu/dinners' },
		{ name: 'Kontakt', path: 'contact' },
	]
	return (
		<div className={styles.aside_menu}>
			<img src={img} alt="Rustico's pizzeria logo" />
			<ul>
				{menuItems.map((item, index) => {
					return (
						<li key={index}>
							<NavLink to={item.path} className={({ isActive }) => (isActive ? 'active' : '')}>
								{item.name}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default AsideMenu
