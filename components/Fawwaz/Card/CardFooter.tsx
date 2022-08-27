import React, { FC } from "react";

import Button from "../Button";

const CardFooter: FC = () => {
	return (
		<div className="px-4 py-10 mt-4 flex items-center justify-center flex-col">
			<p className="border-t border-[#000] w-full mx-5 my-10 text-center" />
			<Button
				bgColor="bg-[#000]"
				textColor="text-white"
				className="py-4 px-10 text-[0.8em]">
				Customize My Plan
			</Button>
		</div>
	);
};

export default CardFooter;
