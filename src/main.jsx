import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import { Home, Contact, About } from "./Components/Index"
import "./index.css"
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />,
// 			},
// 			{
// 				path: "contact",
// 				element: <Contact />,
// 			},
// 			{
// 				path: "about",
// 				element: <About />,
// 			},
// 		],
// 	},
// ])
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
		</Route>,
	),
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
