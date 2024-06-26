/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import { AdContainer } from './styles'
import '../../styles/index.css'

export function Advertising({
  topTitle,
  title,
  colorTitle,
  bottomTitle,
  bottomTitleValue,
  buttonText,
  buttonLink,
  adImage,
  adBackground,
  adImagePosition,
}) {
  if (adImagePosition === 'left') {
    adImagePosition = 'row-reverse'
  } else if (adImagePosition === 'right') {
    adImagePosition = 'row'
  }

  return (
    <AdContainer
      style={{
        backgroundImage: `url(${adBackground})`,
        flexDirection: `${adImagePosition}`,
      }}
    >
      <div className="text-container">
        <div className="text-content">
          <h2>{topTitle}</h2>
          <h1 style={{ color: `${colorTitle}` }}>{title}</h1>
          <h2>
            {bottomTitle} <b>{bottomTitleValue}</b>
          </h2>
        </div>
        <a href={buttonLink}>
          <input className="ad-button" type="button" value={buttonText} />
        </a>
      </div>
      <div className="image-container">
        <img className="image" src={adImage} />
      </div>
    </AdContainer>
  )
}
