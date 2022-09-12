import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ConsolePage from "../components/ConsolePage";
import StatsPanel from "../components/StatsPanel.jsx";
export default function Homepage() {
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
				<ul className="options">
					<li>
						<input type="radio" id="radio1" name="radio" />
						<label htmlFor="radio1">Brass Knuckles</label>
					</li>
					<li>
						<input type="radio" defaultChecked="checked" id="radio2" name="radio" />
						<label htmlFor="radio2">Hunting Rifle</label>
					</li>
					<li>
						<input type="radio" id="radio3" name="radio" />
						<label htmlFor="radio3">Long Fuse Dynamite (11)</label>
					</li>
					<li>
						<input type="radio" id="radio4" name="radio" />
						<label htmlFor="radio4">Plasma Pistol</label>
					</li>
				</ul>
				<StatsPanel />
			</div>
		</ConsolePage>
	);
}
