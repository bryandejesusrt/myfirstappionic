import './ExploreContainer.css';


import React from 'react';
import { IonButton } from '@ionic/react';


//buttons
function Example() {
  return (
    <>
      <IonButton expand="block">Block</IonButton>
      <IonButton expand="full">Full</IonButton>
    </>
  );
}
 
//interface Component
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{name}</strong>
      <p>Explorar <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">Componentes Ionic</a></p>
      <IonButton expand="block">Siguiente</IonButton>
    </div>
      );
      
     
};

export default ExploreContainer;
