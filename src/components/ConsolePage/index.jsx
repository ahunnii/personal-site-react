export default function ConsolePage() {
	return (
		<div className="tab-pane fade in active" id="items">
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
				<div className="info">
					<div className="right-options">
						<a href="#" className="disabled">
							Maintain
						</a>
						<a href="#">Mod</a>
					</div>
					<div className="info-body">
						<ul className="info-table">
							<li className="vboy-wrap">
								<div className="item-icon">
									<span className="icon">
										<img className="filter" src="https://cybersandbox.ca/resources/556mm_round_icon.png" />
									</span>
									0
								</div>
								<div className="vboy filter"></div>
							</li>
							<li>
								<b>STR</b> 6
							</li>
							<li className="clear">
								<span className="fade-a">
									<b>DAM</b> 52
								</span>
								<span className="fade-b">
									<b>DPS</b> 49.3
								</span>
							</li>
							<li>
								<b>WG</b> 6.00
							</li>
							<li>
								<b>VAL</b> 2528
							</li>
							<li>
								<b>CND</b>{" "}
								<span className="condition">
									<span className="fill w-83"></span>
								</span>
							</li>
							<li className="span-2">.308 round (5/72)</li>
						</ul>
						<p className="extra">
							<b>MODS</b> Hunting Rifle Scope
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
