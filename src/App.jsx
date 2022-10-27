import { Outlet } from "react-router-dom"
import { CartProvider } from "./providers/cart.provider"

function App() {

	return (
		<>
			<div className="container">
				<div className="row py-3">
					<div className="col">
						<h1 className="text-center">My Store</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<CartProvider>
							<Outlet />
						</CartProvider>
					</div>
				</div>
			</div>

		</>
	)
}

export default App
