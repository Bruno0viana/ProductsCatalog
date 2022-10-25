import { Outlet } from "react-router-dom"
import { CartProvider } from "./providers/cart.provider"

function App() {

	return (
		<>
			<h1>Logo</h1>

			<CartProvider>
				<Outlet />
			</CartProvider>
		</>
	)
}

export default App
