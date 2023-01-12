import { Footer } from './components/footer/Component';
import styles from './app.module.scss';
import { InformationSection } from './components/informationSection/Component';
import { MapSection } from './components/mapSection/Component';
import { useFetch } from './hooks/useFetch';

const { mainContainer } = styles;


function App() {

  const [ trackedData, fetchData ] = useFetch('http://localhost:8080/ip_request/192.168.0.1');

  const onSubmit = (ip) => {
    fetchData(`http://localhost:8080/ip_request/${ip}`);
  }

  return (
    <div>
      <main className={ mainContainer }>
        <InformationSection ipAddressData={ trackedData }  submitData={ onSubmit }/>
        <MapSection  mapData={ trackedData }/>
      </main> 
      <Footer />
    </div>
    
  );
}

export default App;
