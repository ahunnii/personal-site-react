import { Link } from "@chakra-ui/react";

export default function Contact() {
	return (
		<div className="tab-pane fade in">
			<h3 className="pip-title">Contact</h3>
			<div className="pip-body">
				<ul className="options">
					<li className="active">
						<a href="#quest-1" data-toggle="tab">
							Contact Me
						</a>
					</li>
				</ul>
				<div className="tab-content">
					<div className="info tab-pane active fade in" id="quest-1">
						<div className="post">
							<p>
								So, I'm currently working on the form, so in the meantime, you can email me at{" "}
								<Link href="email:andrew.hunn2@outlook.com">andrew.hunn2@outlook.com</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
