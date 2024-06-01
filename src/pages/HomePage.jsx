import React from 'react'
import { Link } from 'react-router-dom'
import img_sm from '../assets/heder-img-sm.jpg'

const HomePage = () => {
	return (
		<div className='home-page'>
			<div className='home-page__bg'>
				<div className='home-page__bg-context'>
					<h1>Pizzeria Rustico</h1>
					<p>Najlepsza pizza w twojej okolicy</p>
					<button className='home-page__btn'>
						<Link to='/menu/pizza'>Pizza</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default HomePage
