import { Box, Button, chakra, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

import Fallout from "./pages/Fallout";

import Professional from "./pages/Professional";

function App() {
	const [fallout, setFallout] = useState(true);

	return (
		<div className={fallout ? "fallout" : ""}>
			{fallout && <Fallout />}
			{!fallout && <Professional />}
			{/* <Button onClick={() => setFallout(!fallout)}>Toggle theme</Button> */}
		</div>
	);
}

export default App;
