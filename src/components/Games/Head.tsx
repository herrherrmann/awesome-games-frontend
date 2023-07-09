import Head from 'next/head';

export default function GamesHead() {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="favicon.ico" />
			<link rel="apple-touch-icon" href="favicon_192.png" />
			<link rel="manifest" href="manifest.json" />
			<meta name="theme-color" content="#9b59b6" />
			<meta property="og:site_name" content="Awesome Multiplayer Games" />
			<meta property="og:title" content="Awesome Multiplayer Games" />
			<meta property="og:url" content="https://multiplayer.page" />
			<meta
				property="og:description"
				content="A list of awesome multiplayer games for your next couch session or LAN party."
			/>
			<meta
				property="description"
				content="A list of awesome multiplayer games for your next couch session or LAN party."
			/>
			<title>Awesome Multiplayer Games</title>
		</Head>
	);
}
