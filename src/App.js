import { Footer } from './components/footer/Component';
import styles from './app.module.scss';
import { useState } from 'react';
import { InformationSection } from './components/informationSection/Component';
import { MapSection } from './mapSection/Component';

const {mainContainer} = styles;

function App() {

  return (
    <div>
      <main className={ mainContainer }>
        <InformationSection />
        <MapSection />
      </main> 
      <Footer />
    </div>
    
  );
}

export default App;
