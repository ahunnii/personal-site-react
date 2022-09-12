import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ConsolePage from "../components/ConsolePage";
import StatsPanel from "../components/StatsPanel.jsx";

export default function Quests() {
	return (
		<ConsolePage>
			<h3 className="pip-title">Quests</h3>
			<div className="pip-body">
				<ul className="options">
					<li className="active">
						<a href="#quest-1" data-toggle="tab">
							Le Courier In Le Mojav
						</a>
					</li>
					<li>
						<a href="#quest-2" data-toggle="tab">
							comign soon. 2022.
						</a>
					</li>
					<li className="disabled">
						<label>//Null</label>
					</li>
				</ul>
				<div className="tab-content">
					<div className="info tab-pane active fade in" id="quest-1">
						<div className="post">
							<p>Who dat damn ghuy who shot me,,,, I ain't dead.... yet.... </p>
						</div>
					</div>

					<div className="info tab-pane fade" id="quest-2">
						<div className="post">
							<p>Fallput: Battle Royale</p>
						</div>
					</div>
				</div>
			</div>
		</ConsolePage>
	);
}
