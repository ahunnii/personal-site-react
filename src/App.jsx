import { useState } from "react";
import "./App.css";
import ConsolePage from "./components/ConsolePage";

function App() {
	const [count, setCount] = useState(0);
	var r = document.querySelector(":root");
	var colors = document.getElementsByName("colors");
	function getColor() {
		for (i = 0; i < colors.length; i++) {
			if (colors[i].checked) r.className = colors[i].value;
		}
	}

	/*
  function pipAmber() {
    r.style.setProperty("--main", "255, 170, 60");
    r.style.setProperty("--alt", "120, 75, 20");
    r.className = "amber";
  }
  
  function pipRed() {
    r.style.setProperty("--main", "255,40,0");
    r.style.setProperty("--alt", "160,20,0");
    r.className = "red";
  }
  
  function pipGreen() {
    r.style.setProperty("--main", "0,230,50");
    r.style.setProperty("--alt", "0,160,30");
    r.className = "green";
  }
  
  function pipWhite() {
    r.style.setProperty("--main", "220,220,220");
    r.style.setProperty("--alt", "100,100,100");
    r.className = "white";
  }
  
  function pipBlack() {
    r.style.setProperty("--main", "200,220,250");
    r.style.setProperty("--alt", "90,100,150");
    r.className = "black";
  }*/

	/*-- This JS is just for the cursor. Definitely could have written something simpler/more efficient but this is mostly copied code. May revisit later. --*/

	let dots = [],
		mouse = {
			x: 0,
			y: 0,
		};

	let Dot = function () {
		this.x = 0;
		this.y = 0;
		this.node = (function () {
			let n = document.createElement("div");
			n.className = "cursor";
			document.body.appendChild(n);
			return n;
		})();
	};
	Dot.prototype.draw = function () {
		this.node.style.left = this.x + "px";
		this.node.style.top = this.y + "px";
	};

	for (let i = 0; i < 1; i++) {
		let d = new Dot();
		dots.push(d);
	}

	function draw() {
		let x = mouse.x,
			y = mouse.y;

		dots.forEach(function (dot, index, dots) {
			let nextDot = dots[index + 1] || dots[0];

			dot.x = x;
			dot.y = y;
			dot.draw();
			x += (nextDot.x - dot.x) * 0.4;
			y += (nextDot.y - dot.y) * 0.4;
		});
	}

	addEventListener("mousemove", function (event) {
		mouse.x = event.pageX;
		mouse.y = event.pageY;
	});

	function animate() {
		draw();
		requestAnimationFrame(animate);
	}

	animate();

	document.addEventListener("DOMContentLoaded", function () {
		var cursor = document.querySelector(".cursor");
		var links = document.querySelectorAll('a, button, label, input[type="button"], input[type="submit"]');
		var inputs = document.querySelectorAll("input, textarea");
		var showcur = document.querySelectorAll(".frame");

		var i = links.length;
		for (i = 0; i < links.length; i++) {
			links[i].addEventListener("mouseenter", addCursor);
			links[i].addEventListener("mouseleave", removeCursor);
		}

		var i = inputs.length;
		for (i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener("mouseenter", addInput);
			inputs[i].addEventListener("mouseleave", removeInput);
		}

		var i = showcur.length;
		for (i = 0; i < showcur.length; i++) {
			showcur[i].addEventListener("mouseenter", addShow);
			showcur[i].addEventListener("mouseleave", removeShow);
		}

		function addInput() {
			cursor.classList.add("cursor-input");
		}

		function removeInput() {
			cursor.classList.remove("cursor-input");
		}

		function addCursor() {
			cursor.classList.remove("cursor-default");
			cursor.classList.add("cursor-active");
		}

		function removeCursor() {
			cursor.classList.remove("cursor-active");
			cursor.classList.add("cursor-default");
		}

		function addShow() {
			cursor.classList.add("cursor-default");
		}

		function removeShow() {
			cursor.classList.remove("cursor-default");
		}
	});

	return (
		<div className="App">
			<div id="frame" className="frame">
				<div className="piece output container">
					<div className="pipboy">
						<ul className="pip-foot">
							<li className="active">
								<a href="#items" data-toggle="tab">
									Items
								</a>
							</li>
							<li>
								<a href="#stats" data-toggle="tab">
									Stats
								</a>
							</li>
							<li>
								<a href="#quests" data-toggle="tab">
									Quests
								</a>
							</li>
							<li>
								<a href="#misc" data-toggle="tab">
									Misc
								</a>
							</li>
							<li>
								<a href="#radio" data-toggle="tab">
									Radio
								</a>
							</li>
						</ul>

						<div className="tab-content">
							<ConsolePage />

							<div className="tab-pane fade" id="stats">
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
							</div>

							<div className="tab-pane fade" id="quests">
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
							</div>

							<div className="tab-pane fade" id="misc">
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
												<form className="colors" onChange={() => getColor()}>
													<input id="b-amber" type="radio" name="colors" value="amber" defaultChecked />
													<label htmlFor="b-amber">Amber</label>
													<input id="b-red" type="radio" name="colors" value="red" />
													<label htmlFor="b-red">Red</label>
													<input id="b-green" type="radio" name="colors" value="green" />
													<label htmlFor="b-green">Green</label>
													<input id="b-blue" type="radio" name="colors" value="blue" />
													<label htmlFor="b-blue">Blue</label>
													<input id="b-white" type="radio" name="colors" value="white" />
													<label htmlFor="b-white">White</label>
													<input id="b-black" type="radio" name="colors" value="black" onChange={() => getColor()} />
													<label htmlFor="b-black">Science!</label>
												</form>
											</div>
										</div>

										<div className="info tab-pane fade" id="misc-2">
											<div className="post">
												<p>
													Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
													classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
													Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
													words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
													classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
													1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
													Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
													the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
													line in section 1.10.32.
												</p>
												<p>
													The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
													interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
													also reproduced in their exact original form, accompanied by English versions from the 1914
													translation by H. Rackham.
												</p>
											</div>
										</div>

										<div className="info tab-pane fade" id="misc-3">
											<div className="post">
												<p>
													It is a long established fact that a reader will be distracted by the readable content of a
													page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
													normal distribution of letters, as opposed to using 'Content here, content here', making it
													look like readable English. Many desktop publishing packages and web page editors now use
													Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
													sites still in their infancy. Various versions have evolved over the years, sometimes by
													accident, sometimes on purpose (injected humour and the like).
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade" id="radio">
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
						</div>
					</div>

					<div className="piece glow noclick"></div>
					<div className="piece scanlines noclick"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
