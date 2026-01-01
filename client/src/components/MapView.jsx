import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

const MapView = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty", // temporary
      center: [0, 20], // world view
      zoom: 2,
    });

    map.on("click", (e) => {
      const { lng, lat } = e.lngLat;
      console.log("Clicked:", lat, lng);
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-screen"
    />
  );
};

export default MapView;
