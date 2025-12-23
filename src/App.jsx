import { Banner, Footer, Menu } from "@components";
import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";
import { Body, PageWrapper } from "./styles/styles";

export default function App() {
	const isDecember = new Date().getMonth() === 11;

	return (
		<PageWrapper>
			{isDecember && (
				<Snowfall
					snowflakeCount={120}
					style={{
						position: "fixed",
						width: "100vw",
						height: "100vh",
						pointerEvents: "none",
						zIndex: 9999,
					}}
				/>
			)}

			<Menu />
			<Banner />

			<Body>
				<Outlet />
			</Body>

			<Analytics />
			<Footer />
		</PageWrapper>
	);
}
