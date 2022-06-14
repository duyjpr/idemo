import { Container } from "react-bootstrap";
import Plot from "react-plotly.js";
import { Link } from "react-router-dom";

export default function SectionPatents() {
	return (
		<Container>
			<nav>
				<Link to="/">Demo</Link>
			</nav>
			<main>
				<h2>Patents</h2>
				<p>Here is a long-winded explanation of patents to make up word count. Actually, maybe not.</p>

				<Plot
					data={[
						{
							type: "bar"
							, x: ["silk", "paper"]
							, y: [10, 100]
						}
					]}
					layout={{
						title: "Patents by material they are printed on"
					}}
					/>
			</main>
		</Container>
	);
}