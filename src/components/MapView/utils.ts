import { sleep } from "../../utils/helpers";
import { Building } from "../../@types/user";

export const initMap = (building: Building) => {
  const position = {
    lat: building.position[0],
    lng: building.position[1],
  };
  // @ts-ignore
  const Google = window.google?.maps?.Map;
  // @ts-ignore
  const Marker = window.google?.maps?.Marker;
  // @ts-ignore
  const InfoWindow = window.google?.maps?.InfoWindow;

  const map = new Google(document.getElementById("map"), {
    center: position,
    zoom: 4,
  });
  const marker = new Marker({
    position: position,
    map: map,
    // @ts-ignore
    animation: google.maps.Animation.DROP,
  });
  const infoWindow = new InfoWindow({});

  map.addListener("click", () => {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });

  marker.addListener("mouseover", () => {
    infoWindow.setPosition(marker.getPosition());
    infoWindow.setSize({ width: 200, height: 200, j: 200, h: 200 });
    infoWindow.setContent(`
    <div><h2>${building.name}</h2></div>
    <br>
    <div><h3>Position:</h3></div> 
    <div><p>Lat: ${building.position[0]}</p></div>
    <div><p>Lng: ${building.position[1]}</p></div>
    `);
    infoWindow.open({ map, anchor: marker, shouldFocus: false });
  });
};

let script: HTMLScriptElement;

export const loadMapScript = async (
  setSdkReady: (isLoaded: boolean) => void
) => {
  script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://maps.googleapis.com/maps/api/js";
  script.async = true;
  script.onload = () => {
    sleep({
      cb: () => setSdkReady(true),
      time: 1000,
    });
  };
  document.body.appendChild(script);
};
