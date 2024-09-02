import { Container } from './styles'
import { X, Download, Earth } from 'lucide-react'

export function VideoModal({ isOpen, setOpenState }) {
  const handleClose = () => setOpenState(false)

  if (!isOpen) {
    return null
  }

  return (
    <Container>
      <div className="modal">
        <div className="modalTop">
          <p className="modalTitle">Como resgatar o jogo na sua conta</p>
          <X
            className="closeIcon"
            onClick={handleClose}
            aria-label="Fechar modal"
          />
        </div>
        <iframe
          className="modalVideo"
          src="https://www.youtube.com/embed/BBigvOUEQ7g?si=v_g3lguhUiDf8_ib"
          title="Tutorial de resgate de jogo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="modalButtons">
          <a
            target="_blank"
            href="https://www.tunnelbear.com/"
            className="button"
            rel="noreferrer"
            aria-label="Abrir TunnelBear"
          >
            <Download />
            TunnelBear
          </a>
          <a
            target="_blank"
            href="https://redeem.microsoft.com/"
            className="button outlineButton"
            rel="noreferrer"
            aria-label="Abrir Redeem"
          >
            <Earth />
            Redeem
          </a>
        </div>
      </div>
    </Container>
  )
}
