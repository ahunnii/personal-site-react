import { Box, chakra, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FaCog, FaHome, FaTh, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Navigation() {
	return (
		<TabList className="pip-foot" border={0}>
			<chakra.span pb={{ base: "2.75rem", md: 0 }} h={"100%"}>
				<Tab
					className="pip-nav-btn"
					_selected={{ outline: " 2px solid currentColor", outlineOffset: "-1px" }}
					p={2}
					w={"100%"}
					display={"inline-flex"}
					flexDirection="column"
					fontSize={{ base: "0.75rem", md: "16px" }}>
					<FaHome />
					Home
				</Tab>{" "}
			</chakra.span>
			<chakra.span h={"100%"} pb={{ base: "2.75rem", md: 0 }}>
				<Tab
					className="pip-nav-btn"
					_selected={{ outline: " 2px solid currentColor", outlineOffset: "-1px" }}
					p={2}
					w={"100%"}
					display={"inline-flex"}
					flexDirection="column"
					fontSize={{ base: "0.75rem", md: "16px" }}>
					<FaTh />
					Projects
				</Tab>{" "}
			</chakra.span>

			<chakra.span h={"100%"} pb={{ base: "2.75rem", md: 0 }}>
				<Tab
					className="pip-nav-btn"
					_selected={{ outline: " 2px solid currentColor", outlineOffset: "-1px" }}
					p={2}
					w={"100%"}
					display={"inline-flex"}
					flexDirection="column"
					fontSize={{ base: "0.75rem", md: "16px" }}>
					<FaUserAlt />
					About
				</Tab>
			</chakra.span>
			<chakra.span h={"100%"} pb={{ base: "2.75rem", md: 0 }}>
				<Tab
					className="pip-nav-btn"
					_selected={{ outline: " 2px solid currentColor", outlineOffset: "-1px" }}
					pp={2}
					w={"100%"}
					display={"inline-flex"}
					flexDirection="column"
					fontSize={{ base: "0.75rem", md: "16px" }}>
					<MdEmail />
					Contact
				</Tab>
			</chakra.span>
			{/* <chakra.span>
				<Tab
					className="pip-nav-btn"
					_selected={{ outline: "2px solid currentColor" }}
					p={0}
					w={"100%"}
					display={"inline-flex"}
					flexDirection="column"
					fontSize={{ base: "0.75rem", md: "16px" }}>
					<FaCog />
					Misc
				</Tab>
			</chakra.span> */}
		</TabList>
	);
}
