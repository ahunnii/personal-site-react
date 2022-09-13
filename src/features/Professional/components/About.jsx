import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";

export default function About() {
	return (
		<Container maxW={"6xl"}>
			<Box>
				<Heading mb={4}>About Me</Heading>
				<Text>
					Nice to e-meet you! Before you scroll to the projects, I wanted to take this opportunity to tell you a bit
					about myself.
				</Text>
				<Text>
					I graduated in 2018 with a bachelors in Computer Science at Eastern Michigan University. For the past four
					years, I have been working as a Software Developer at the University of Michigan as part of a research team.
					The research involves the idea of Culturally Situated Design Tools (CSDTs), which are a collection of
					web-based applications that allow students to create simulations of cultural arts—Native American beadwork,
					African American cornrow hairstyles, etc.— using mathematical / computational ideas and practices situated in
					their cultural context.
				</Text>
				<Text>
					When I have free time, I also freelance with small and local businesses to help update their website and
					increase their online presence. I also enjoy hiking, gaming, and 3D modeling.
				</Text>
				<Text>
					While my focus tends to be web development using React, Django, JavaScript, or Python, I am quick to learn new
					languages and welcome the challenge of tackling different projects outside of my "comfort zone". Have an idea
					of project and need help with bringing it to life? Want someone to create or update your online presence and
					help you increase your potential customer base? Hit me up!
				</Text>
				<Image borderRadius="full" boxSize="150px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
				<Button size="lg" colorScheme="green" mt="24px">
					Contact Me
				</Button>
			</Box>
		</Container>
	);
}
