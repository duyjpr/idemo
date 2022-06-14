import { Container } from "react-bootstrap";
import Plot from "react-plotly.js";
import { Link } from "react-router-dom";

export default function SectionEntries() {
	return (
		<Container>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<main>
				<h2>Entries</h2>
				<p>How friendly a business is toward pets is a measure of how open-minded its owners are. This has been statistically proven to correlate with innovation, to standards commonly accepted in news articles.</p>

				<Plot
					data={[
						{
							type: "pie"
							, values: [10, 100]
							, labels: ["Small pet owned", "No pets allowed"]
						}
					]}
					layout={{
						title: "Businesses entries by small dogs"
					}}
					/>
			</main>
		</Container>
	);
}