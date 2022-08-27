import React, { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { Hero, Section, Testimonial } from "components/Fawwaz/Sections";
import SEOMarketingSVG from "../../components/assets/svg/SEOMarketingSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "../../components/assets/logo/logo1.png";
import { Card, CardContent, CardFooter, CardHeader, IconItem } from "components/Fawwaz/Card";

import { FaCheckCircle, FaChevronRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Button from "components/Fawwaz/Button";
import { BsChevronRight } from "react-icons/bs";

const pricingCards = [
	{
		rate: "2,050",
		title: "1-2 Social Network",
		type: "basic",
		star: [<AiFillStar className="card-icon fill-black-50" />],
		content: [
			{
				icon: <FaCheckCircle />,
				title: "Up to 5-10 ad campaigns"
			},
			{
				icon: <FaCheckCircle />,
				title: "Up to 20-40 unique ads"
			},
			{
				icon: <FaCheckCircle />,
				title: "Advanced AI tracking"
			},
			{
				icon: <FaCheckCircle />,
				title: "$10,000-$20,000 / mo. monthly ad spend"
			}
		]
	},
	{
		rate: "10,000",
		title: "1-2 Social Network",
		type: "premium",
		star: [
			<AiFillStar className="card-icon fill-black-50" />,
			<AiFillStar className="card-icon fill-black-50" />,
		],
		content: [
			{
				icon: <FaCheckCircle />,
				title: "Up to 5-20 ad campaigns"
			},
			{
				icon: <FaCheckCircle />,
				title: "Up to 20-40 unique ads"
			},
			{
				icon: <FaCheckCircle />,
				title: "Dedicated account manager"
			},
			{
				icon: <FaCheckCircle />,
				title: "$100,000-$500,000 / mo. monthly ad spend"
			}
		]
	},
	{
		rate: "65,000",
		title: "1-2 Social Network",
		type: "ultimate",
		star: [
			<AiFillStar className="card-icon fill-black-50" />,
			<AiFillStar className="card-icon fill-black-50" />,
			<AiFillStar className="card-icon fill-black-50" />,
		],
		content: [
			{
				icon: <FaCheckCircle />,
				title: "Up to 30-50 ad campaigns"
			},
			{
				icon: <FaCheckCircle />,
				title: "Up to 120-200 unique ads"
			},
			{
				icon: <FaCheckCircle />,
				title: "Custom reporting dashboard"
			},
			{
				icon: <FaCheckCircle />,
				title: "$1M-$1.5M / mo. monthly ad spend"
			}
		],

	},
];

const list = [
	{ icon: true, text: "15 hours quarterly" },
	{ icon: true, text: "$1,800 monthly investment" },
	{ icon: true, text: "Best for websites under 250 pages" },
];
const list2 = [
	{ icon: true, text: "25 hours quarterly" },
	{ icon: true, text: "$3,600 monthly investment" },
	{ icon: true, text: "Best for websites under 250 pages" },
];
const list3 = [
	{ icon: true, text: "35 hours quarterly" },
	{ icon: true, text: "$4,800 monthly investment" },
	{ icon: true, text: "Best for websites under 250 pages" },
];

const Page: NextPage = () => {
	return (
		<div>
			{/* First Section */}
			<div className=" bg-black-70 px-3 lg:px-0">
				<Hero
					title="Enterprise Social Media Advertising Services:
                    Drive Your Brand’s Growth"
					description="Muscled’s Social Media Advertising can boost your brand beyond its limits.  Reach out on Facebook, Twitter, Instagram, and other top social media Platforms with Muscled to garner followers, boost sales, and get an amazing return on your investment. Request a free consultation today to see how we can help you and your brand go to the next level."
					heroSVG={<SEOMarketingSVG className="w-80 lg:w-full" />}
					input
				/>
			</div>
			{/* Our partner section */}
			<Section className="text-center pt-16">
				<h3 className="text-black-50 text-2xl">Our Partners</h3>

				<div className="pt-5 flex flex-wrap justify-between pb-12 gap-6">
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
				</div>
			</Section>

			{/* pricing card section */}
			<Section>
				<div className="flex py-2 space-x-5">
					{pricingCards.map((pricing, index) => (
						<Card
							key={index}
							className="max-w-[400px] w-full border-black-70 border rounded-md">
							<CardHeader
								rate={pricing.rate}
								title={pricing.title}
								type={pricing.type}
								monthly={
									<p className="font-bold text-bold-red">
										month
									</p>
								}>
								<div className="flex">
									{pricing.star.map(
										(Component): JSX.Element => Component
									)}
								</div>
							</CardHeader>
							<CardContent className="space-y-9">
								{
									pricing.content.map((content) => (
										<IconItem icon={content.icon} title={content.title} className="mt-4" />
									))
								}
							</CardContent>
							<div className="px-4 py-10 mt-4 flex items-center justify-center flex-col">
								<p className="border-t border-[#000] w-full mt-1 mb-10 text-center" />
								<p className="mb-10">$3,125 INITIAL INVESTMENT</p>
								<Button
									bgColor="bg-[#000]"
									textColor="text-white"
									className="py-4 px-10 text-[-0.8em]">
									Send Proposal
								</Button>
							</div>
						</Card>
					))}
				</div>
			</Section>

			<Section className="pt-16">
				<div className="flex py-2 space-y-9 justify-center">
					<p className="flex text-4xl font-medium text-sky-500">See Full Deliverables<BsChevronRight className="ml-10" /></p>
				</div>
			</Section>

			<Section className="pt-16">
				<div className="flex py-2 space-y-16 justify-center flex-col">
					<h1 className="text-4xl text-justify">Turn followers into customers with Muscled’s social media advertising</h1>
					<div className="text-justify text-xl">
						<p className="mb-14">
							Every digital marketing strategy has to have social media, that means yours too.
						</p>
						<p className="mb-6">
							With platforms like Facebook, LinkedIn, Twitter, Instagram, and even TikTok, your business can go to wherever it needs to, whether to boost your recruitment efforts, sales ventures, or customer loyalty incentives.
						</p>
						<p className="mb-6">
							While <a href="" className="text-sky-400">social media marketing</a> does help reach these goals, advertising kickstarts your efforts by adding more OOMPH to your company’s presence in social media platforms. With social media ads that hit the spot in targeting, messaging, and bidding, your enterprise business can get phenomenal results from social media.
						</p>
						<p className="mb-6">
							At Muscled, our social media management team specializes in corporate-level social media advertising.
						</p>
						<p className="mb-14">
							When you partner with our own social media experts, you get a complete social media advertising package. From curating your strategy to creating your ads to managing your campaigns, we cover everything in this aspect. Plus, we provide you with reports that are convenient and accurate.
						</p>
						<p>
							If you want to learn how our Meta Business Partner agency can help bring more power to your brand — and why 91% of brands make us their long-term partner — <a href="" className="text-sky-400">contact us online</a> or call us at ######## to speak with an experienced strategist!
						</p>
					</div>
				</div>
			</Section>

			<div className="pt-32">
				<Testimonial/>
			</div>

			<Section className="pt-32">
				<div className=" py-2 space-y-16 justify-center">
					<h1 className="flex text-4xl text-justify">Reach out to networks that matter to your business, connect with your targets.</h1>
					<div className="text-justify text-xl">
						<p className="mb-5">Platforms like Youtube, Facebook, Instagram and Twitter gives your business the opportunity to reach hundreds of millions of users, as well as powerful targeting options that help your business reach out to its target audience and have amazing returns on its ad spend.</p>
						<p className="mb-5">With Muscled, your company gets has the chance to take advantage of all these platforms because we cover:</p>
						<ul className="list-disc ml-5 mb-5">
							<li>Facebook</li>
							<li>Instagram</li>
							<li>Twitter</li>
							<li>Pinterest</li>
							<li>Snapchat</li>
							<li>YouTube</li>
							<li>LinkedIn</li>
						</ul>
						<p>While our enterprise social media advertising service plans include a recommended number of networks, you have the choice to advertise on however many you prefer, like four platforms instead of two.</p>
					</div>
				</div>
			</Section>

			<Section className="pt-36">
				<div className="space-y-16 justify-center">
					<h1 className="text-4xl text-center">MUSCLED Enterprise Social Media Advertising Pricing</h1>
				</div>
			</Section>

			<Section>
				{/* table section */}
			</Section>

			<Section className="pt-20">
				<div className="justify-center">
					<h1 className="mb-14 text-4xl text-center">Social media advertising services for every business</h1>
					<p className="mb-7 text-xl text-center">MUSCLED offers custom social ad plans for ecommerce stores, enterprises, and direct to consumer (D2C) brands.</p>
					<p className="text-xl text-center">Check out the plans below, or give us a call at 888-256-9448 to learn more! </p>
				</div>
			</Section>

			<Section className="flex pt-20" >
				{/* A */}
				<div className="box-border h-[380px] w-[410px] ml-[25px] mr-10 bg-red-700 flex items-center flex-col">
					<div className="px-6">
						<p className="mt-8 text-3xl">Ecommerce Social Media Advertising</p>
						<p className="my-5 text-xl">Drive traffic to your ecommerce store and start selling more online with social media ads.</p>
					</div>
					<div>
						<Button
							bgColor="bg-[#000]"
							textColor="text-white"
							className="mt-7 text-[-0.8em]">
							LEARN MORE					
						</Button>
					</div>
				</div>
				
				{/* B */}
				<div className="box-border h-[380px] w-[410px] mx-10 mb-10 bg-red-700 flex items-center flex-col">
				<div className="px-6">
						<p className="mt-8 text-3xl">Enterprise Social Media Advertising</p>
						<p className="my-5 text-xl">Turbocharge enterprise sales with social ads (for ad budgets above $10,000 per month).</p>
					</div>
					<div>
						<Button
							bgColor="bg-[#000]"
							textColor="text-white"
							className="mt-7 text-[-0.8em]">
							LEARN MORE					
						</Button>
					</div>
				</div>
				
				{/* C */}
				<div className="box-border h-[380px] w-[410px] ml-10 mr-[25px] mb-10 bg-red-700 flex items-center flex-col">
				<div className="px-6">
						<p className="mt-8 text-3xl">D2C Social Media Advertising</p>
						<p className="my-5 text-xl">Attract, engage, and sell with custom social media ads for your business.</p>
					</div>
					<div>
						<Button
							bgColor="bg-[#000]"
							textColor="text-white"
							className="mt-14 text-[-0.8em]">
							LEARN MORE					
						</Button>
					</div>
				</div>
			</Section>

			<Section >
				<div>

				</div>
			</Section>
		</div>
	);
};

export default Page;
