import { Box, Image, Stack, Text } from "@chakra-ui/react";

export default function About({ profile }) {
	return (
		<div className="tab-pane fade in" title={"Items"}>
			<h3 className="pip-title">ABOUT</h3>
			<ul className="pip-head">
				<li>
					<b>LVL</b> 27
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
						<a href="#cnd">SUM</a>
					</li>
					<li className="disabled">
						<a href="#rad">RAD</a>
					</li>
					<li className="disabled">
						<a href="#eff">EFF</a>
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
							{/* <h4>Summary</h4> */}

							<div className="right-options">
								<a href="#">(4) Stimpak</a>
								<a href="#" className="disabled">
									(0) Doctor's Bag
								</a>
							</div>

							<Stack direction={"row"} align="center">
								<Box maxW={"75%"}>
									<Text mt={20}> Hi, my name is Andrew Hunn</Text>
									<Text mt={5}>
										Nice to e-meet you! Before you scroll to the projects, I wanted to take this opportunity to tell you
										a bit about myself.
									</Text>
									<Text mt={5}>
										I graduated in 2018 with a bachelors in Computer Science at Eastern Michigan University. For the
										past four years, I have been working as a Software Developer at the University of Michigan as part
										of a research team. The research involves the idea of Culturally Situated Design Tools (CSDTs),
										which are a collection of web-based applications that allow students to create simulations of
										cultural arts — Native American beadwork, African American cornrow hairstyles, etc. — using
										mathematical / computational ideas and practices situated in their cultural context.
									</Text>
									<Text mt={5}>
										When I have free time, I also freelance with small and local businesses to help update their website
										and increase their online presence. I also enjoy hiking, gaming, and 3D modeling.
									</Text>
									<Text mt={5}>
										While my focus tends to be web development using React, Django, JavaScript, or Python, I am quick to
										learn new languages and welcome the challenge of tackling different projects outside of my "comfort
										zone". Have an idea of project and need help with bringing it to life? Want someone to create or
										update your online presence and help you increase your potential customer base? Hit me up!
									</Text>
								</Box>
								{profile && (
									<Box>
										<Box
											rounded={"lg"}
											// mt={-12}
											pos={"relative"}
											height={"230px"}
											_after={{
												transition: "all .3s ease",
												content: '""',
												w: "full",
												h: "full",
												pos: "absolute",
												top: 5,
												left: 0,
												backgroundImage: `url(${profile.url})`,
												filter: "blur(15px)",
												zIndex: -1,
											}}>
											{profile && <Image src={profile.url} />}
										</Box>
									</Box>
								)}
							</Stack>
						</div>
					</div>
					{/* <div className="tab-pane fade" id="rad">
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
					</div> */}
				</div>
			</div>
		</div>
	);
}
