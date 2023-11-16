import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar({ setOpenNav, openNav }) {
   //========================= Router
   const navigate = useNavigate();

   return (
      <>
         <nav
            className={`fixed lg:sticky top-0 bottom-0 z-[6] h-screen w-50 transition--transform-layout ${
               openNav ? "ml-0" : "-ml-56"
            }`}
         >
            <div className="h-full overflow-x-auto bg-gray-100 shadow-2xl lg:shadow-md">
               <aside className="flex flex-col w-56 h-screen px-2 pb-2 overflow-y-auto bg-[#00a7b5] border-r rtl:border-r-0 rtl:border-l z-50 ">
                  <div className="flex flex-col justify-between flex-1 mt-1">
                     <nav className="flex-1 space-y-3 ">
                        <div className="flex justify-end items-center">
                           <button
                              className="btn btn-circle btn-sm"
                              onClick={() => {
                                 setOpenNav(!openNav);
                              }}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                 />
                              </svg>
                           </button>
                        </div>

                        <ul className="menu bg-gray-100 w-full rounded-lg  border border-black">
                           <li>
                              <div
                                 className="flex justify-between"
                                 onClick={() => {
                                    navigate("/");
                                 }}
                              >
                                 <a className="text-black">Inicio</a>
                                 <i className="fa-solid fa-house text-blue-600"></i>
                              </div>
                           </li>
                        </ul>
                        <ul className="menu bg-gray-100 w-full rounded-lg  border border-black">
                           <li>
                              <div
                                 className="flex justify-between"
                                 onClick={() => {
                                    navigate("/historias");
                                 }}
                              >
                                 <a className="text-black">Historias</a>
                                 <i className="fa-solid fa-circle-plus text-orange-600"></i>
                              </div>
                           </li>
                        </ul>
                        <ul className="menu bg-gray-100 w-full rounded-lg border border-black">
                           <li>
                              <details>
                                 <summary>Indicadores por ciudad</summary>
                                 <ul>
                                    <li>
                                       <div
                                          className="flex justify-between"
                                          onClick={() => {
                                             navigate("/ciudad/1");
                                          }}
                                       >
                                          <a className="text-black">Tuxtla Gutierrez</a>
                                          <i className="fa-solid fa-temperature-quarter text-red-500"></i>
                                       </div>
                                    </li>
                                    <li>
                                       <div
                                          className="flex justify-between"
                                          onClick={() => {
                                             navigate("/ciudad/4");
                                          }}
                                       >
                                          <a className="text-black">San Cristobal</a>
                                          <i className="fa-solid fa-temperature-quarter text-red-500"></i>
                                       </div>
                                    </li>
                                    <li>
                                       <div
                                          className="flex justify-between"
                                          onClick={() => {
                                             navigate("/ciudad/2");
                                          }}
                                       >
                                          <a className="text-black">Chiapa de Corzo</a>
                                          <i className="fa-solid fa-temperature-quarter text-red-500"></i>
                                       </div>
                                    </li>
                                    <li>
                                       <div
                                          className="flex justify-between"
                                          onClick={() => {
                                             navigate("/ciudad/3");
                                          }}
                                       >
                                          <a className="text-black">Tapachula</a>
                                          <i className="fa-solid fa-temperature-quarter text-red-500"></i>
                                       </div>
                                    </li>
                                 </ul>
                              </details>
                           </li>
                        </ul>
                        <ul className="menu bg-gray-100 w-full rounded-lg  border border-black">
                           <li>
                              <details>
                                 <summary>Niveles del agua</summary>
                                 <div>
                                    <li>
                                       <div
                                          className="flex justify-between"
                                          onClick={() => {
                                             navigate("/mapa/alcalinidad");
                                          }}
                                       >
                                          <a className="text-black">Alcalinidad</a>
                                          <i className="fa-solid fa-temperature-quarter text-red-500"></i>
                                       </div>
                                    </li>
                                    <li>
                                       <div
                                          className="flex justify-between"
                                          onClick={() => {
                                             navigate("/mapa/arsenico");
                                          }}
                                       >
                                          <a className="text-black">Arsenico</a>
                                          <i className="fa-solid fa-temperature-quarter text-red-500"></i>
                                       </div>
                                    </li>
                                    <li>
                                       <div
                                          className="flex justify-between"
                                          onClick={() => {
                                             navigate("/mapa/cadmio");
                                          }}
                                       >
                                          <a className="text-black">Cadmio</a>
                                          <i className="fa-solid fa-temperature-quarter text-red-500"></i>
                                       </div>
                                    </li>
                                    <li>
                                       <div
                                          className="flex justify-between"
                                          onClick={() => {
                                             navigate("/mapa/coliformes_fecales");
                                          }}
                                       >
                                          <a className="text-black">Coliformes fecales</a>
                                          <i className="fa-solid fa-temperature-quarter text-red-500"></i>
                                       </div>
                                    </li>
                                    <li>
                                       <div
                                          className="flex justify-between"
                                          onClick={() => {
                                             navigate("/mapa/descarga_agua_residual");
                                          }}
                                       >
                                          <a className="text-black">Descarga agua residual</a>
                                          <i className="fa-solid fa-temperature-quarter text-red-500"></i>
                                       </div>
                                    </li>
                                 </div>
                              </details>
                           </li>
                        </ul>
                     </nav>

                     <div className="mt-6">
                        <div className="p-3 bg-gray-100 rounded-lg ">
                           <h2 className="text-sm font-medium text-gray-800 ">
                              "¡Juntos, preservemos el agua! Tu contribución diaria para un futuro sostenible y lleno de
                              vitalidad."
                           </h2>

                           <div className="flex-1 mt-5">
                              <img className="w-full" src={logo} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </aside>
            </div>
         </nav>
      </>
   );
}

export default Navbar;
