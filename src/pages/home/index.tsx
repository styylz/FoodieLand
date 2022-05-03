import React from 'react';
import { Box, Navbar } from 'components';
import Banner from './sections/Banner';


const Home: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Banner />
		</Box>
	)
};

export default Home;
