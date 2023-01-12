import { useState } from 'react';
import styles from './style.module.scss'

const { formStyle } = styles

export const Form = ({sendData, isLoading}) => {
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
    <form onSubmit={ onSubmitData } className={ formStyle } style={{marginBottom: '2rem'}}>
      <input type="text"
        name="ip-address"
        placeholder="IP Address"
        value={ value }
        onChange={ handleValue }
      />
      <input type="submit" value="" disabled={ isLoading }/>
    </form>
  )
}
  

