import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Stats } from "../features";
export default function About({ profile }) {
	return (
		<Box
			className="tab-pane fade in"
			width={"100%"}
			h="100%"
			display={"inline-flex"}
			flexDir={"column"}
			justifyContent={"center"}>
			<h3 className="pip-title">ABOUT</h3>
			<Stats />
			<Center
				w={"100%"}
				h={{ base: "100%", md: "100%" }}
				className="pip-body"
				mt={{ base: "2rem", md: 0 }}
				pt={{ base: "1rem", md: 0 }}
				overflowY={"scroll"}>
				<Stack direction={{ base: "column", md: "row" }} maxH={"75vh"} pt={{ base: "2rem", md: 0 }}>
					<Box maxW={{ base: "100%", md: "70%" }}>
						<Text> Hi, my name is Andrew Hunn</Text>
						{profile && (
							// <Box
							// 	w={{ base: "100%", sm: "75%", md: "100%" }}
							// 	display={{ base: "inline", md: "none" }}
							// 	height={{ base: "auto", md: "230px" }}>
							// 	<Box
							// 		rounded={"lg"}
							// 		my={3}
							// 		pos={"relative"}
							// 		height={{ base: "auto", md: "230px" }}
							// 		_after={{
							// 			transition: "all .3s ease",
							// 			content: '""',
							// 			w: "full",
							// 			h: "full",
							// 			pos: "absolute",
							// 			top: 5,
							// 			left: 0,
							// 			backgroundImage: `url(${profile.url})`,
							// 			filter: "blur(15px)",
							// 			zIndex: -1,
							// 		}}>
							// 		{profile && <Image src={profile.url} />}
							// 	</Box>
							// </Box>
							<Image src={profile.url} my={2} display={{ base: "inline", md: "none" }} />
						)}
						<Text mt={5}>
							Nice to e-meet you! Before you scroll to the projects, I wanted to take this opportunity to tell you a bit
							about myself.
						</Text>
						<Text mt={5}>
							I graduated in 2018 with a bachelors in Computer Science at Eastern Michigan University. For the past four
							years, I have been working as a Software Developer at the University of Michigan as part of a research
							team. The research involves the idea of Culturally Situated Design Tools (CSDTs), which are a collection
							of web-based applications that allow students to create simulations of cultural arts — Native American
							beadwork, African American cornrow hairstyles, etc. — using mathematical / computational ideas and
							practices situated in their cultural context.
						</Text>
						<Text mt={5}>
							When I have free time, I also freelance with small and local businesses to help update their website and
							increase their online presence. I also enjoy hiking, gaming, and 3D modeling.
						</Text>
						<Text my={5}>
							While my focus tends to be web development using React, Django, JavaScript, or Python, I am quick to learn
							new languages and welcome the challenge of tackling different projects outside of my "comfort zone". Have
							an idea of project and need help with bringing it to life? Want someone to create or update your online
							presence and help you increase your potential customer base? Hit me up!
						</Text>
					</Box>
					{profile && (
						// <Box w={{ base: "75%", md: "100%" }} display={{ base: "none", md: "flex" }}>
						// 	<Box
						// 		rounded={"lg"}
						// 		// mt={-12}
						// 		pos={"relative"}
						// 		height={"230px"}
						// 		_after={{
						// 			transition: "all .3s ease",
						// 			content: '""',
						// 			w: "full",
						// 			h: "full",
						// 			pos: "absolute",
						// 			top: 5,
						// 			left: 0,
						// 			backgroundImage: `url(${profile.url})`,
						// 			filter: "blur(15px)",
						// 			zIndex: -1,
						// 		}}>
						// 		{profile && <Image src={profile.url} />}
						// 	</Box>
						// </Box>

						<Box
							rounded={"lg"}
							// mt={-12}
							pos={"relative"}
							height={"230px"}>
							{profile && <Image src={profile.url} />}
						</Box>
					)}
				</Stack>
			</Center>
		</Box>
	);
}
