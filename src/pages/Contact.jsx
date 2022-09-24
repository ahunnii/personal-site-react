import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Stack,
	Textarea,
	Tooltip,
	useClipboard,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import ContactMe from "../features/ContactMe";

export default function Contact() {
	const { hasCopied, onCopy } = useClipboard("andrew.hunn2@outlook.com");
	return (
		<Box className="tab-pane fade in" h={{ base: "100%", md: "100%" }}>
			<h3 className="pip-title">Contact</h3>
			<Box className="pip-body" w={"100%"} h={{ base: "100%", md: "100%" }}>
				<Stack
					align="center"
					justify="space-around"
					direction={{ base: "row", md: "column" }}
					className="side-menu"
					w={{ base: "100%", md: "60px" }}
					position={{ base: "relative", md: "fixed" }}>
					<Tooltip label={hasCopied ? "Email Copied!" : "Copy Email"} closeOnClick={false} hasArrow>
						<IconButton
							aria-label="email"
							variant="ghost"
							size="lg"
							fontSize="3xl"
							icon={<MdEmail />}
							_hover={{
								bg: "blue.500",
								color: useColorModeValue("white", "gray.700"),
							}}
							onClick={onCopy}
							isRound
						/>
					</Tooltip>

					<Link href="https://github.com/ahunnii" className={"social-icon"}>
						<IconButton
							aria-label="github"
							variant="ghost"
							size="lg"
							fontSize="3xl"
							icon={<BsGithub />}
							_hover={{
								bg: "blue.500",
								color: useColorModeValue("white", "gray.700"),
							}}
							isRound
						/>
					</Link>
					{/* 
					<Link href="#" className={"social-icon"}>
						<IconButton
							aria-label="twitter"
							variant="ghost"
							size="lg"
							icon={<BsTwitter size="28px" />}
							_hover={{
								bg: "blue.500",
								color: useColorModeValue("white", "gray.700"),
							}}
							isRound
						/>
					</Link> */}

					<Link href="https://www.linkedin.com/in/ahunnii/" className={"social-icon"}>
						<IconButton
							aria-label="linkedin"
							variant="ghost"
							size="lg"
							icon={<BsLinkedin size="28px" />}
							_hover={{
								bg: "blue.500",
								color: useColorModeValue("white", "gray.700"),
							}}
							isRound
						/>
					</Link>
				</Stack>

				<Box className="stats-page" h={{ base: "100%", md: "100%" }}>
					<Center h={{ base: "90%", md: "100%" }}>
						<ContactMe />
					</Center>
				</Box>
			</Box>
		</Box>
	);
}
