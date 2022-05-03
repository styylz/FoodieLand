import React from 'react';
import { Box, Navbar } from 'components';
import Banner from './sections/Banner';
import Categories from './sections/Categories';
import Recipes from './sections/Recipes';
import Info from './sections/Info';


const Home: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Banner />
			<Categories/>
			<Recipes />
			<Info />
		</Box>
	)
};

export default Home;
