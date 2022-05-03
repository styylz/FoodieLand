import students from 'assets/images/students.png';
import gatsbyImg from 'assets/images/icon.png';
import foodieland from 'assets/images/foodieland.svg'
import facebook from 'assets/images/facebook.svg'
import twitter from 'assets/images/twitter.svg'
import instagram from 'assets/images/instagram.svg'
import paper from 'assets/images/paper.svg'
import chickenWings from 'assets/images/chickenWings.png'
import personAvatar from 'assets/images/person.png'
import playButton from 'assets/images/playButton.svg'
import lettuce from 'assets/images/lettuce.png'
import sushi from 'assets/images/sushi.png'
import meat from 'assets/images/meat.png'
import dessert from 'assets/images/dessert.png'
import sandwich from 'assets/images/sandwich.png'
import chocolate from 'assets/images/chocolate.png'
import wagyuBurger from 'assets/images/wagyuBurger.png'
import timer from 'assets/images/timer.svg'
import forkKnife from 'assets/images/forkKnife.svg'
import heart from 'assets/images/heart.svg'
import chickenrice from 'assets/images/chickenrice.png'
import meatballs from 'assets/images/meatballs.png'
import oatmealPancakes from 'assets/images/oatmealPancakes.png'
import pancakes from 'assets/images/pancakes.png'
import pasta from 'assets/images/pasta.png'
import salad from 'assets/images/salad.png'
import salmon from 'assets/images/salmon.png'
import ads from 'assets/images/ads.png'
import chef from 'assets/images/chef.png'
import flyingSalad from 'assets/images/flyingSalad.svg'
import plate from 'assets/images/plate.svg'
import rucola from 'assets/images/rucola.svg'


export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	flyingSalad,
	plate,
	rucola,
	chef,
	ads,
	chickenrice,
	meatballs,
	oatmealPancakes,
	pancakes,
	pasta,
	salad,
	salmon,
	heart,
	forkKnife,
	timer,
	sushi,
	meat,
	dessert,
	sandwich,
	chocolate,
	playButton,
	personAvatar,
	chickenWings,
	instagram,
	twitter,
	facebook,
	students,
	gatsbyImg,
	foodieland,
	paper,
	lettuce,
	wagyuBurger
};
