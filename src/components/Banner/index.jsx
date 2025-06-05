import BannerImg from "@assets/images/ssss.jpg";
import { Container } from "./styles";

export function Banner() {
	return <Container style={{ backgroundImage: `url(${BannerImg})` }} />;
}
