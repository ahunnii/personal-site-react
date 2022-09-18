import { Box, Button, chakra, Flex, Image, ListItem, Progress, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub, FaGithubAlt, FaLaptopCode } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./ProjectDetails.scss";
export default function ProjectDetails({ title, description, tech, url, gitHub, thumbnail, setSelected }) {
	return (
		<div className="project-section">
			<div className="project-image">
				<a>
					<Image src={thumbnail.url} className="img" alt={thumbnail.description} />
				</a>
			</div>
			<div className="project-content">
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

					<div className="project-description">{description}</div>

					{tech.length && (
						<Stack className="project-tech-list" direction={"row"}>
							{tech.map((tech, i) => (
								<span key={i}>{tech}</span>
							))}
						</Stack>
					)}

					<Stack className="project-links" direction={"row"}>
						<a aria-label="GitHub Link" href={gitHub}>
							<FaGithub />
						</a>

						<a aria-label="External Link" className="external" href={url}>
							<FaExternalLinkAlt />
						</a>
					</Stack>

					<Button fontSize={"xl"} mt="5rem" onClick={() => setSelected(null)}>
						> Back to Projects
					</Button>
				</div>
			</div>
		</div>
	);
}
