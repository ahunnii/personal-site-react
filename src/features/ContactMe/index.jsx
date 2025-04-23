import {
	AspectRatio,
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	IconButton,
	Image,
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
import { send } from "emailjs-com";
import React, { useState } from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { toast } from "sonner";
import LoadingIndicator from "../LoadingIndicator";
export default function ContactMe() {
	const { hasCopied, onCopy } = useClipboard("example@example.com");

	const [toSend, setToSend] = React.useState({
		from_name: "",
		message: "",
		reply_to: "",
	});

	const [sent, setHasSent] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const [isError, setIsError] = React.useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		send("service_6r9ato8", "template_bskrn5y", toSend, "jtrwhfw0pI2zhHcuA")
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				setHasSent(true);
				setIsLoading(false);
				// toast.success("Email sent successfully");
			})
			.catch((err) => {
				console.log("FAILED...", err);
				// toast.error("Email sent failed");
				setHasSent(false);
				setIsLoading(false);
				setIsError(true);
			});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};
	return (
		<Box borderRadius="lg" m={{ base: 0, md: 16, lg: 10 }} p={{ base: 0, lg: 16 }} width={"100%"}>
			<LoadingIndicator isLoading={isLoading} />
			{sent && (
				<Box display="flex" justifyContent={"center"} flexDir={"column"}>
					{/* <AspectRatio maxW="400px" ratio={4 / 3} my="auto">
						<Image src="https://media4.giphy.com/media/YqMF4AHYlGEWk/giphy.gif?cid=ecf05e474exmm19jg0hthhvs3z5mw36507adjb03g8318hyy&rid=giphy.gif&ct=g" />
					</AspectRatio> */}
					<Heading textAlign={"center"}>
						{isError ? "There was an issue sending your email. Please try again later!" : "Your email has been sent!"}
					</Heading>
				</Box>
			)}
			{!sent && !isLoading && (
				<Box>
					<Box bg="rgba(var(--alt), 0.3)" borderRadius="lg" p={{ base: 5, md: 8 }} shadow="base">
						<VStack spacing={5} as="form" onSubmit={onSubmit}>
							<FormControl isRequired>
								<FormLabel>Name</FormLabel>

								<InputGroup>
									<InputLeftElement children={<BsPerson />} />
									<Input
										type="text"
										name="to_name"
										placeholder="Your Name"
										value={toSend.to_name}
										onChange={handleChange}
									/>
								</InputGroup>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>Email</FormLabel>

								<InputGroup>
									<InputLeftElement children={<MdOutlineEmail />} />
									<Input
										type="email"
										name="reply_to"
										placeholder="Your Email"
										value={toSend.reply_to}
										onChange={handleChange}
									/>
								</InputGroup>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>Message</FormLabel>

								<Textarea
									name="message"
									placeholder="Your Message"
									rows={{ base: 4, md: 6 }}
									resize="none"
									value={toSend.message}
									onChange={handleChange}
								/>
							</FormControl>

							<Button
								colorScheme="blue"
								bg="blue.400"
								color="white"
								type="submit"
								_hover={{
									bg: "blue.500",
								}}
								isFullWidth>
								Send Message
							</Button>
						</VStack>
					</Box>
				</Box>
			)}
		</Box>
	);
}
