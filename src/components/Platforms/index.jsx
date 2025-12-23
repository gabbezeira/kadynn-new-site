import { PageTitle } from "@components/PageTitle";
import { useNavigate } from "react-router-dom";
import PlatformsMock from "@/mocks/platforms.json";
import { Card } from "./Card";
import { Container } from "./styles";

export function Platforms() {
	const navigate = useNavigate();

	const handleCardClick = (platform) => {
		const platformName = Array.isArray(platform) ? platform[0] : platform;
		navigate(`/accounts?platform=${encodeURIComponent(platformName)}`);
	};

	return (
		<Container>
			<div className="content">
				<PageTitle title="Contas por Plataforma" platformButtons="false" />
				<ul className="games-group">
					{PlatformsMock.map((item) => (
						<div key={item.id} onClick={() => handleCardClick(item.platform)}>
							<Card
								platformCardImage={item.image}
								platformCardAlt={item.imageAlt}
								platformCardTitle={item.platform}
							/>
						</div>
					))}
				</ul>
			</div>
		</Container>
	);
}
