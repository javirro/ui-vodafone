import './TextInputBox.css'

interface TextInputBoxProps {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  name: string
}
const TextInputBox = ({ label, type, value, onChange, placeholder, name }: TextInputBoxProps) => {
  return (
    <section className="input-box">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} />
    </section>
  )
}

export default TextInputBox
