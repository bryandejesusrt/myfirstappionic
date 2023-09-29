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
import {
  languageOutline,
  logoTableau,
  tabletPortraitOutline,
} from "ionicons/icons";
import { useState } from "react";

const Tabla: React.FC = () => {
  const [numero, setNumero] = useState<number>();
  const [tabla, setTabla] = useState<number[]>([]);
  const [numeroTabla, setNumeroTabla] = useState<number>();

  const generarTabla = () => {
    if (numero) {
      const nuevaTabla = [];
      for (let i = 1; i <= 10; i++) {
        nuevaTabla.push(numero * i);
      }
      setTabla(nuevaTabla);
      setNumeroTabla(numero);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tabla</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h1>Tabla de multiplicación</h1>
          <p>
            Este pequeño aplicativo puedes introducir un número y te mostrara la
            tabla de multiplicar de ese número. Prueba la ya!📈.
          </p>
        </IonText>
        <IonTextarea
          label="Introducir el numero de la tabla de multiplicar del 1 al 20"
          labelPlacement="floating"
          fill="solid"
          placeholder="Numero que desea traducir"
          required={true}
          errorText="Este campo es requerido y debe ser un número"
          onIonChange={(e) => setNumero(parseInt(e.detail.value!))}
        ></IonTextarea>
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonButton onClick={generarTabla}>
                <IonIcon slot="end" icon={logoTableau}></IonIcon>
                Mostrar tabla
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonText>
                <h3>La tabla que eligió fue la tabla del: {numeroTabla}</h3>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-text-center">
          {tabla.map((valor, indice) => (
            <IonRow key={indice}>
              <IonCol>
                {numeroTabla} x {indice + 1} = {valor}
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Tabla;
