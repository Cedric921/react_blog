import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
