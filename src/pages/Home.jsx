import {
  BannerAdImage01,
  BannerAdImage02,
  BannerBackground01,
  BannerBackground02,
} from '@assets/images/banner-ad'

import {
  AccountsArea,
  Platforms,
  Advertising,
  Store,
  KeyStore,
} from '@components'

export function Home() {
  return (
    <>
      <AccountsArea />
      <Platforms />
      <Advertising
        topTitle={'Quer ser milionário no GTA Online?'}
        title={'Nós upamos sua conta para você!'}
        colorTitle={'var(--primary-color)'}
        bottomTitle={'Os melhores valores do mercado, upagem a partir de '}
        bottomTitleValue={'R$100,00'}
        buttonText={'Veja os valores'}
        buttonLink={'#'}
        adImage={BannerAdImage01}
        adBackground={BannerBackground01}
        adImagePosition={'right'}
      />
      <Store />
      <Advertising
        title={'Códigos de 25 dígitos baratinhos!'}
        colorTitle={'var(--secondary-color)'}
        bottomTitle={
          'Key’s muito baratas para serem resgatas na sua conta pessoal'
        }
        buttonText={'Ver os jogos'}
        buttonLink={'#'}
        adImage={BannerAdImage02}
        adBackground={BannerBackground02}
      />
      <KeyStore />
    </>
  )
}
