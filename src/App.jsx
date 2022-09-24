import { Box, Center, Flex, Stack, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Cursor } from "./features";

import { LoadingIndicator } from "./features";
import { Navigation } from "./layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Featured from "./pages/Featured";
import Misc from "./pages/Misc";
import Nameplate from "./pages/Nameplate";

import { getColor } from "./utils/colors";

import ApiService from "./services/api.service";

import "./App.css";

function App() {
	const [nameplateData, setNameplateData] = useState(null);
	const [featuredProjects, setFeaturedProjects] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		getColor("black");

		ApiService.getSiteData().then((data) => {
			setIsLoading(false);
			setNameplateData(data.sitedataCollection.items[0]);
		});

		ApiService.getProjectData().then((data) => {
			setFeaturedProjects(data.projectCollection.items);
		});
	}, []);

	return (
		<div className={"fallout"}>
			<>
				<Cursor />
				<Flex minH={"100vh"} align={"center"} justify={"center"}>
					<Box className="frame">
						<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
							<Box className="piece output " p={8} display={"inline-flex"} flexDir="column" justifyContent={"center"}>
								<Tabs className="pipboy" h={{ base: "85vh", md: "100%" }} w={"100%"}>
									<Navigation />
									<TabPanels className="tab-content">
										<TabPanel h={"100%"}>
											<Center h={"100%"}>
												<LoadingIndicator isLoading={isLoading} />
												{!isLoading && <Nameplate {...nameplateData} />}
											</Center>
										</TabPanel>
										<TabPanel h={"100%"}>
											<Featured projects={featuredProjects} />
										</TabPanel>
										<TabPanel>
											<About profile={nameplateData?.profile} />
										</TabPanel>
										<TabPanel h={{ base: "100%", md: "100%" }}>
											<Contact />
										</TabPanel>
										<TabPanel>
											<Misc />
										</TabPanel>
									</TabPanels>
								</Tabs>

								<div className="piece glow noclick"></div>
								<div className="piece scanlines noclick"></div>
							</Box>
						</Stack>
					</Box>
				</Flex>
			</>
		</div>
	);
}

export default App;
