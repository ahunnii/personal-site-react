import { Box, Button, chakra, Heading, Stack, Text } from "@chakra-ui/react";

import { Stats } from "../features";

export default function Nameplate({ title, description, resume }) {
	return (
		<div className="tab-pane fade in">
			<h3 className="pip-title">Home</h3>

			<Stats />
			<Box className="pip-body">
				<Stack spacing={8} mx={"auto"} mt={"5rem"} maxW={"lg"} py={12} px={6}>
					<Stack align={"center"}>
						<Text fontSize={"md"} textAlign={"center"}>
							Hey, I'm
						</Text>
						<Heading fontSize={"4xl"} textAlign={"center"}>
							Andrew Hunn
						</Heading>
						<Text fontSize={"lg"} color={"gray.600"} textAlign={"center"}>
							<chakra.span className="fade-a">{title || "Full Stack Web Developer 💻 "}</chakra.span>{" "}
							<chakra.span className="fade-b">{"Taco Enthusiast 🌮"}</chakra.span>
						</Text>
						<Text textAlign={"center"} py={8}>
							{description || "Fueled by coffee and tacos. Let's make something cool together."}
						</Text>
						<Stack direction="row" spacing={2} align="center">
							<Button
								size={{ base: "sm", md: "md" }}
								onClick={() => {
									window.open("https://www.github.com/ahunnii", "_blank");
								}}>
								GitHub
							</Button>
							<Button
								size={{ base: "sm", md: "md" }}
								onClick={() => {
									window.open("https://linkedin.com/in/ahunnii", "_blank");
								}}>
								LinkedIn
							</Button>

							<Button
								size={{ base: "sm", md: "md" }}
								onClick={() => {
									window.open(resume || "https://resume.creddle.io/resume/gkym669urqb", "_blank");
								}}>
								Resume
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</div>
	);
}
