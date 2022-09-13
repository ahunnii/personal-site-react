import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";
import ConsolePage from "../components/ConsolePage";
import StatsPanel from "../components/StatsPanel.jsx/index.jsx";
import projects from "../data/projects.json";
import { InfoPanel } from "../features/Jobs";
export default function Projects() {
	const [selected, setSelected] = useState();
	return (
		<ConsolePage>
			<h3 className="pip-title">Items</h3>
			<ul className="pip-head">
				<li>
					<b>Wg</b> 34/125
				</li>
				<li>
					<b>HP</b> 89/110
				</li>
				<li>
					<span className="fade-a">
						<b>DT</b> 21
					</span>
					<span className="fade-b">
						<b>DR</b> 11
					</span>
				</li>
				<li>
					<b>Caps</b> 1721
				</li>
			</ul>
			<div className="pip-body">
				<UnorderedList className="options">
					{projects &&
						projects.map((project) => (
							<ListItem key={project.title}>
								<input type="radio" id={`radio-${project.title}`} name="radio" onChange={() => setSelected(project)} />
								<label htmlFor={`radio-${project.title}`}>{project.title}</label>
							</ListItem>
						))}
				</UnorderedList>
				{selected && <InfoPanel {...selected} />}
			</div>
		</ConsolePage>
	);
}
