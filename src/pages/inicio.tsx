import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonImg,
} from "@ionic/react";
import "./inicio.css";

const Inicio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonCard>
                <IonImg
                  className="image-profile, ion-border-radius"
                  src="./resources/profile-pic.png"
                  alt="The Wisconsin State Capitol building in Madison, WI at night"
                />
                <IonCardHeader>
                  <IonCardTitle>Bryan De Jesus Rosa Tavarez</IonCardTitle>
                  <IonCardSubtitle>
                    <b>Carrera:</b> Desarrollo de Software
                  </IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <IonText>
                    <p>
                      <b>Asignatura:</b> Desarrollo de aplicaciones móviles
                    </p>
                  </IonText>
                  <IonText>
                    <p>
                      <b>Correo:</b> 20212239@itla.edu.com
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Inicio;
