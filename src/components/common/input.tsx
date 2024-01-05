import { useEffect, useState } from 'react'

interface NumberInput {
  type: 'number'
  value: number
  onChange: (value: number) => void
}

interface StringInput {
  type: 'string'
  value: string
  onChange: (value: string) => void
}

type Props = {
  label: string
} & (NumberInput | StringInput)

export function Input ({
  label,
  type,
  value,
  onChange
}: Props) {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <label className=''>
      <span>{label}</span>
      <input
        type={type}
        value={inputValue}
        onChange={event => {
          const value = event.target.value
          if (type === 'number') {
            const parsedValue = Number(value)
            setInputValue(parsedValue)
            onChange(parsedValue)
            return
          }

          setInputValue(value)
          onChange(value)
        }}
        className='p-2 bg-gray-800 rounded'
      />
    </label>
  )
}
