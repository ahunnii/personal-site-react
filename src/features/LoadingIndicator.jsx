import { Flex } from "@chakra-ui/react";
import { PuffLoader } from "react-spinners";

const override = {
	display: "block",
	margin: "0 auto",
	color: "rgb(200, 330, 250)",
};

export default function LoadingIndicator({ isLoading }) {
	// return <PuffLoader color={"#000000"} loading={isLoading} cssOverride={override} size={150} />;

	return (
		<>
			{isLoading && (
				// <Flex minH={"100%"} align={"center"} justify={"center"}>
				<PuffLoader color={"rgb(200, 330, 250)"} loading={isLoading} cssOverride={override} size={150} />
				// </Flex>
			)}
		</>
	);
}
