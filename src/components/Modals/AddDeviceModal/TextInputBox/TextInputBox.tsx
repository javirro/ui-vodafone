import './TextInputBox.css'

interface TextInputBoxProps {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  name: string
  min?: number
  max?: number
  step?: number
}

const TextInputBox = ({ label, type, value, onChange, placeholder, name, min, max, step }: TextInputBoxProps) => {
  return (
    <section className="input-box">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} min={min} max={max} step={step}/>
    </section>
  )
}

export default TextInputBox
