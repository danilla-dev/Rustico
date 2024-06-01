import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { GiHamburgerMenu } from 'react-icons/gi'
import img from '../../assets/logo.png'
import styles from './NavBar.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	return (
		<div className={styles.nav_bar}>
			<div className={styles.nav_bar_logo}>
				<img src={img} alt="Rustico's pizzeria logo" />
			</div>
			<Button variant='outline-light' className='d-lg-none' size='lg' onClick={handleShow}>
				<GiHamburgerMenu />
			</Button>
			<Offcanvas show={show} onHide={handleClose} backdrop='static'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>MENU</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Link to='/menu/pizza'>Pizza</Link>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	)
}

export default NavBar
