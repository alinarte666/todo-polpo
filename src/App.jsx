import { Home } from './pages/home/Home'
import { Application } from './pages/application/Application'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className='w-screen h-screen bg-gray-300 overflow-scroll flex items-center'>
			<Routes>
				<Route index element={<Home />} />
				<Route path='application' element={<Application />} />
			</Routes>
		</div>
	)
}

export default App
