import { useNavigate } from "react-router-dom";
import man from "../../assets/man.png";
import logo from "../../assets/logo-negro.png";

function Header({ setOpenNav, openNav }) {
  //========================= Router
  const navigate = useNavigate();

  return (
    <header
      className={`fixed z-[10000000] h-12 w-full bg-gray-400 shadow-md transition--transform-layout ${
        openNav ? "lg:ml-56 lg:pr-56" : "lg:ml-0"
      }`}
    >
      <div className="navbar bg-[#00a7b5]">
        <div
          className="flex-1"
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          {/* <img className="w-40 cursor-pointer" src={logo} alt="" /> */}
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div className="flex items-center">
              <p className="mr-4 hidden sm:block">Usuario</p>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={man} />
                </div>
              </label>
            </div>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a>Perfil</a>
              </li>
              <li>
                <a>Configuracion</a>
              </li>
              <li>
                <a>Cerrar sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
