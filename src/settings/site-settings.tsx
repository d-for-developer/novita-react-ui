import { USFlag } from "@components/icons/USFlag";

export const siteSettings = {
	name: "NOVITA India | Official Website",
	description:
		"NOVITA INDIA Website for Digital eCommerce products i.e. Laptops, tabs, smart watch, smart lighting, smart television etc.",
	author: {
		name: "NEXSTGO TECHNOLOGIES INDIA PRIVATE LIMITED",
		websiteUrl: "https://sandeeprawat.me",
		aka: "D for Developer",
	},
	logo: {
		url: "/assets/images/logo.svg",
		alt: "NOVITA India | Official Website",
		href: "/",
		width: 120,
		height: 40,
	},
	defaultLanguage: "en",
	currencyCode: "INR",
	site_header: {
		menu: [
			{
				id: 1,
				path: "/",
				label: "menu-home",
			},
			{
				id: 2,
				path: "/search?q=laptops-tabs",
				label: "menu-laptops-tabs",
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: "/search?q=laptops",
								label: "menu-laptop",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=laptop-ultimus",
										label: "menu-ultimus",
									},
								],
							},
						],
					},
				],
			},
			{
				id: 3,
				path: "/search?q=smart-lighting",
				label: "menu-lighting",
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: "/search?q=smart-led",
								label: "menu-smart",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=smart-bulb",
										label: "menu-smart-bulb",
									},
									{
										id: 2,
										path: "/search?q=batton",
										label: "menu-smart-batton",
									},
									{
										id: 3,
										path: "/search?q=panel-light",
										label: "menu-smart-panel",
									},
								],
							
							},
							{
								id: 2,
								path: "/search?q=invertor-led",
								label: "menu-invertor",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=smart-bulb",
										label: "menu-invertor-bulb",
									},
									{
										id: 2,
										path: "/search?q=batton",
										label: "menu-invertor-batton",
									},
									{
										id: 3,
										path: "/search?q=panel-light",
										label: "menu-invertor-panel",
									},
								],
							},
						
						],
					},
				
				],
			},
			{
				id: 4,
				path: "/search?q=smart-wearables",
				label: "menu-smart-wearables",
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: "/search?q=watch",
								label: "menu-watch",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=wristo1",
										label: "menu-wristo1",
									},
									{
										id: 2,
										path: "/search?q=wristo2",
										label: "menu-wristo2",
									},
								],
							},
							
						],
					},
					
				],
			},
			{
				id: 5,
				path: "/smart-television",
				label: "Smart Television",
			},
			{
				id: 6,
				path: "/contact",
				label: "Contact",
				
			},
		],
		mobileMenu: [
			{
				id: 1,
				path: "/",
				label: "menu-home",
			
			},
			{
				id: 2,
				path: "/search?q=laptops-tabs",
				label: "menu-laptops-tabs",
			},
			{
				id: 3,
				path: "/search?q=smart-lighting",
				label: "menu-lighting",
				
			},
			{
				id: 4,
				path: "/search?q=smart-wearables",
				label: "menu-smart-wearables",
		
			},
			{
				id: 5,
				path: "/smart-television",
				label: "Smart Television",
			},
			{
				id: 6,
				path: "/contact",
				label: "Contact",
				
			},

		],
		languageMenu: [
		
			{
				id: "en",
				name: "English - EN",
				value: "en",
				icon: <USFlag width="20px" height="15px" />,
			},
			
		],
	},
};
