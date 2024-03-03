/* eslint-disable no-unused-vars */
import { Body} from "./styles/styles"
import { BrowserRouter } from 'react-router-dom'

import AdImage01 from "./assets/images/banner-ad/banner01img.svg"
import AdImage02 from "./assets/images/banner-ad/banner02img.svg"
import Background01 from "./assets/images/banner-ad/banner01.svg"
import Background02 from "./assets/images/banner-ad/banner02.svg"

import { Menu, Banner, Contas, Plataformas, Advertising } from "./components/"
import Store from "./components/Store"

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Menu/>
      <Banner/>

      <Body>
        <Contas/>
        <Plataformas/>

        <Advertising
          topTitle={"Quer ser milionário no GTA Online?"}
          title={"Nós upamos sua conta para você!"}
          colorTitle={"var(--primary-color)"}
          bottomTitle={"Os melhores valores do mercado, upagem a partir de "}
          bottomTitleValue={"R$100,00"}
          buttonText={"Veja os valores"}
          buttonLink={"#"}
          adImage={AdImage01}
          adBackground={Background01}
        />

        <Store/>

        <Advertising
          title={"Códigos de 25 dígitos baratinhos!"}
          colorTitle={"var(--secondary-color)"}
          bottomTitle={"Key’s muito baratas para serem resgatas na sua conta pessoal"}
          buttonText={"Ver os jogos"}
          buttonLink={"#"}
          adImage={AdImage02}
          adBackground={Background02}
        />
      </Body>
    </BrowserRouter>
    </>
  )
}

