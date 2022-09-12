import { Box, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
export default function Navigation() {
	return (
		<TabList display={"flex"}>
			<Tab className="active">
				<span>Items</span>
			</Tab>
			<Tab>
				<span>Stats</span>
			</Tab>
			<Tab>
				<span>Quests</span>
			</Tab>
			<Tab>
				<span>Misc</span>
			</Tab>
			<Tab>
				<span>Radio</span>
			</Tab>
		</TabList>
	);
}
