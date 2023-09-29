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
} from "@ionic/react";

const video: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Video Explicativo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonCard>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/j8lORecfqK8"
                  title="Video explicativo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <IonCardHeader>
                  <IonCardTitle>Video Explicativo</IonCardTitle>
                  <IonCardSubtitle>
                    Instituto Tecnologico de las americas
                  </IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  Este es un video explicativo de la aplicación que se realizo
                  en el curso de desarrollo de aplicaciones móviles
                  específicamente en el modulo 3 realizada con el framework
                  ionic
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default video;
