import { useState } from 'react'
import DragIcon from '@/assets/DragIcon'
import LinkIcon from '@/assets/LinkIcon'
import Select from './select'
import { generateMatchExp } from '@/lib/urlValidator'

export default function EditableLinks({
  index,
  id,
  linkUrl,
  platform,
  onLinkChange,
  onPlatformChange,
  onRemove,
  isDragging,
  initialTop
}: {
  index: number
  id: string
  linkUrl: string
  platform: string
  onLinkChange: (id: string, value: string) => void
  onPlatformChange: (id: string, newPlatform: string) => void
  onRemove: (id: string) => void
  isDragging: boolean
  initialTop?: string
}) {
  const [localUrl, setLocalUrl] = useState(linkUrl)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalUrl(e.target.value)
    onLinkChange(id, e.target.value)
  }

  return (
    <div
      style={{
        top: initialTop || '',
        opacity: isDragging ? '0.3' : ''
      }}
      className="link-wrapper"
    >
      <div className="link-head">
        <button
          className="drag-btn"
          onMouseDown={() => {
            // Handle drag start (implementation not shown)
          }}
        >
          <DragIcon />
        </button>
        <span>Link #{index + 1}</span>
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>

      <div className="link-inputs">
        <Select
          selectedPlatform={platform}
          changePlatform={(newPlatform) => onPlatformChange(id, newPlatform)}
        />
        <label htmlFor={`link-${id}`}>
          <LinkIcon />
          <span>Link</span>
          <input
            type="text"
            id={`link-${id}`}
            placeholder={`e.g. ${generateMatchExp(platform)}johnappleseed`}
            value={localUrl}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  )
}
