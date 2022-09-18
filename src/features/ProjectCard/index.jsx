import { Box, Image } from "@chakra-ui/react";

export default function ProjectCard({ thumbnail, title }) {
	const IMAGE =
		"https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

	return (
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
					filter: "blur(20px)",
				},
			}}>
			<Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={thumbnail.url} />
		</Box>
	);
}
