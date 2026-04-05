import title_img from "../../../assets/images/title.png";
import MainTabsComponent from "../../../components/main_tabs";
import styles from "./style.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import backgroundLottie from "../../../assets/lotties/background.json";
import HeaderComponent from "../../../components/header";
import PCItemsComponent from "../../../components/items/pc";

export default function PCPage({ links }) {
  return (
    <>
      <div className="position-relative">
        <Player
          autoplay
          loop
          src={backgroundLottie}
          className={`${styles.background}`}
        />
        <HeaderComponent
          links={links}
        />
        <div className={`h-100 container position-absolute start-50 top-0 translate-middle-x z-2 d-flex flex-column`} style={{ minWidth: 1320 }}>
          <div className="col-7 mx-auto text-center" style={{ marginTop: 160 }}>
            <img className="w-100" src={title_img} alt="title" />
          </div>

          <MainTabsComponent
            links={links}
          />

          <PCItemsComponent
            links={links}
          />
        </div>
      </div>
    </>
  )
}