import { AspectRatio, chakra, Image, Text } from "@chakra-ui/react";
export default function InfoPanel({ title, brief, thumbnail, about, technologies, site, github }) {
	return (
		<div className="info">
			<div className="right-options" hidden>
				<a href="#" className="disabled">
					Maintain
				</a>
				<a href="#">Mod</a>
			</div>
			<div className="info-body">
				<ul className="info-table">
					<li className="vboy-wrap">
						<div className="item-icon" hidden>
							<span className="icon">
								<img className="filter" src="https://cybersandbox.ca/resources/556mm_round_icon.png" />
							</span>
							0
						</div>
						{/* <div className="vboy filter"></div> */}
						<div>
							<h3>{title}</h3>
							<chakra.h4 fontSize={"xs"}>{brief}</chakra.h4>
							<AspectRatio maxW="400px" ratio={16 / 9} my={2}>
								<Image src={thumbnail} alt="naruto" objectFit="cover" />
							</AspectRatio>

							<Text fontSize={"sm"} mt={3}>
								{about}
							</Text>
						</div>{" "}
					</li>
				</ul>

				<chakra.p className="extra" my={1}>
					<b>SITE</b> {site}
				</chakra.p>
				<chakra.p className="extra" my={1}>
					<b>GITHUB</b> <chakra.span fontSize={"sm"}>{github}</chakra.span>
				</chakra.p>

				<chakra.p className="extra" my={1}>
					<b>TECH</b>{" "}
					{technologies &&
						technologies.length > 0 &&
						technologies.map((technology, i) => (
							<span>
								{technology} {i < technologies.length - 1 ? "*" : ""}{" "}
							</span>
						))}
				</chakra.p>
			</div>
		</div>
	);
}
