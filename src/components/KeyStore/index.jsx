import { useState } from 'react'
import { Container } from './styles'
import { PageTitle } from '@components/PageTitle'

import { VideoModal } from './KeyVideoModal'
import { KeyCard } from './KeyCard'

import { KeySquare } from 'lucide-react'
import GamesKeys from '@/mocks/keys.json'

export function KeyStore() {
  const [open, setOpen] = useState(false)
  return (
    <Container id="games">
      <PageTitle title="Compre seu jogo conosco" platformButtons="false" />

      <div className="keysGroup">
        {GamesKeys.map((item) => (
          <div key={item.id}>
            <KeyCard
              keyImage={item.image}
              keyTitle={item.title}
              keyPlatform={item.platform}
              keyLocate={item.locate}
              keyPrice={item.price}
            />
          </div>
        ))}

        <div className="keysFooter">
          <div className="aspects">
            <p className="first">
              <KeySquare className="icon" />
              <strong>Chave Digital</strong> Esta é uma edição digital do
              produto (CD-KEY)
            </p>

            <p className="second">
              <KeySquare className="icon" />
              <strong>Ativação</strong> Para ativar a key você deve resgatar ela
              no site
              <a
                target="_blank"
                href="https://ww.redeem.microsoft.com"
                rel="noreferrer"
              >
                redeem.microsoft.com
              </a>
              utilizando uma<a href="https://www.tunnelbear.com">VPN</a> na
              região da key
            </p>
          </div>

          <button className="keysFooterButton" onClick={() => setOpen(!open)}>
            Assista ao vídeo ensinando á resgatar a key do jogo na sua conta
            pessoal
          </button>

          <VideoModal isOpen={open} setOpenState={setOpen} />
        </div>
      </div>
    </Container>
  )
}
