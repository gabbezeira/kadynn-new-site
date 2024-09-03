import { BannerAdImage01, BannerBackground01 } from '@assets/images/banner-ad'

import { AccountsArea, Platforms, Advertising } from '@components'

export function Home() {
  return (
    <>
      <Advertising
        topTitle={'Quer ser milionário no GTA Online?'}
        title={'Nós upamos sua conta para você!'}
        colorTitle={'var(--primary-color)'}
        bottomTitle={'Os melhores valores do mercado, upagem a partir de '}
        bottomTitleValue={'R$100,00'}
        buttonText={'Veja os valores'}
        buttonLink={
          'https://wa.me/5567993441076?text=Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20upagem%20de%20contas!'
        }
        adImage={BannerAdImage01}
        adBackground={BannerBackground01}
        adImagePosition={'right'}
      />
      <AccountsArea />
      <Platforms />
    </>
  )
}
