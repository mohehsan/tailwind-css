import React, { Fragment, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Footer, Hero, Section, Testimonial } from "components/Fawwaz/Sections";
import Logo from "components/Fawwaz/Logo";
import logo from "../../components/assets/logo/logo1.png";
import {
	Card as Pricing,
	CardContent,
	CardHeader,
	IconItem,
} from "components/Fawwaz/Card";
import { Table, TableOfContent, Td, Th } from "components/Fawwaz/Table";
import Button from "components/Fawwaz/Button";

import { FaCheck, FaCheckCircle, FaChevronRight } from "react-icons/fa";
import { AiFillStar, AiFillPhone } from "react-icons/ai";
import fanelImag from "../../components/assets/icon-sales-funnel.png";

interface ITableBody {
	title: {
		type: "unique" | "content";
		content:
			| String
			| {
					bold: String;
					desc: String;
			  };
	};
	description: String[] | JSX.Element[];
}

const pricingCards = [
	{
		rate: "2,050",
		title: "1-2 Social Network",
		type: "basic",
		star: [AiFillStar],
		content: [
			{
				icon: <FaCheckCircle />,
				title: "Up to 5-10 ad campaigns",
			},
			{
				icon: <FaCheckCircle />,
				title: "Up to 20-40 unique ads",
			},
			{
				icon: <FaCheckCircle />,
				title: "Advanced AI tracking",
			},
			{
				icon: <FaCheckCircle />,
				title: "$10,000-$20,000 / mo. monthly ad spend",
			},
		],
	},
	{
		rate: "10,000",
		title: "1-2 Social Network",
		type: "premium",
		star: [AiFillStar, AiFillStar],
		content: [
			{
				icon: <FaCheckCircle />,
				title: "Up to 5-20 ad campaigns",
			},
			{
				icon: <FaCheckCircle />,
				title: "Up to 20-40 unique ads",
			},
			{
				icon: <FaCheckCircle />,
				title: "Dedicated account manager",
			},
			{
				icon: <FaCheckCircle />,
				title: "$100,000-$500,000 / mo. monthly ad spend",
			},
		],
	},
	{
		rate: "65,000",
		title: "1-2 Social Network",
		type: "ultimate",
		star: [AiFillStar, AiFillStar, AiFillStar],
		content: [
			{
				icon: <FaCheckCircle />,
				title: "Up to 30-50 ad campaigns",
			},
			{
				icon: <FaCheckCircle />,
				title: "Up to 120-200 unique ads",
			},
			{
				icon: <FaCheckCircle />,
				title: "Custom reporting dashboard",
			},
			{
				icon: <FaCheckCircle />,
				title: "$1M-$1.5M / mo. monthly ad spend",
			},
		],
	},
];

const tableHeader = [
	"Features",
	"1-2 Social networks",
	"1-3 Social networks",
	"2-4 Social networks",
	"3-7 Social networks",
];

const descTableBody = [
	<FaCheck className="fill-green-500 mx-auto" />,
	<FaCheck className="fill-green-500 mx-auto" />,
	<FaCheck className="fill-green-500 mx-auto" />,
	<FaCheck className="fill-green-500 mx-auto" />,
];

