import React, { useContext, useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { api } from '@api'
import { NotificationContext } from '@context/NotificationContext'
import { Loader } from '@components/Loader'
import Select from 'react-select'
import Picker from 'emoji-picker-react'
import 'react-quill/dist/quill.snow.css'
import { Container } from './styles'

const gameOptions = [
  { value: 'Red Dead Redemption 2', label: 'Red Dead Redemption 2' },
  { value: 'GTA 5', label: 'GTA 5' },
  { value: 'Forza Horizon 4', label: 'Forza Horizon 4' },
  { value: 'Forza Horizon 5', label: 'Forza Horizon 5' },
]

const platformOptions = [
  { value: 'PS4', label: 'PS4' },
  { value: 'PS5', label: 'PS5' },
  { value: 'Xbox One', label: 'XBOX ONE' },
  { value: 'Xbox Series S|X', label: 'XBOX SERIES S|X' },
  { value: 'PC', label: 'PC' },
]

export function AccountRegister() {
  const [title, setTitle] = useState('')
  const [selectedGames, setSelectedGames] = useState(null)
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const emojiPickerRef = useRef(null)
  const { showSnackbar } = useContext(NotificationContext)
  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const formatDescription = (description) => {
    return description
      .split('\n')
      .map((line) => line.replace(/\s+/g, ' ').trim())
      .join('\n')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formattedDescription = formatDescription(description)

    const formData = {
      title,
      platform: selectedPlatforms.map((p) => p.value),
      game: selectedGames ? selectedGames.value : '',
      price,
      description: formattedDescription,
      image: imageUrl,
    }

    try {
      await api.post('/accounts', formData)
      showSnackbar('Conta Cadastrada!', 'success')
      navigate('/painel')
    } catch (error) {
      showSnackbar('Erro ao cadastrar conta:', error.message, 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleEmojiSelect = (emoji) => {
    setDescription(description + emoji.emoji)
  }

  const handleClickOutside = (event) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target)
    ) {
      setShowEmojiPicker(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Container>
      <h1 className="title">Cadastrar conta</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-section">
          <div className="input-area">
            <label className="label">Nome</label>
            <input
              className="input-box"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-area">
            <label className="label">Plataforma</label>
            <Select
              isMulti
              options={platformOptions}
              value={selectedPlatforms}
              onChange={setSelectedPlatforms}
              placeholder="Escolha a plataforma"
            />
          </div>
        </div>

        <div className="input-section">
          <div className="input-area">
            <label className="label">Preço</label>
            <input
              className="input-box"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="input-area">
            <label className="label">Jogo</label>
            <Select
              options={gameOptions}
              value={selectedGames}
              onChange={setSelectedGames}
              placeholder="Escolha o jogo"
            />
          </div>
        </div>

        <div className="input-section">
          <div className="input-area">
            <label className="label">Imagem URL</label>
            <input
              className="input-box"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        </div>

        <div className="input-section">
          <div className="input-area">
            <label className="label">Descrição</label>
            <div className="text-area-wrapper">
              <textarea
                className="text-area"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                type="button"
                className="emoji-button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                😀
              </button>
              {showEmojiPicker && (
                <div ref={emojiPickerRef}>
                  <Picker
                    onEmojiClick={handleEmojiSelect}
                    className="emoji-picker"
                    pickerStyle={{
                      position: 'absolute',
                      bottom: '3.75rem',
                      right: '0.625rem',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="input-section">
          <div className="input-area-button">
            <button type="submit" className="button" disabled={loading}>
              {loading ? <Loader size={28} /> : 'Cadastrar'}
            </button>
          </div>
        </div>
      </form>
    </Container>
  )
}
