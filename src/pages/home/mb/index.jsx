import HeaderComponent from "../../../components/header";
import title_mb_img from "../../../assets/images/title-mb.png";
import MainTabsComponent from "../../../components/main_tabs";
import MBItemsComponent from "../../../components/items/mb";
import { Player } from "@lottiefiles/react-lottie-player";
import backgroundLottieMB from "../../../assets/lotties/background-mb.json";

export default function MBPage({ links }) {

  return (
    <div>

      <div className="position-relative d-flex justify-content-center align-items-center">
        <Player
          autoplay
          loop
          src={backgroundLottieMB}
        />
        <HeaderComponent
          links={links}
        />
        <div className={`h-100 container px-3 position-absolute start-0 top-0 z-1`}>
          <div className="col-9 mx-auto" style={{ marginTop: 65 }}>
            <img className="w-100" src={title_mb_img} alt="title_mb_img" />
          </div>
          <MainTabsComponent
            links={links}
          />
          {/* <AppDownloadComponent
            links={links}
          /> */}
          <MBItemsComponent
            links={links}
          />
        </div>
      </div>
    </div>
  );
}