const tableBody: ITableBody[] = [
	{
		title: {
			type: "content",
			content: "Number of Unique Ads Across All Campaigns ",
		},
		description: [
			"Up to 20-40",
			"up to 40-60",
			"up to 60-80",
			"up to 60-80",
		],
	},
	{
		title: {
			type: "content",
			content: "Number of Advertising Campaigns",
		},
		description: [
			"Up to 5-10 across all networks",
			"up to 10-15 across all networks",
			"up to 15-20 across all networks",
			"up to 15-20 across all networks",
		],
	},
	{
		title: {
			type: "content",
			content: "Ad Spend Range",
		},
		description: [
			"$10,000-$20,000 / mo.",
			"$20,001 – $100,000 / mo.",
			"$100,001 – $500,000 / mo.",
			"$500,001 – $1M / mo.",
		],
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Network Included:",
				desc: "Facebook, Twitter, Pinterest, Instagram, LinkedIn, Snapchat (Geofilters), YouTube",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content:
				"Dedicated Social Media Advertising Account Manager Additional support from social team members with expertise on each network included",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Access to MarketingCloudFX AI Tracking Tools",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Targeting Opportunities",
				desc: "Dependent on networks",
			},
		},
		description: [<span />, <span />, <span />, <span />],
	},
	{
		title: {
			type: "content",
			content: "Custom Audiences using social pixels or customer lists",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Keyword, interest, user intent targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "School/Profession/Workplace targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Company size, Industry, Job Title, etc. targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Device targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Demographic targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content:
				"Social ad account audit, recommendations, and consultation",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Social Advertising Strategy and Consultation",
				desc: "Campaign structure recommendations Recommended # of campaigns Budget allocation recommendations Audience recommendations and creation Development of campaign goals",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Social Advertising Creative Development and Consultation",
				desc: "Ad creative development (copy, headlines, creative, CTAs) Up to 4 unique ads for each campaign + copy adjustment based on audience Initial ad creative includes two rounds of revisions",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "For Facebook and Instagram ads only",
				desc: "Ecommerce website catalog setup (up to 10 hours)",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content:
				"Ecommerce website catalog setup For non Facebook or Instagram ads",
		},
		description: [
			"$125 / hour or custom quote",
			"$125 / hour or custom quote",
			"$125 / hour or custom quote",
			"$125 / hour or custom quote",
		],
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "One-Time Social Reporting Custom Development",
				desc: "Custom report including KPIs, trend data, ad performance,high-level overviews Customized to show data and metrics applicable to different client needs Interactive reporting tables and charts Establish frequency (up to daily dashboard available)",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Ongoing ad account management",
		},
		description: [
			"Monthly & quarterly",
			"Monthly & quarterly",
			"Monthly & quarterly",
			"Monthly & quarterly",
		],
	},
	{
		title: {
			type: "content",
			content:
				"Ongoing account monitoring of social ad comments and engagement",
		},
		description: ["Daily", "Daily", "Daily", "Daily"],
	},
	{
		title: {
			type: "content",
			content:
				"Ongoing analysis of audience performance and optimization",
		},
		description: ["Monthly", "Monthly", "Monthly", "Monthly"],
	},
	{
		title: {
			type: "content",
			content:
				"Ongoing creative analysis and optimization (pausing ads, minor tweaks, small changes)",
		},
		description: ["Weekly", "Weekly", "Weekly", "Weekly"],
	},
	{
		title: {
			type: "content",
			content:
				"Ongoing creative analysis and optimization (pausing ads, minor tweaks, small changes)",
		},
		description: ["Quarterly", "Quarterly", "Quarterly", "Quarterly"],
	},
	{
		title: {
			type: "content",
			content: "Creative development and optimization (as needed)",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "1 round of revisions to client-provided creative",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content:
				"Additional revisions/enhancements to client-provided creative",
		},
		description: [
			"$125 / hour",
			"$125 / hour",
			"$125 / hour",
			"$125 / hour",
		],
	},
	{
		title: {
			type: "content",
			content: "Monthly, quarterly & annual reporting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Reporting dashboard accessible at preferred frequency",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Add On:",
				desc: "Creative asset package (10 custom graphics)",
			},
		},
		description: [
			"$1,050 / package",
			"$1,050 / package",
			"$1,050 / package",
			"$1,050 / package",
		],
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Add On:",
				desc: "Additional campaigns (includes up to 4 ads per campaign)",
			},
		},
		description: [
			"$300 / campaign",
			"$300 / campaign",
			"$300 / campaign",
			"$300 / campaign",
		],
	},
	{
		title: {
			type: "content",
			content: "Ongoing Monthly Campaign Investment",
		},
		description: [
			"$2,050 or 15% of ad spend, whichever is higher",
			"$3,500 or 12.5% of ad spend, whichever is higher",
			"$10,000 or 9.5% of ad spend, whichever is higher",
			"$38,000 or 7.5% of ad spend, whichever is higher",
		],
	},
];

const socialCards = [
	{
		title: "Ecommerce Social Media Advertising",
		description:
			"Drive traffic to your ecommerce store and start selling more online with social media ads.",
	},
	{
		title: "Enterprise Social Media Advertising",
		description:
			"Turbocharge enterprise sales with social ads (for ad budgets above $10,000 per month).",
	},
	{
		title: "D2C Social Media Advertising",
		description:
			"Attract, engage, and sell with custom social media ads for your business.",
	},
];

const connectTarget = [
	{
		title: "Reach out to networks that matter to your business, connect with your targets.",
		description: {
			one: "Platforms like Youtube, Facebook, Instagram and Twitter gives your business the opportunity to reach hundreds of millions of users, as well as powerful targeting options that help your business reach out to its target audience and have amazing returns on its ad spend.",
			two: "With Muscled, your company gets has the chance to take advantage of all these platforms because we cover:",
			three: "While our enterprise social media advertising service plans include a recommended number of networks, you have the choice to advertise on however many you prefer, like four platforms instead of two.",
		},
	},
];

