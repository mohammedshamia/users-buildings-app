import { useEffect, useState } from "react";
import { initMap, loadMapScript } from "./utils";
import styles from "./styles.module.css";
import { Building } from "../../@types/user";
import CircularProgress from "@mui/material/CircularProgress";
import { sleep } from "../../utils/helpers";

interface IProps {
  building?: Building;
}

function MapView(props: IProps) {
  const [sdkReady, setSdkReady] = useState<boolean>(false);

  useEffect(() => {
    setSdkReady(false);
    // @ts-ignore
    if (!window.google) {
      loadMapScript(setSdkReady);
    } else {
      sleep({
        cb: () => setSdkReady(true),
        time: 1000,
      });
    }
  }, []);

  useEffect(() => {
    if (sdkReady && props.building) {
      initMap(props.building);
    }
  }, [props.building, sdkReady]);

  return sdkReady && props.building ? (
    <div className={styles.mapContainer} id={"map"} />
  ) : (
    <CircularProgress color="inherit" size={30} className={styles.spinner} />
  );
}

export default MapView;
