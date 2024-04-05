import  styles from './Button.module.css'

const Button = ({isSecond, icon, text}) => {
  return (
      <button className= { isSecond ? styles.second_btn : styles.first_btn}>
        {icon}
        {text}
        </button>
  )
}

export default Button
