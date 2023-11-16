import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Inicio() {
  //========================= Router
  const navigate = useNavigate();

  const coord = [
    { lat: 16.761628957787565, long: -93.13003348052797, name: "1" },
    { lat: 16.75944836262861, long: -93.10379915949704, name: "2" },
    { lat: 16.746402127466297, long: -93.0974057136264, name: "3" },
    { lat: 16.74275370804119, long: -93.1239601469305, name: "4" },
  ];

  useEffect(() => {
    const map = L.map("map").setView([16.7947, -93.1459], 13);

    const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const points = coord.map((data) =>
      L.marker([data.lat, data.long]).addTo(map).bindPopup(`<b> Punto: ${data.name}</b>`).openPopup()
    );
  }, []);

  return (
    <div className="">
      <div className="bg-white m-8 rounded-lg ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black mb-8  sm:text-4xl">
            <span className="block">App de puntos en un mapa </span>
          </h2>

          {coord.map((data, key) => (
            <div className="bg-blue-50 my-2 flex flex-col sm:flex-row gap-4 p-4 rounded-lg" key={key}>
              <h2 className="text-sm text-black font-semibold">
                Nombre del punto:
                <span className="font-normal"> {data.name} </span>
              </h2>
              <h2 className="text-sm text-black font-semibold">
                Latitud:
                <span className="font-normal"> {data.lat} </span>
              </h2>
              <h2 className="text-sm text-black font-semibold">
                Longitud:
                <span className="font-normal"> {data.long} </span>
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg m-8">
        <div id="map"></div>
      </div>
    </div>
  );
}
export default Inicio;
