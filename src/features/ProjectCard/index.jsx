import { Box, Center, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function ProjectCard({ thumbnail, title }) {
	return (
		<Center py={{ base: 6, md: 6, lg: 6 }}>
			<Box
				role={"group"}
				p={6}
				maxW={"330px"}
				w={"full"}
				// bg={useColorModeValue("white", "gray.800")}
				bg={"rgba(var(--alt), 0.3)"}
				boxShadow={"2xl"}
				rounded={"lg"}
				pos={"relative"}
				zIndex={1}>
				<Box
					rounded={"lg"}
					mt={-12}
					pos={"relative"}
					height={"230px"}
					_after={{
						transition: "all .3s ease",
						content: '""',
						w: "full",
						h: "full",
						pos: "absolute",
						top: 5,
						left: 0,
						backgroundImage: `url(${thumbnail.url})`,
						filter: "blur(15px)",
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: "blur(10px)",
						},
					}}>
					<Image
						rounded={"lg"}
						borderColor={"rgba(var(--alt), 0.3)"}
						height={230}
						width={282}
						objectFit={"cover"}
						src={thumbnail.url}
						_groupHover={{
							border: "3px solid ",
							borderWidth: "2px 0",
							transition: "all 0.2s ease",
						}}
					/>
				</Box>
				<Stack pt={10} align={"center"}>
					<Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
						{title}
					</Heading>
				</Stack>
			</Box>
		</Center>
	);
}
