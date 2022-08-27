import { FC } from "react";
import { CardHeaderProps } from "../component.type";

const CardHeader: FC<CardHeaderProps> = ({
	title,
	rate,
	type,
	monthly,
	children,
}) => {
	return (
		<div
			className={`flex flex-col items-center justify-center py-10 ${
				type === "premium"
					? "bg-red-6"
					: type === "ultimate"
					? "bg-red-9"
					: "bg-red-3"
			}`}>
			{children}
			<h4 className="mt-4 mb-10 font-bold text-2xl text-black-80">
				{title}
			</h4>
			<h1 className="mb-2 text-center">
				<span className="text-bold-red text-3xl font-bold">
					${rate}
				</span>
				{monthly}
			</h1>
		</div>
	);
};

export default CardHeader;
