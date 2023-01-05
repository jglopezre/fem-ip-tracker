import { Form } from '../form/Component';
import { InformationTable } from '../informationTable/Component';
import styles from './style.module.scss';

const { mainContainer } = styles;

export const InformationSection = () => {
  const data = {
    ipAddress: '192.168.40.40',
    location: 'Brooklin NY',
    timeZone: 'UTC-5',
    isp: 'Fibertel'
  }
  return (
    <div className={ mainContainer }>
      <h1>IP Address Tracker</h1>
      <Form sendData={ console.log } />
      <InformationTable data={data} />
    </div>
  )
}
