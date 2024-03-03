import { BannerStyle } from "./styles"
import BannerImg from "../../assets/images/banner.svg"

export function Banner() {
  return (
    <BannerStyle>
        <img className="banner"
          src={BannerImg}
          alt="Banner contendo uma imagem promocional do game GTA 6"
        />
    </BannerStyle>
  )
}
