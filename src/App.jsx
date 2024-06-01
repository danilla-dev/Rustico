import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainGridLayout from './components/MainGridLayout/MainGridLayout'
import ContentContainer from './components/ContentContainer/ContentContainer'
import NavBar from './components/NavBar/NavBar'
import AsideMenu from './components/AsideMenu/AsideMenu'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
	return (
		<BrowserRouter>
			<MainGridLayout>
				<NavBar />
				<AsideMenu />
				<ContentContainer />
				<Footer />
			</MainGridLayout>
		</BrowserRouter>
	)
}

export default App
