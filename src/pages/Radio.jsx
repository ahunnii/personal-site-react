import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ConsolePage from "../components/ConsolePage";
import StatsPanel from "../components/StatsPanel.jsx";

export default function Radio() {
	return (
		<ConsolePage>
			<h3 className="pip-title">Radio</h3>
			<div className="pip-body">
				<ul className="options">
					<li>
						<input type="checkbox" id="check" defaultChecked />
						<label htmlFor="check">00_default</label>
					</li>
					<li className="disabled">
						<label>//Null</label>
					</li>
					<li className="disabled">
						<label>//Null</label>
					</li>
				</ul>
				<div className="info">
					<div className="post">No data.</div>
				</div>
			</div>
		</ConsolePage>
	);
}
