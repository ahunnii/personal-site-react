import {
	Box,
	Button,
	chakra,
	Flex,
	Image,
	Link,
	ListItem,
	Progress,
	Stack,
	Text,
	UnorderedList,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub, FaGithubAlt, FaLaptopCode } from "react-icons/fa";
import { IoCaretBack } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import "./ProjectDetails.scss";
export default function ProjectDetails({ title, description, tech, url, gitHub, thumbnail, setSelected }) {
	return (
		<Box className="project-section" w={"100%"}>
			<div className="project-image">
				<Link href={url}>
					<Image
						src={thumbnail.url}
						className="img"
						alt={thumbnail.description}
						_hover={{
							border: "3px solid ",
							borderWidth: "2px 0",
							transition: "all 0.2s ease",
						}}
					/>
				</Link>
			</div>
			<Box className="project-content" w={"100%"}>
				<div>
					<p className="project-overline">Featured Project</p>

					<h3 className="project-title">
						<a>
							{" "}
							<Typewriter
								onInit={(typewriter) => {
									typewriter.typeString(title).start();
								}}
							/>
						</a>
					</h3>

					<Box className="project-description" w={"100%"} fontSize={{ base: "sm", md: "lg" }}>
						{description}
					</Box>

					{tech.length && (
						<Wrap className="project-tech-list" direction={"row"}>
							{tech.map((item, i) => (
								<WrapItem key={i}>
									{item} {i < tech.length - 1 && "*"}
								</WrapItem>
							))}
						</Wrap>
					)}

					<Stack className="project-links" direction={"row"} mt={3} fontSize={"xl"} w={"100%"}>
						<Link aria-label="GitHub Link" href={gitHub} p={3}>
							<FaGithub />
						</Link>

						<Link aria-label="External Link" className="external" href={url} p={3}>
							<FaExternalLinkAlt />
						</Link>
					</Stack>

					<Button mt={5} onClick={() => setSelected(null)} w={{ base: "100%", md: "auto" }}>
						<Box mr={2}>
							{" "}
							<IoCaretBack />
						</Box>{" "}
						Back to Projects
					</Button>
				</div>
			</Box>
		</Box>
	);
}
