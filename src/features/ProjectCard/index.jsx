import { Box, Center, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function ProjectCard({ thumbnail, title }) {
	console.log(thumbnail);

	return (
		<Center py={{ base: 6, md: 6, lg: 6 }}>
			<Box
				role={"group"}
				p={6}
				maxW={{ base: "100%", md: "330px" }}
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
					height={{ base: "150px", md: 175 }}
					_after={{
						transition: "all .3s ease",
						content: '""',
						w: "full",
						h: "full",
						pos: "absolute",
						top: 5,
						left: 0,
						backgroundImage: `url(${thumbnail.url})`,
						filter: "blur(8px)",
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
						height={{ base: "150px", md: 175 }}
						width={282}
						objectFit={"cover"}
						src={thumbnail.url}
						alt={thumbnail.description}
						_groupHover={{
							border: "3px solid ",
							borderWidth: "2px 0",
							transition: "all 0.2s ease",
						}}
					/>
				</Box>
				<Stack pt={8} align={"center"}>
					<Heading fontSize={{ base: "lg", md: "xl" }} fontFamily={"body"} fontWeight={500}>
						{title}
					</Heading>
				</Stack>
			</Box>
		</Center>
	);
}
