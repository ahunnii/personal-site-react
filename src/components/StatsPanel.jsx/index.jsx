export default function StatsPanel() {
	return (
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
	);
}
