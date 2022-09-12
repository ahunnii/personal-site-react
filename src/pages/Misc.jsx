import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ConsolePage from "../components/ConsolePage";
import StatsPanel from "../components/StatsPanel.jsx";

export default function Misc() {
	return (
		<ConsolePage>
			<h3 className="pip-title">Misc</h3>
			<div className="pip-body">
				<ul className="options">
					<li className="active">
						<a href="#misc-1" data-toggle="tab">
							Backlight Color
						</a>
					</li>
					<li>
						<a href="#misc-2" data-toggle="tab">
							Where does it come from?
						</a>
					</li>
					<li>
						<a href="#misc-3" data-toggle="tab">
							Why do we use it?
						</a>
					</li>
				</ul>
				<div className="tab-content">
					<div className="info active tab-pane fade in" id="misc-1">
						<div className="post">
							<p>Select HUD / Backlight Color</p>
							<form className="colors" onChange="getColor();">
								<input id="b-amber" type="radio" name="colors" value="amber" defaultChecked />
								<label for="b-amber">Amber</label>
								<input id="b-red" type="radio" name="colors" value="red" />
								<label for="b-red">Red</label>
								<input id="b-green" type="radio" name="colors" value="green" />
								<label for="b-green">Green</label>
								<input id="b-blue" type="radio" name="colors" value="blue" />
								<label for="b-blue">Blue</label>
								<input id="b-white" type="radio" name="colors" value="white" />
								<label for="b-white">White</label>
								<input id="b-black" type="radio" name="colors" value="black" onChange="getColor();" />
								<label for="b-black">Science!</label>
							</form>
						</div>
					</div>

					<div className="info tab-pane fade" id="misc-2">
						<div className="post">
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
								Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
								Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
								Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
								undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
								Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
								theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
								sit amet..", comes from a line in section 1.10.32.
							</p>
							<p>
								The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
								Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
								exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
							</p>
						</div>
					</div>

					<div className="info tab-pane fade" id="misc-3">
						<div className="post">
							<p>
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
								search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
								evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
							</p>
						</div>
					</div>
				</div>
			</div>
		</ConsolePage>
	);
}
