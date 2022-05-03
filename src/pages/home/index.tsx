import React from 'react';
import { Box, Navbar } from 'components';
import Banner from './sections/Banner';
import Categories from './sections/Categories';
import Recipes from './sections/Recipes';


const Home: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Banner />
			<Categories/>
			<Recipes/>
		</Box>
	)
};

export default Home;
