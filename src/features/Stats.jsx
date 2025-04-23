import { Center, chakra, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import {
	AudioVisualizer,
	AudioVisualizerCommonProps,
	SpectrumVisualizer,
	SpectrumVisualizerTheme,
	WaveformVisualizer,
	WaveformVisualizerTheme,
} from "react-audio-visualizers";
import { FaCog, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Stats() {
	return (
		<UnorderedList className="pip-head" fontSize={{ base: "xs", md: "15px" }}>
			<ListItem>
				<Link href="https://github.com/ahunnii">
					<Center display={"inline-flex"} justifyContent="space-between" w={"100%"}>
						<chakra.b>
							<FaGithub />
						</chakra.b>{" "}
						ahunnii
					</Center>
				</Link>
			</ListItem>
			<ListItem>
				<Link href="https://www.linkedin.com/in/ahunnii/">
					<Center display={"inline-flex"} justifyContent="space-between" w={"100%"}>
						<chakra.b>
							<FaLinkedin />
						</chakra.b>{" "}
						ahunnii
					</Center>
				</Link>
			</ListItem>
		</UnorderedList>
	);
}
