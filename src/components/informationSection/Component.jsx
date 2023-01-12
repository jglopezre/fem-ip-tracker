import { Form } from '../form/Component';
import { IpAddressDataCounter } from '../ipAddressDataCounter/Component';
import styles from './style.module.scss';

const { mainContainer } = styles;

export const InformationSection = ({ipAddressData, submitData }) => {
  
  return (
    <section className={ mainContainer }>
      <h1>IP Address Tracker</h1>
      <Form sendData={ submitData } isLoading={ ipAddressData.isLoading }/>
      <IpAddressDataCounter ipAddressData={ ipAddressData } />
    </section>
  )
}
