import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonTextarea,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { calculatorOutline } from "ionicons/icons";
import React, { useState } from "react";

const Sumadora: React.FC = () => {
  const [numero1, setNumero1] = useState<number>(0);
  const [numero2, setNumero2] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);

  const handleCalcular = () => {
    let error = false;
    if (isNaN(numero1) || numero1 === 0) {
      error = true;
      setNumero1(0);
    }
    if (isNaN(numero2) || numero2 === 0) {
      error = true;
      setNumero2(0);
    }
    if (error) {
      alert("Ambos campos son requeridos y deben ser números");
      return;
    }
    const suma = numero1 + numero2;
    setResultado(suma);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <h2>Sumadora</h2>
              <p>
                Esta es una aplicación que suma dos números. El resultado se
                muestra por pantalla.
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="">
          <IonRow>
            <IonCol>
              <IonTextarea
                label="Ingresa el primer numero a sumar"
                labelPlacement="floating"
                fill="solid"
                placeholder="Numero 1"
                required={true}
                errorText="Este campo es requerido y debe ser un número"
                onIonChange={(e) => setNumero1(parseInt(e.detail.value!))}
              ></IonTextarea>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="">
          <IonRow>
            <IonCol>
              <IonTextarea
                label="Ingresa el segundo numero a sumar"
                labelPlacement="floating"
                fill="solid"
                placeholder="Numero 2"
                required={true}
                errorText="Este campo es requerido y debe ser un número"
                onIonChange={(e) => setNumero2(parseInt(e.detail.value!))}
              ></IonTextarea>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonButton onClick={handleCalcular}>
                <IonIcon slot="end" icon={calculatorOutline}></IonIcon>
                Calcular
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonText>
                <h1>El resultado es: </h1>
                {resultado}
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Sumadora;
