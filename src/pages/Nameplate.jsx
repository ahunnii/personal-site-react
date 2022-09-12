import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import ConsolePage from "../components/ConsolePage";
import Stats from "../components/Stats";
import StatsPanel from "../components/StatsPanel.jsx";

export default function Nameplate() {
	return (
		<ConsolePage>
			<h3 className="pip-title">Main</h3>
			<Flex minH={"100%"} align={"center"} justify={"center"}>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					<Stack align={"center"}>
						<Heading fontSize={"4xl"} textAlign={"center"}>
							Andrew Hunn
						</Heading>
						<Text fontSize={"lg"} color={"gray.600"}>
							Web Developer ✌️
						</Text>
					</Stack>
					<Box rounded={"lg"} boxShadow={"lg"} p={8}></Box>
				</Stack>
			</Flex>

			{/* <div className="pip-body">
			
				<ul className="options">
					<li>
						<input type="radio" id="radio1" name="radio" />
						<label htmlFor="radio1">Brass Knuckles</label>
					</li>
					<li>
						<input type="radio" defaultChecked="checked" id="radio2" name="radio" />
						<label htmlFor="radio2">Hunting Rifle</label>
					</li>
					<li>
						<input type="radio" id="radio3" name="radio" />
						<label htmlFor="radio3">Long Fuse Dynamite (11)</label>
					</li>
					<li>
						<input type="radio" id="radio4" name="radio" />
						<label htmlFor="radio4">Plasma Pistol</label>
					</li>
				</ul>
				<StatsPanel />
			</div> */}
		</ConsolePage>
	);
}
