import { Box, Center, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

import { ProjectCard, ProjectDetails, Stats } from "../features";

export default function Featured({ projects }) {
	const [selected, setSelected] = useState(null);

	return (
		<Box
			className="tab-pane fade in"
			width={"100%"}
			h="100%"
			display={"inline-flex"}
			flexDir={"column"}
			justifyContent={"center"}>
			<chakra.div className="tab-pane fade in" h="90%">
				<h3 className="pip-title">Projects</h3>
				<Stats />
				{/* <chakra.div className="stats-page" w={"100%"} pt={{ base: 20, md: 0 }}>
					<div className="right-options">
						<a href="#" className="disabled">
							(4) View All
						</a>
					</div>
				</chakra.div> */}

				<Center w={"100%"} h={{ base: "100%", md: "100%" }} className="pip-body" pt={{ base: 10, md: 0 }}>
					{/* <h4>Select a project to view</h4> */}
					{!selected && (
						<SimpleGrid
							columns={{ base: 1, md: 2, lg: 3 }}
							spacing={{ base: 0, md: 2 }}
							w={"100%"}
							h={{ base: "100%", md: "75%", lg: "100%" }}
							overflowY={{ base: "scroll" }}>
							{projects && (
								<>
									{projects.map((project) => (
										<Box
											onClick={() => setSelected(project)}
											my={{ base: 0, md: 0 }}
											display={"inline-flex"}
											justifyContent={"center"}>
											<ProjectCard {...project} />
										</Box>
									))}
								</>
							)}{" "}
						</SimpleGrid>
					)}

					{selected && (
						<chakra.div
							className="pip-body"
							pt={{ base: 5, md: 0 }}
							h={{ base: "100%", md: "auto" }}
							overflowY={"scroll"}>
							<ProjectDetails {...selected} setSelected={setSelected} />
						</chakra.div>
					)}
				</Center>
			</chakra.div>
		</Box>
	);
}
