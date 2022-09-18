export default function Radio() {
	return (
		<div className="tab-pane fade in">
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
		</div>
	);
}
