import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  calculatorOutline,
  calculatorSharp,
  heartOutline,
  heartSharp,
  homeOutline,
  homeSharp,
  languageOutline,
  languageSharp,
  logoTableau,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  videocamOutline,
  videocamSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Inicio",
    url: "/page/Inicio",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Sumadora",
    url: "/page/sumadora",
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp,
  },
  {
    title: "traductor",
    url: "/page/traductor",
    iosIcon: languageOutline,
    mdIcon: languageSharp,
  },
  {
    title: "Tabla de Multiplicar",
    url: "/page/Tabla",
    iosIcon: logoTableau,
    mdIcon: logoTableau,
  },
  {
    title: "Video",
    url: "/page/Video",
    iosIcon: videocamOutline,
    mdIcon: videocamSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Bryan De Jesus Rosa Tavarez</IonListHeader>
          <IonNote>2021-2239@itla.edu.do</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
