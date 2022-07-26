import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route path='/create' element={<Create />} />
						<Route path='/blogs/:id' element={<BlogDetails />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
