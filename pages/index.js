import Head from 'next/head';
import Visualizer from '../page-components/Visualizer';

export default function Home() {
	return (
		<div style={{ margin: 24 }}>
			<Head>
				<title>Insertion sort visualizer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h3>
					Insertion sort visualizer
				</h3>
				<Visualizer />
			</main>

		</div>
	);
}
