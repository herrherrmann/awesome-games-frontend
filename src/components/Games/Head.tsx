import Head from 'next/head';

export default function GamesHead() {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9b59b6" />
			<meta name="msapplication-TileColor" content="#9b59b6" />
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
