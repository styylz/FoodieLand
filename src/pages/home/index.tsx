import React from 'react';
import { Box, Navbar } from 'components';
import Banner from './sections/Banner';
import Categories from './sections/Categories';


const Home: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Banner />
			<Categories/>
		</Box>
	)
};

export default Home;
