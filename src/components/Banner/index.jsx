import { Container } from "./styles";
import BannerImg from "../../assets/images/banner.svg";

export function Banner() {
  return <Container style={{ backgroundImage: `url(${BannerImg})` }} />;
}
