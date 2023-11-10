/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Header, Home, Contact, About, Footer } from "./Components/Index"
import { Outlet } from "react-router-dom"
function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default App
