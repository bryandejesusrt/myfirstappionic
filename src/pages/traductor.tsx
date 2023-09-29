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
import { languageOutline } from "ionicons/icons";
import { useState } from "react";

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<number>();
  const [resultado, setResultado] = useState<string>();

  function numeroALetras(numero: number): string {
    const unidades = [
      "",
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
    ];
    const decenas = [
      "",
      "diez",
      "veinte",
      "treinta",
      "cuarenta",
      "cincuenta",
      "sesenta",
      "setenta",
      "ochenta",
      "noventa",
    ];
    const especiales = [
      "",
      "once",
      "doce",
      "trece",
      "catorce",
      "quince",
      "dieciséis",
      "diecisiete",
      "dieciocho",
      "diecinueve",
    ];
    const centenas = [
      "",
      "ciento",
      "doscientos",
      "trescientos",
      "cuatrocientos",
      "quinientos",
      "seiscientos",
      "setecientos",
      "ochocientos",
      "novecientos",
    ];

    if (numero === 0) {
      return "cero";
    }

    if (numero < 0 || numero > 1000) {
      return "Número fuera de rango";
    }

    let letras = "";

    if (numero >= 100) {
      const centena = Math.floor(numero / 100);
      letras += centenas[centena] + " ";
      numero %= 100;
    }

    if (numero >= 11 && numero <= 19) {
      letras += especiales[numero - 10] + " ";
      return letras.trim();
    }

    if (numero >= 10) {
      const decena = Math.floor(numero / 10);
      letras += decenas[decena] + " ";
      numero %= 10;
    }

    if (numero > 0) {
      letras += unidades[numero] + " ";
    }

    return letras.trim();
  }

  const handleTraducirClick = () => {
    if (numero !== undefined) {
      setResultado(numeroALetras(numero));
    }
  };

  const handleNumeroChange = (event: CustomEvent) => {
    const nuevoNumero = parseInt(event.detail.value!);
    if (nuevoNumero >= 1 && nuevoNumero <= 1000) {
      setNumero(nuevoNumero);
    } else {
      setNumero(undefined);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Traductor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h1>Traductor de numero a letras</h1>
          <p>
            Este pequeño aplicativo puede traducir cualquiera numero en texto de
            manera automática
          </p>
        </IonText>
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonTextarea
                label="Los números aceptado son del 1 al 1000"
                labelPlacement="floating"
                fill="solid"
                placeholder="Numero que desea traducir"
                required={true}
                errorText="Este campo es requerido y debe ser un número"
                onIonChange={handleNumeroChange}
              ></IonTextarea>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonButton onClick={handleTraducirClick}>
                <IonIcon slot="end" icon={languageOutline}></IonIcon>
                Traducir
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonText>
                <h3>El numero ingresado es el: {resultado}</h3>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Traductor;
