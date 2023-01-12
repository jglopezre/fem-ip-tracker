import styles from './style.module.scss';

const { mainContainer } = styles;

export const IpAddressDataCounter = ({ipAddressData}) => {

  const { fetchedData, isLoading } = ipAddressData;
  
  /* const { ip, isp, location } = fetchedData;
  const { city, timezone } = location; */

  
  if (!isLoading) {
    return (
      <div className={ mainContainer }>
        <div>
          <h2>Ip Address</h2>
          <p>{ fetchedData.ip }</p>
        </div>
        <div>
          <h2>Location</h2>
          <p>{ fetchedData.location.city }</p>
        </div>
        <div>
          <h2>Timezone</h2>
          <p>{ fetchedData.location.timezone }</p>
        </div>
        <div>
          <h2>ISP</h2>
          <p>{ fetchedData.isp }</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className={ mainContainer }>
        <h1>Is Loading Now!!!</h1>
      </div>
    )
  }
}
