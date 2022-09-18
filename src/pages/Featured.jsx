import { Box, Center, chakra, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

import { ProjectCard, ProjectDetails, Stats } from "../features";

export default function Featured({ projects }) {
	const [selected, setSelected] = useState(null);

	return (
		<Box className="tab-pane fade in" width={"100%"} h="100%">
			<chakra.div className="tab-pane fade in" h="100%">
				<h3 className="pip-title">Featured</h3>
				<Stats />
				<chakra.div className="stats-page" w={"100%"}>
					<h4>Select a project to view</h4>

					<div className="right-options">
						<a href="#" className="disabled">
							(4) View All
						</a>
					</div>
				</chakra.div>

				<Center w={"100%"} h="100%" className="pip-body">
					{!selected && (
						<SimpleGrid minChildWidth="250px" spacing={10} w="100%">
							{projects && (
								<>
									{projects.map((project) => (
										<Box onClick={() => setSelected(project)} my={5}>
											<ProjectCard {...project} />
										</Box>
									))}
								</>
							)}{" "}
						</SimpleGrid>
					)}

					{selected && (
						<chakra.div className="pip-body">
							<ProjectDetails {...selected} setSelected={setSelected} />
						</chakra.div>
					)}
				</Center>
			</chakra.div>
		</Box>
	);
}
