import { getColor } from "../utils/colors";
export default function Misc() {
	return (
		<div className="tab-pane fade in">
			<h3 className="pip-title">Misc</h3>
			<div className="pip-body">
				<ul className="options">
					<li className="active">
						<a href="#misc-1" data-toggle="tab">
							Backlight Color
						</a>
					</li>
				</ul>
				<div className="tab-content">
					<div className="info active tab-pane fade in" id="misc-1">
						<div className="post">
							<p>Select HUD / Backlight Color</p>
							<form className="colors" onChange={() => getColor()}>
								<input id="b-amber" type="radio" name="colors" value="amber" />
								<label htmlFor="b-amber">Amber</label>
								<input id="b-red" type="radio" name="colors" value="red" />
								<label htmlFor="b-red">Red</label>
								<input id="b-green" type="radio" name="colors" value="green" />
								<label htmlFor="b-green">Green</label>
								<input id="b-blue" type="radio" name="colors" value="blue" />
								<label htmlFor="b-blue">Blue</label>
								<input id="b-white" type="radio" name="colors" value="white" />
								<label htmlFor="b-white">White</label>
								<input id="b-black" type="radio" name="colors" value="black" defaultChecked />
								<label htmlFor="b-black">Science!</label>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