const platform = [
	"Facebook",
	"Instagram",
	"Twitter",
	"Pinterest",
	"Snapchat",
	"YouTube",
	"LinkedIn",
];

const learnMore = [
	"9 Popular Social Messaging Apps For Your Business",
	"9 Tips To Help You Nail Your Social Commerce Plan",
	"7 Tips For Social Media Optimization",
	"Top 11 Traits Of The Best Social Media Firms",
	"Top Social Media Sites For Marketers",
	"How Much Does Advertising On Facebook Cost?",
	"How Much Does It Cost To Advertise On Instagram?",
	"How To Handle A Crisis On Social Media",
	"How To Advertise On Social Media: Stop Scrollin’. Here’s What To Know",
	"Build An Audience On Social Media With These Tips",
	"What Is Social Media Management (And What Does It Include?)",
	"Which Social Media Platforms Are Right For Your Business?",
	"Social Media Marketing For Businesses",
	"What Can A Social Media Marketing Company Do For Your Business?",
	"Is Social Media Marketing Right For Your Business?",
	"Social Media And SEO: Can Social Media Improve Your SEO Rankings?",
	"How To Gauge Social ROI And Why It Matters",
	"What Are Social Media KPIs?",
	"32 Reasons Why Social Media Marketing Is Important",
	"How Much Does Facebook Advertising Cost?",
];

const What = [
	{
		title: "So, what do you get when you choose to partner with us? Practically everything.",
		description: {
			one: "So, why did you decide to invest in social media marketing services?",
			two: "You might have probably thought do so because you want to:",
			three: "At Muscled, we recognize these goals, as well as the value you want to see in outsourcing your enterprise social media advertising. That’s why our services provide a complete package for advertising on social media.",
			four: "For example, Muscled’s social media advertising plans include:",
			five: "As your business social media advertising partner, we provide you with a solution that actually works. Whether you’re looking to reach out on TikTok,Twitter, Instagram, or another social media network, we will take care of your advertising campaign so your company can optimize its time and resources while achieving an impressive return on investment (ROI).",
		},
	},
];

const So = [
	"Save in-house team members’ time",
	"Improve returns from advertising on social media",
	"Boost social media advertising initiatives",
	"Get a better social media advertising strategy",
	"Access industry-leading experts",
	"Optimize internal marketing costs",
	"And more",
];

const Example = [
	"Dedicated account manager, plus a team of platform-specific specialists",
	"Social advertising audit",
	"Social advertising strategy recommendations and/or development",
	"Social media ad creatives",
	"Network tracking pixel installation",
	"Daily account monitoring",
	"Weekly ad creative analysis and optimization",
	"Monthly ad audience analysis and optimization",
	"Customized reports",
	"Monthly reporting",
];

const builtIdentity = [
	{
		title: "Build brand Identity",
		description: {
			one: "Social media is one of the best channels for establishing and building brand Identity.",
			two: "While difficult to accurately measure, brand identity and awareness plays a critical role in a consumer or business buyer turning into a customer. Someone has to discover your brand before they even consider becoming a client, which is why brand awareness is a critical marketing goal.",
			three: "Using social media ads, your business can be able to target future customers by targeting users based on their location, interests, demographics, and more. You can even use existing customer data to find people similar to your client base.",
		},
	},
];

const How = [
	{
		title: "How do we help your business?",
		description:
			"Enterprise social media advertising from Muscled helps your business:",
	},
];

const generateSales = [
	{
		title: "Generate offline and online sales",
		description: {
			one: "Investing in social media advertising earns you revenue.",
			two: "Instagram or Facebook ads promoting your products or services, for example, can make users  visit your online store or brick-and-mortar location. Accurate targeting, convincing ad copy, and an amazing landing page, however, are essential if you want to get results of social media advertising.",
			three: "That’s why it’s worthwhile to partner with an experienced social media advertising agency like Muscled.",
			four: "Not only do we feature an in-house social media team, but we’ve also been named a “Meta Business Partner.” That means we’ve demonstrated phenomenal expertise and client results when it comes to marketing and advertising on platforms like Youtube and Facebook.",
		},
	},
];

