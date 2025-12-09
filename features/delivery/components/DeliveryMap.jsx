// src/features/delivery/components/DeliveryMap.jsx
import { useRef } from "react";
import { useKakaoMap } from "@/app/../hooks/useKakaoMap";

export default function DeliveryMap() {
  const mapRef = useRef(null);
  useKakaoMap(mapRef);

  return (
    <section className="map-section">
      <h2>📍 Candy 본사 위치</h2>
      <div ref={mapRef} className="map-container"></div>
    </section>
  );
}
