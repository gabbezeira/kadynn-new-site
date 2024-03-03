import { BannerStyle } from "./styles"
import BannerImg from "../../assets/images/banner.svg"

export function Banner() {
  return (
    <BannerStyle style={{backgroundImage: `url(${BannerImg})`}}/>
  )
}
