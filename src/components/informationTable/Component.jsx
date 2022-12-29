import styles from './style.module.scss';

const { mainContainer } = styles;
export const InformationTable = ({data}) => {
  
  return (
    <div className={ mainContainer }>
      <div>
        <h2>Ip Address</h2>
        <p>{ data. ipAddress }</p>
      </div>
      <div>
        <h2>Location</h2>
        <p>{ data.location }</p>
      </div>
      <div>
        <h2>Timezone</h2>
        <p>{ data.timeZone }</p>
      </div>
      <div>
        <h2>ISP</h2>
        <p>{ data.isp }</p>
      </div>
    </div>
  )
}