const earnCustomer = [
	{
		title: "Once you earn a customer, be able to keep it",
		description: {
			one: "Earning a new customer costs 10 times more than keeping an existing one.",
			two: "For brands today, it’s critical to earn and maintain a customer’s loyalty to your brand. When you have customers loyal to your brand and business, these same customer’s will attract others into becoming your customer too. In fact, 80% of people get advice about their next purchase from social media",
			three: "Building a smart and competitive social media ad campaign strategy and being able to pull it off can help your company engage with these brand advocates consistently, which can keep your business top-of-mind. Plus, having these brand advocates as followers can increase engagement and even shares for organic posts.",
		},
	},
];

const improveBussiness = [
	{
		title: "Improve business social media advertising ROI",
		description: {
			one: "Moving to business social media advertising services can improve your ROI too.",
			two: "From boosting your conversion rates to cutting down on costs per click(CPC),  working with an experienced agency like Muscled can help your business get returns from advertising on social media platforms like LinkedIn, Facebook, and Pinterest.",
			three: "The best part is that your business improves its ROI without the unnecessarily high costs of expanding your internal marketing team. With our business social media advertising management services, you get an entire social media team instantly, which let’s you focus on other areas of your business entirely.",
		},
	},
];

const increase = [
	{
		title: "Increase Remarketing Opportunity",
		description: {
			one: "Remarketing is a powerful online advertising strategy. Retargeted ads make people 70% more likely to convert, which means more people you reach out too, more conversions, more sales. You want to utilize (and benefit) from social media remarketing.",
			two: "The installation of tracking pixels, like from Facebook and LinkedIn, allows your business to initiate remarketing campaigns on these social media platforms.Whenever someone visits your website while logged into their Facebook account, for example, you have the ability to remarket to them on Facebook later.",
			three: "With  Muscled, your business can earn from this social media advertising benefit. Our team will set up the tracking pixels, curate the campaigns, and construct the ads so you can start earning off the missed revenue.",
		},
	},
];

const Why = [
	{
		title: "Why do brands choose Muscled for social media advertising?",
		description:
			"Companies like yours make Muscled their social media advertising partner for a few reasons, including:",
	},
];

const onePartner = [
	{
		title: "We’re a one-stop shop, get everything you need in one partner",
		description: {
			one: "When investing in social media advertising services, having a single partner is invaluable.",
			two: "You spend less time going on multiple calls from different entities regarding different needs.",
			three: "Instead, you have one trusted partner that takes care of everything for you. So you spend less time coordinating and more time on other aspects of your business.",
			four: "Since Muscled is a full-service digital marketing agency, our #+ team of online and social media experts handles every aspect of your campaign. From installing your tracking pixels to developing your ad strategy to building your ad creatives, we do it all — and we do it well.",
			five: "That’s why more than 91% of our clients make us their long-term partner.",
		},
	},
];

const allrounderTeam = [
	{
		title: "Get an all-rounder team",
		description: {
			one: "Establishing an internal social media team is a significant investment, even for an enterprise-level company. In addition to the cost of recruiting and hiring, your company also has to manage salaries and benefits all year round, which isn’t exactly cheap.",
			two: "With our enterprise social media advertising services, your business gets a much more cost-effective option without sacrificing quality. You also get to support your in-house marketing team, minus the time and cost of building an internal social media team.",
			three: "Plus, you get instant access to the best in the industry, which pump your social media ROI.",
		},
	},
];

const PartnerAgency = [
	{
		title: "Partner with the agency that puts focus on the value they give to the client",
		description: {
			one: "No matter how much you spend on advertising, we all want to see returns.",
			two: "At Muscled, our social media agency focuses not only on the results but we want it to be real results. We focus on the metrics that matter the most for you and your business, we’re sales driven. That’s why, in the past # years, we’ve helped our clients earn more than  #$ in revenue.",
			three: "Our services (over the last # years) have also generated the following results for our clients:",
			four: "As your partner, you can trust Muscled to help your brand thrive using social media. Whether you’re looking to build your follower base, boost your online sales, or improve your brand awareness, our team of experts can get the job done.",
		},
	},
];

const PartnerList = [
	"5.2 million phone calls",
	"7.8 million leads",
	"12.9 million managed transactions",
];

const FAQs = [
	{
		title: "FAQs about enterprise social media advertising services",
		description: {
			one: "Looking to learn more about our enterprise social media advertising services? Read our FAQ:",
			two: "What are enterprise social media advertising services?",
			three: "Enterprise social media advertising services use social media ads to promote enterprise organizations on networks like Facebook, Instagram, LinkedIn, and Twitter. Enterprises use social media advertising to build brand awareness, attract followers, reduce client churn, and drive revenue.",
			four: "So, how much does Social Media Advertising Services cost anyway?",
			five: "Services like these and how much they cost depends on a few factors, such as the strategy, ad spend and the agency they partner up with. Typically, enterprises will invest $450 to more than $6000 into social media advertising each month.",
		},
	},
];

