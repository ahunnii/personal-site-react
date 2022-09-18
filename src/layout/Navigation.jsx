import { Box, chakra, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
export default function Navigation() {
	return (
		<TabList className="pip-foot" border={0}>
			<span>
				<Tab className="pip-nav-btn" _selected={{ outline: " 2px solid currentColor" }} p={0} w={"100%"}>
					Main
				</Tab>{" "}
			</span>
			<span>
				<Tab className="pip-nav-btn" _selected={{ outline: " 2px solid currentColor" }} p={0} w={"100%"}>
					Projects
				</Tab>{" "}
			</span>

			<span>
				<Tab className="pip-nav-btn" _selected={{ outline: " 2px solid currentColor" }} p={0} w={"100%"}>
					About
				</Tab>
			</span>
			<span>
				<Tab className="pip-nav-btn" _selected={{ outline: " 2px solid currentColor" }} p={0} w={"100%"}>
					Contact
				</Tab>
			</span>
			<chakra.span>
				<Tab className="pip-nav-btn" _selected={{ outline: " 2px solid currentColor" }} p={0} w={"100%"}>
					Misc
				</Tab>
			</chakra.span>
		</TabList>
	);
}
