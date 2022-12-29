import { useState } from 'react';
import styles from './style.module.scss'

const { formStyle, submitButton, inputField } = styles

export const Form = ({sendData}) => {
  const [value, setValue] = useState("");

  const handleValue = ({target}) => {
    
    setValue(target.value);
  }

  const onSubmitData = (elem) => {
    elem.preventDefault();
    sendData(value);
    setValue("");
  }

  return (
    <form onSubmit={ onSubmitData } className={ formStyle }>
      <input type="text"
        name="ip-address"
        placeholder="IP Address"
        value={ value }
        onChange={ handleValue }
      />
      <input type="submit" value="" />
    </form>
  )
}
  