const moreFollower = [
	{
		title: "Get more followers : Increase your sales",
		description: {
			one: "Social media advertising allows your business the opportunity not only to increase its online following but also the growth itself. Using social media platforms and a trusted social media agency like Muscled, you can build brand identity and awareness, customer loyalty, and sales.",
			two: "Start using social media to grow your business via social media advertising, if you want to learn what we can do for you. Contact us online or call us at ##### for a consultation today. ",
		},
	},
];

const lastCards = [
	{
		title: "Social Media Services",
		lists: [
			"Social Media Design",
			"Social Media Management",
			"Social Media Pricing",
			"Facebook Advertising Services",
			"Instagram Advertising Services",
		],
	},
	{
		title: "SEO Services",
		lists: ["SEO Services", "Enterprise SEO Pricing", "Local SEO Pricing"],
	},
	{
		title: "Other WebFX Services",
		lists: [
			"Enterprise Marketing Agency",
			"Account-Based Marketing",
			"Web Design",
			"Web Video Production",
			"Voice Search Optimization",
		],
	},
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
					heroSVG={
						<div className="space-y-3">
							<div className="flex bg-black-80 py-2 px-8">
								<div>
									<Image
										src={fanelImag}
										alt={`${fanelImag}`}
									/>
								</div>
								<div className="text-white">
									<p className="text-[0.8em]">
										Access the data-fueled plans behind
									</p>
									<h1 className="">$3,021,182,299</h1>
									<span className="text-[#BBBBBB] text-[0.8em]">
										IN CLIENT REVENUE
									</span>
								</div>
							</div>
							<div className="flex bg-black-80 py-2 px-8">
								<div>
									<Image
										src={fanelImag}
										alt={`${fanelImag}`}
									/>
								</div>
								<div className="text-white">
									<p className="text-[0.8em]">
										Access the data-fueled plans behind
									</p>
									<h1 className="">$3,021,182,299</h1>
									<span className="text-[#BBBBBB] text-[0.8em]">
										IN CLIENT REVENUE
									</span>
								</div>
							</div>
							<div className="flex bg-black-80 py-2 px-8">
								<div>
									<Image
										src={fanelImag}
										alt={`${fanelImag}`}
									/>
								</div>
								<div className="text-white">
									<p className="text-[0.8em]">
										Access the data-fueled plans behind
									</p>
									<h1 className="">$3,021,182,299</h1>
									<span className="text-[#BBBBBB] text-[0.8em]">
										IN CLIENT REVENUE
									</span>
								</div>
							</div>
							<div className="flex bg-black-80 py-2 px-8">
								<div>
									<Image
										src={fanelImag}
										alt={`${fanelImag}`}
									/>
								</div>
								<div className="text-white">
									<p className="text-[0.8em]">
										Access the data-fueled plans behind
									</p>
									<h1 className="">$3,021,182,299</h1>
									<span className="text-[#BBBBBB] text-[0.8em]">
										IN CLIENT REVENUE
									</span>
								</div>
							</div>
						</div>
					}
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
				<div className="flex flex-wrap lg:space-x-5 gap-10 lg:gap-0 justify-center">
					{pricingCards.map((pricing, index) => (
						<Pricing
							key={index}
							className="max-w-[380px] w-full border-black-70 border rounded-md">
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
										(Component, key): JSX.Element => (
											<Component
												key={key}
												className="card-icon fill-black-50"
											/>
										)
									)}
								</div>
							</CardHeader>
							<CardContent className="space-y-9">
								{pricing.content.map((content, key) => (
									<IconItem
										key={key}
										icon={content.icon}
										title={content.title}
										className="mt-4 text-black-70"
									/>
								))}
							</CardContent>
							<div className="px-4 py-10 mt-4 flex items-center justify-center flex-col">
								<p className="border-t border-[#000] w-full mt-1 mb-10 text-center" />
								<p className="mb-10 text-black-80">
									$3,125 INITIAL INVESTMENT
								</p>
								<Button
									bgColor="bg-[#000]"
									textColor="text-white"
									className="py-4 px-10 text-[-0.8em]">
									Send Proposal
								</Button>
							</div>
						</Pricing>
					))}
				</div>
			</Section>
			{/* end pricing section */}

			<Section className="flex flex-wrap justify-center pt-16">
				<div className="flex py-2 space-y-9">
					<p className="flex text-4xl font-medium text-sky-500">
						See Full Deliverables
						<FaChevronRight className="ml-10" />
					</p>
				</div>
			</Section>

			<Section className="pt-16">
				<div className="flex py-2 space-y-16 justify-center flex-col">
					<h1 className="text-4xl text-justify">
						Turn followers into customers with Muscled’s social
						media advertising
					</h1>
					<div className="text-justify text-xl">
						<p className="my-12">
							Every digital marketing strategy has to have social
							media, that means yours too.
						</p>

						<p className="my-3">
							With platforms like Facebook, LinkedIn, Twitter,
							Instagram, and even TikTok, your business can go to
							wherever it needs to, whether to boost your
							recruitment efforts, sales ventures, or customer
							loyalty incentives
						</p>
						<p className="my-3">
							While{" "}
							<span className="text-sky-500 underline">
								social media marketing
							</span>{" "}
							does help reach these goals, advertising kickstarts
							your efforts by adding more OOMPH to your company’s
							presence in social media platforms. With social
							media ads that hit the spot in targeting, messaging,
							and bidding, your enterprise business can get
							phenomenal results from social media.
						</p>
						<p className="my-3">
							At Muscled, our social media management team
							specializes in corporate-level social media
							advertising.
						</p>
						<p className="my-3">
							When you partner with our own social media experts,
							you get a complete social media advertising package.
							From curating your strategy to creating your ads to
							managing your campaigns, we cover everything in this
							aspect. Plus, we provide you with reports that are
							convenient and accurate
						</p>

						<p className="my-12">
							If you want to learn how our Meta Business Partner
							agency can help bring more power to your brand — and
							why 91% of brands make us their long-term partner —
							<span className="text-sky-500 underline">
								contact us online
							</span>{" "}
							or call us at ######## to speak with an experienced
							strategist!
						</p>
					</div>
				</div>
			</Section>

			<div className="pt-32">
				<Testimonial />
			</div>

			<Section className="pt-32">
				{connectTarget.map((content, key) => (
					<div key={key} className="py-2 space-y-16 justify-center">
						<h1 className="flex text-4xl text-justify">
							{content.title}
						</h1>
						<div className="text-justify text-xl">
							<p className="mb-5">{content.description.one}</p>
							<p className="mb-5">{content.description.two}</p>
							<ul className="list-disc pl-8 mb-5">
								{platform.map((item, key) => (
									<li key={key}>{item}</li>
								))}
							</ul>
							<p>{content.description.three}</p>
						</div>
					</div>
				))}
			</Section>

			<Section className="mt-52">
				<h1 className="text-4xl text-center mb-40">
					MUSCLED Enterprise Social Media Advertising Pricing
				</h1>
				<div className="relative overflow-x-scroll">
					<Table>
						<thead>
							<tr>
								{tableHeader.map((content, key) => (
									<>
										{!key ? (
											<Th
												key={key}
												content={content}
												className="py-14 text-white text-left text-2xl rounded-tl-xl"
											/>
										) : (
											<Td
												key={key}
												content={content}
												className={`py-14 px-14 font-bold text-center text-2xl ${
													key ===
													tableHeader.length - 1
														? "rounded-tr-xl"
														: ""
												}`}
												type={
													key === 1 || key === 3
														? "basic"
														: "premium"
												}
											/>
										)}
									</>
								))}
							</tr>
						</thead>
						<tbody>
							{tableBody.map((body, key) => (
								<tr key={key} className="text-center">
									{body.title.type === "content" ? (
										<Th
											className="text-left text-white font-normal"
											content={body.title.content}
										/>
									) : (
										<Th
											className="text-left text-white font-normal"
											content={
												<>
													<div className="font-bold">
														{
															body.title.content
																.bold
														}
													</div>
													<div>
														{
															body.title.content
																.desc
														}
													</div>
												</>
											}
										/>
									)}
									{body.description.map((content, key) => (
										<Td
											className="px-14 py-11 text-black-80"
											key={key}
											content={content}
											type={
												key === 1 || key === 3
													? "basic"
													: "premium"
											}
										/>
									))}
								</tr>
							))}
							<tr className="text-center">
								<Th
									className="text-white text-left font-normal rounded-bl-xl"
									content={
										<>
											<p>
												Give Us a Call if You Need
												Information
											</p>
											<div className="flex gap-2 items-center mt-2 cursor-pointer">
												<AiFillPhone className="fill-sky-500" />
												<p className="text-sky-500 font-bold">
													888-601-5359
												</p>
											</div>
										</>
									}
								/>
								<Td
									type="premium"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
								<Td
									type="basic"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
								<Td
									type="premium"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
								<Td
									type="basic"
									className="rounded-br-xl"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
							</tr>
						</tbody>
					</Table>
				</div>
			</Section>

			<Section className="flex flex-wrap pt-20">
				<div className="justify-center">
					<h1 className="mb-14 text-4xl text-center">
						Social media advertising services for every business
					</h1>
					<p className="mb-7 text-xl text-center">
						MUSCLED offers custom social ad plans for ecommerce
						stores, enterprises, and direct to consumer (D2C)
						brands.
					</p>
					<p className="text-xl text-center">
						Check out the plans below, or give us a call at
						888-256-9448 to learn more!{" "}
					</p>
				</div>
			</Section>

			<Section className="pt-20">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
					{socialCards.map((content, key) => (
						<div
							key={key}
							className="bg-bold-red w-auto pt-5 pb-10 px-5 flex flex-wrap flex-col justify-around">
							<div className="px-6 text-accent-white">
								<p className="mt-8 text-3xl">{content.title}</p>
								<p className="my-5 text-xl">
									{content.description}
								</p>
							</div>
							<Button
								bgColor="bg-[#000]"
								textColor="text-white"
								className="mx-auto self-end">
								LEARN MORE
							</Button>
						</div>
					))}
				</div>
			</Section>

			<Section className="pt-32 grid grid-cols-1 lg:grid-cols-5 gap-3">
				<div className="order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto md:w-full lg:max-w-[400px]">
					<TableOfContent />
					<div className="mt-16">
						<h1 className="mb-5">
							Learn more about social media advertising
						</h1>
						<ul className="text-[15px] underline decoration-1">
							{learnMore.map((item, key) => (
								<li key={key} className="py-2">
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="order-2 col-span-1 lg:order-1 lg:col-span-3 ml-0 my-10 lg:ml-10 lg:my-0">
					<div>
						{What.map((content, key) => (
							<div key={key}>
								<h1 className="text-[40px] mb-16">
									{content.title}
								</h1>
								<div className="text-xl">
									<p>{content.description.one}</p>
									<p>{content.description.two}</p>
									<ul className="my-8 ml-10 list-disc">
										{So.map((item, key) => (
											<li key={key}>{item}</li>
										))}
									</ul>
									<p className="my-8">
										{content.description.three}
									</p>
									<p>{content.description.four}</p>
									<ul className="my-8 ml-10 list-disc">
										{Example.map((item, key) => (
											<li key={key}>{item}</li>
										))}
									</ul>
									<p>{content.description.five}</p>
								</div>
							</div>
						))}

						<img
							src="https://picsum.photos/200"
							alt=""
							className="w-[760px] h-[525px] mt-40 mb-20"
						/>

						{How.map((content, key) => (
							<div key={key}>
								<h1 className="text-[40px] mb-16">
									{content.title}
								</h1>
								<p className="text-xl">{content.description}</p>
							</div>
						))}

						{builtIdentity.map((content, key) => (
							<div key={key} className="text-xl">
								<h1 className="my-12">{content.title}</h1>
								<p className="my-4">
									{content.description.one}
								</p>
								<p className="my-4">
									{content.description.two}
								</p>
								<p className="my-4">
									{content.description.three}
								</p>
							</div>
						))}

						{generateSales.map((content, key) => (
							<div key={key} className="text-xl">
								<h1 className="my-12">{content.title}</h1>
								<p className="my-4">
									{content.description.one}
								</p>
								<p className="my-4">
									{content.description.two}
								</p>
								<p className="my-4">
									{content.description.three}
								</p>
								<p className="my-4">
									{content.description.four}
								</p>
							</div>
						))}

						{earnCustomer.map((content, key) => (
							<div key={key} className="text-xl">
								<h1 className="my-12">{content.title}</h1>
								<p className="my-4">
									{content.description.one}
								</p>
								<p className="my-4">
									{content.description.two}
								</p>
								<p className="my-4">
									{content.description.three}
								</p>
							</div>
						))}

						{improveBussiness.map((content, key) => (
							<div key={key} className="text-xl">
								<h1 className="my-12">{content.title}</h1>
								<p className="my-4">
									{content.description.one}
								</p>
								<p className="my-4">
									{content.description.two}
								</p>
								<p className="my-4">
									{content.description.three}
								</p>
							</div>
						))}

						{increase.map((content, key) => (
							<div key={key} className="text-xl">
								<h1 className="my-12">{content.title}</h1>
								<p className="my-4">
									{content.description.one}
								</p>
								<p className="my-4">
									{content.description.two}
								</p>
								<p className="my-4">
									{content.description.three}
								</p>
							</div>
						))}

						<img
							src="https://picsum.photos/210"
							alt=""
							className="w-[760px] h-[525px] mt-40 mb-20"
						/>

						{Why.map((content, key) => (
							<div key={key}>
								<h1 className="text-[40px] mb-16">
									{content.title}
								</h1>
								<p className="text-xl">{content.description}</p>
							</div>
						))}

						{onePartner.map((content, key) => (
							<div key={key} className="text-xl">
								<h1 className="my-12">{content.title}</h1>
								<p className="my-4">
									{content.description.one}
								</p>
								<p className="my-4">
									{content.description.two}
								</p>
								<p className="my-4">
									{content.description.three}
								</p>
								<p className="my-4">
									{content.description.four}
								</p>
								<p className="my-4">
									{content.description.five}
								</p>
							</div>
						))}

						{allrounderTeam.map((content, key) => (
							<div key={key} className="text-xl">
								<h1 className="my-12">{content.title}</h1>
								<p className="my-4">
									{content.description.one}
								</p>
								<p className="my-4">
									{content.description.two}
								</p>
								<p className="my-4">
									{content.description.three}
								</p>
							</div>
						))}

						{PartnerAgency.map((content, key) => (
							<div key={key} className="text-xl">
								<h1 className="my-12">{content.title}</h1>
								<p className="mb-4 mt 8">
									{content.description.one}
								</p>
								<p className="my-4">
									{content.description.two}
								</p>
								<p className="my-4">
									{content.description.three}
								</p>
								<ul className="my-4 ml-10 list-disc">
									{PartnerList.map((item, key) => (
										<li key={key}>{item}</li>
									))}
								</ul>
								<p className="my-4">
									{content.description.four}
								</p>
							</div>
						))}

						{FAQs.map((content, key) => (
							<div key={key}>
								<h1 className="text-[40px] mt-20 mb-16">
									{content.title}
								</h1>
								<div className="text-xl">
									<p className="my-4">
										{content.description.one}
									</p>
									<h1 className="my-12">
										{content.description.two}
									</h1>
									<p className="my-4">
										{content.description.three}
									</p>
									<h1 className="my-12">
										{content.description.four}
									</h1>
									<p className="my-4">
										{content.description.five}
									</p>
								</div>
							</div>
						))}

						{moreFollower.map((content, key) => (
							<div key={key}>
								<h1 className="text-[40px] mt-20 mb-16">
									{content.title}
								</h1>
								<div className="text-xl">
									<p className="my-4">
										{content.description.one}
									</p>
									<p className="my-4">
										{content.description.two}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className="mt-28 max-w-[650px] w-auto bg-sky-800 text-white p-12 space-y-5">
						<p className="font-bold text-3xl">
							For verified ratings of our marketing
							services,please read our:
						</p>
						<div className="flex">
							<AiFillStar className="fill-yellow-400 text-3xl" />
							<AiFillStar className="fill-yellow-400 text-3xl" />
							<AiFillStar className="fill-yellow-400 text-3xl" />
							<AiFillStar className="fill-yellow-400 text-3xl" />
							<AiFillStar className="fill-yellow-400 text-3xl" />
						</div>
						<div className="text-[#D2D2D2] flex items-center">
							<p>INDUSTRY-LEADING 863 TESTIMONIALS</p>
							<FaChevronRight className="ml-8" />
						</div>
						<p className="text-[#D2D2D2]">
							MUSCLED Agency Rating 4.9 out of 5 with 267 ratings
						</p>
					</div>
				</div>
			</Section>

			<Section className="mt-36 mb-28">
				<div className="flex justify-around px-5">
					{lastCards.map((content, key) => (
						<div
							key={key}
							className="w-auto min-h-[363px] bg-red-3 p-8 space-y-7 min-w-[320px] text-black-70">
							<p className="font-medium text-2xl">{content.title}</p>
							<ul className="space-y-7">
								{content.lists.map((list, key) => (
									<Fragment key={key}>
										<li className="underline">{list}</li>
									</Fragment>
								))}
							</ul>
						</div>
					))}
				</div>
			</Section>

			<Footer />
		</div>
	);
};

export default Page;
