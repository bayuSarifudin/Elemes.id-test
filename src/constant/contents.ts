import {
	cupcake,
	cupcakeIcon,
	donerKebab,
	doughnutIcon,
	doughnutMilk,
	kathiKebab,
	kebabIcon,
	meatPizza,
	pepperoni,
	pizzaIcon,
	salmonIcon,
	salmonRoll,
	unicornDoughnut
} from '@/assets'

interface category {
	icon?: string
	title?: string
	total?: number
	bg?: string
}

export const categories: category[] = [
	{
		icon: cupcakeIcon,
		title: 'Cupcake',
		total: 22,
		bg: 'bg-[#F0FEEB]'
	},
	{
		icon: pizzaIcon,
		title: 'Pizza',
		total: 25,
		bg: 'bg-[#E6F3F5]'
	},
	{
		icon: kebabIcon,
		title: 'Kebab',
		total: 12,
		bg: 'bg-[#EAEEFA]'
	},
	{
		icon: salmonIcon,
		title: 'Salmon',
		total: 22,
		bg: 'bg-[#F9EEF3]'
	},
	{
		icon: doughnutIcon,
		title: 'Doughnut',
		total: 11,
		bg: 'bg-[#F3F7D9]'
	},
	{
		icon: cupcakeIcon,
		title: 'Cupcake',
		total: 22,
		bg: 'bg-[#F0FEEB]'
	},
	{
		icon: pizzaIcon,
		title: 'Pizza',
		total: 25,
		bg: 'bg-[#E6F3F5]'
	}
]

interface Menu {
	img?: string
	title?: string
	category?: string
	rating?: number
	bg?: string
}

export const trending: Menu[] = [
	{
		img: pepperoni,
		title: 'Pizza Pepperoni',
		category: 'Pizza',
		rating: 4,
		bg: 'bg-[#E6F3F5]'
	},
	{
		img: meatPizza,
		title: 'Pizza Meat',
		category: 'Pizza',
		rating: 3,
		bg: 'bg-[#E6F3F5]'
	},
	{
		img: donerKebab,
		title: 'Doner Kebab',
		category: 'Kebab',
		rating: 5,
		bg: 'bg-[#EAEEFA]'
	},
	{
		img: salmonRoll,
		title: 'Salmon Roll',
		category: 'Salmon',
		rating: 4,
		bg: 'bg-[#F9EEF3]'
	},
	{
		img: cupcake,
		title: 'Cupcake Choco',
		category: 'Cupcake',
		rating: 4,
		bg: 'bg-[#F0FEEB]'
	},
	{
		img: doughnutMilk,
		title: 'Doughnut Milk',
		category: 'Doughnut',
		rating: 5,
		bg: 'bg-[#F3F7D9]'
	},
	{
		img: unicornDoughnut,
		title: 'Doughnut Unicorn',
		category: 'Doughnut',
		rating: 4,
		bg: 'bg-[#F3F7D9]'
	},
	{
		img: kathiKebab,
		title: 'Kathi Kebab',
		category: 'Kebab',
		rating: 4,
		bg: 'bg-[#EAEEFA]'
	}
]

interface Navigate {
	title?: string
	link?: string
	hot?: boolean
}

export const navigations: Navigate[] = [
	{
		title: 'Home',
		link: '#',
		hot: false
	},
	{
		title: 'About',
		link: '#',
		hot: false
	},
	{
		title: 'Promotions',
		link: '#',
		hot: true
	},
	{
		title: 'Blogs',
		link: '#',
		hot: false
	},
	{
		title: 'Contact Us',
		link: '#',
		hot: false
	}
]

export const footerCategoriesList = [
	{
		title: 'Cupcake',
		link: '#'
	},
	{
		title: 'Pizza',
		link: '#'
	},
	{
		title: 'Kebab',
		link: '#'
	},
	{
		title: 'Salmon',
		link: '#'
	},
	{
		title: 'Doughnut',
		link: '#'
	}
]

export const aboutUsList = [
	{
		title: 'About Us',
		link: '#'
	},
	{
		title: 'FAQ',
		link: '#'
	},
	{
		title: 'Report Problem',
		link: '#'
	}
]
