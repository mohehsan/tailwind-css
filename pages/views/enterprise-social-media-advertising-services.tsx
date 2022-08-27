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
					<h1 className="flex text-4xl text-justify">Turn followers into customers with Muscled’s social media advertising</h1>
					<div className="text-justify text-xl">
						<p className="mb-20">
							Every digital marketing strategy has to have social media, that means yours too.
						</p>
						<p className="mb-10">
							With platforms like Facebook, LinkedIn, Twitter, Instagram, and even TikTok, your business can go to wherever it needs to, whether to boost your recruitment efforts, sales ventures, or customer loyalty incentives.
						</p>
						<p className="mb-10">
							While <a href="" className="text-sky-400">social media marketing</a> does help reach these goals, advertising kickstarts your efforts by adding more OOMPH to your company’s presence in social media platforms. With social media ads that hit the spot in targeting, messaging, and bidding, your enterprise business can get phenomenal results from social media.
						</p>
						<p className="mb-10">
							At Muscled, our social media management team specializes in corporate-level social media advertising.
						</p>
						<p className="mb-20">
							When you partner with our own social media experts, you get a complete social media advertising package. From curating your strategy to creating your ads to managing your campaigns, we cover everything in this aspect. Plus, we provide you with reports that are convenient and accurate.
						</p>
						<p>
							If you want to learn how our Meta Business Partner agency can help bring more power to your brand — and why 91% of brands make us their long-term partner — <a href="" className="text-sky-400">contact us online</a> or call us at ######## to speak with an experienced strategist!
						</p>
					</div>
				</div>
			</Section>


			<Section>
				<Testimonial/>
			</Section>
		</div>
	);
};

export default Page;
