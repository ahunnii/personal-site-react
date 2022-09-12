import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ConsolePage from "../components/ConsolePage";
import StatsPanel from "../components/StatsPanel.jsx";
export default function Stats() {
	return (
		<ConsolePage title={"Items"}>
			<h3 className="pip-title">Stats</h3>
			<ul className="pip-head">
				<li>
					<b>LVL</b> 11
				</li>
				<li>
					<b>HP</b> 89/110
				</li>
				<li>
					<b>AP</b> 38/40
				</li>
				<li>
					<b>XP</b> 73.8%
				</li>
			</ul>
			<div className="pip-body">
				<ul className="side-menu">
					<li className="active">
						<a href="#cnd" data-toggle="tab">
							CND
						</a>
					</li>
					<li>
						<a href="#rad" data-toggle="tab">
							RAD
						</a>
					</li>
					<li>
						<a href="#eff" data-toggle="tab">
							EFF
						</a>
					</li>
					<li className="disabled">
						<a href="#">H20</a>
					</li>
					<li className="disabled">
						<a href="#">FOD</a>
					</li>
					<li className="disabled">
						<a href="#">SLP</a>
					</li>
				</ul>
				<div className="tab-content">
					<div className="tab-pane fade in active" id="cnd">
						<div className="stats-page">
							<h4>Condition</h4>

							<div className="right-options">
								<a href="#">(4) Stimpak</a>
								<a href="#" className="disabled">
									(0) Doctor's Bag
								</a>
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="rad">
						<div className="stats-page">
							<h4>Radiation</h4>
							<ul>
								<li>No data.</li>
							</ul>
						</div>
					</div>
					<div className="tab-pane fade" id="eff">
						<div className="stats-page">
							<h4>Effects</h4>
							<ul>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
								<li>No data.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</ConsolePage>
	);
}
