/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { X, Download, Earth } from "lucide-react";

export function VideoModal({ isOpen, setOpenState }) {
  if (isOpen) {
    return (
      <Container>
        <div className="modal">
          <div className="modalTop">
            <p className="modalTitle">Como resgatar o jogo na sua conta</p>
            <X className="closeIcon" onClick={() => setOpenState(!isOpen)} />
          </div>
          <iframe
            className="modalVideo"
            src="https://www.youtube.com/embed/BBigvOUEQ7g?si=v_g3lguhUiDf8_ib"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="modalButtons">
            <a
              target="_blank"
              href="https://www.tunnelbear.com/"
              className="button"
            >
              <Download />
              TunnelBear
            </a>

            <a
              target="_blank"
              href="https://redeem.microsoft.com/"
              className="button outlineButton"
            >
              <Earth />
              Reedem
            </a>
          </div>
        </div>
      </Container>
    );
  } else {
    return <></>;
  }
}
