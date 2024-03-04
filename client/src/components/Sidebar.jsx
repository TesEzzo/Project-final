import { Link } from "react-router-dom";
import logo_site from "../assets/logo_def.png";

const Sidebar = () => {
  return (
    <>
      <div className="bg-[#17202A] h-screen w-64 fixed z-[1000] font-semibold">
        <div className="m-2 text-white">
          <div className="flex flex-row justify-center mb-12">
            <img src={logo_site} alt="icon-site" className="max-w-32" />
          </div>
          <div className="flex flex-col w-full gap-4">
            <Link>
              {" "}
              {/*//NOTE - chronology transictions */}
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300 hover:text-black group/item">
                <svg
                  className="max-h-10 max-w-10 fill-white group-hover/item:fill-black delay-100 duration-300"
                  fillRule="evenodd"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 72.15"
                >
                  <defs>
                    <style>.cls-1 ;</style>
                  </defs>
                  <path
                    className="cls-1"
                    d="M94.81,26.32,61.3,61.37,42.73,44.12l1.92-2.69L58.25,54l.17.16a3.18,3.18,0,0,0,4.49-.21L64,52.71l0,0L69.17,47,92,23.72l2.81,2.6ZM96.2,43.78V37a1,1,0,0,1,0-.17c.12-3,2.13-4,4.84-3.13a1.47,1.47,0,0,1,.41.22c6.84,5.37,13.21,10.73,20,16.1l.09.09a3.17,3.17,0,0,1,1.21,3.18A4.49,4.49,0,0,1,121,55.74L102.62,70.62C99.38,73.17,96,72.69,96,68c0-2.09,0-4.2,0-6.29H69.9l17.18-18ZM30.53,33.06c0,1.64.15,3.66,0,5.26a7,7,0,0,1-.34,1.8,4.8,4.8,0,0,1-1.91,2.56,5,5,0,0,1-3,.77A7.8,7.8,0,0,1,23.16,43h0a3.57,3.57,0,0,1-.51-.22,4.6,4.6,0,0,1-.46-.3h0c-3.29-2.58-6.7-5.36-10.12-8.13-3.18-2.59-6.37-5.18-9.92-8l-.2-.18A5.83,5.83,0,0,1,.27,23.88l-.06-.2a4.82,4.82,0,0,1-.09-2.47,5.43,5.43,0,0,1,1-2.05,8.18,8.18,0,0,1,1.49-1.51C8.79,13,14.82,7.58,21,2.78A8.12,8.12,0,0,1,25.84.83a4.74,4.74,0,0,1,2,.42,4.44,4.44,0,0,1,1.64,1.29,6.87,6.87,0,0,1,1.26,4.33h0v4.36H55.63l-3.69,3.86H28.76a1.92,1.92,0,0,1-1.9-1.95c0-1.44,0-2.9,0-4.34V6.87h0a3.2,3.2,0,0,0-.44-1.95.67.67,0,0,0-.21-.18.92.92,0,0,0-.37-.06,4.37,4.37,0,0,0-2.47,1.13L5,20.68a4.07,4.07,0,0,0-.78.77,1.57,1.57,0,0,0-.3.59,1,1,0,0,0,0,.46l0,.09a2.24,2.24,0,0,0,.6.8c3.24,2.54,6.61,5.27,10,8s6.43,5.23,10,8a4.05,4.05,0,0,0,.94.18,1.27,1.27,0,0,0,.75-.16,1,1,0,0,0,.38-.55,3.31,3.31,0,0,0,.14-.77v-7A1.92,1.92,0,0,1,28.6,29.2h9.85l-3.53,3.7-.14.16ZM93.89,17.25,60.39,52.3,41.82,35.05,75.33,0,93.89,17.25Zm-21.15,7.4a5.76,5.76,0,1,1-7.37-3.47,5.76,5.76,0,0,1,7.37,3.47Zm12.78-4L63.13,43.67a3.75,3.75,0,0,0-5.29.2L50.5,37.06a3.75,3.75,0,0,0-.2-5.29L72.69,8.68A3.74,3.74,0,0,0,78,8.48l7.35,6.82a3.76,3.76,0,0,0,.19,5.3Z"
                  />
                </svg>
                <p className="pl-2">Transizioni</p>
              </button>
            </Link>

            <Link>
              {" "}
              {/*//NOTE - chronology events */}
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300 hover:text-black group/item">
                <svg
                  className="max-h-10 max-w-10 fill-white group-hover/item:fill-black delay-100 duration-300"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 452.986 452.986"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M404.344,0H48.642C21.894,0,0,21.873,0,48.664v355.681c0,26.726,21.894,48.642,48.642,48.642
			h355.702c26.726,0,48.642-21.916,48.642-48.642V48.664C452.986,21.873,431.07,0,404.344,0z M148.429,33.629h156.043v40.337
			H148.429V33.629z M410.902,406.372H42.041v-293.88h368.86V406.372z"
                    />
                    <rect
                      x="79.273"
                      y="246.23"
                      width="48.642"
                      height="48.664"
                    />
                    <rect
                      x="79.273"
                      y="323.26"
                      width="48.642"
                      height="48.642"
                    />
                    <rect
                      x="160.853"
                      y="169.223"
                      width="48.621"
                      height="48.642"
                    />
                    <rect
                      x="160.853"
                      y="246.23"
                      width="48.621"
                      height="48.664"
                    />
                    <rect
                      x="160.853"
                      y="323.26"
                      width="48.621"
                      height="48.642"
                    />
                    <rect
                      x="242.369"
                      y="169.223"
                      width="48.664"
                      height="48.642"
                    />
                    <rect
                      x="242.369"
                      y="246.23"
                      width="48.664"
                      height="48.664"
                    />
                    <rect
                      x="242.369"
                      y="323.26"
                      width="48.664"
                      height="48.642"
                    />
                    <rect
                      x="323.907"
                      y="169.223"
                      width="48.664"
                      height="48.642"
                    />
                    <rect
                      x="323.907"
                      y="246.23"
                      width="48.664"
                      height="48.664"
                    />
                  </g>
                </svg>
                <p className="pl-2">Cronologia Eventi</p>
              </button>
            </Link>

            <Link>
              {" "}
              {/*//NOTE - attendance users events*/}
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300 hover:text-black group/item">
                <svg
                  className="max-h-10 max-w-10 fill-white group-hover/item:fill-black delay-100 duration-300"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M20,7.4v10.5c0,1.7-1.3,3-3,3H5.9c0,1.1,0.9,2,2,2H18c2.2,0,4-1.8,4-4V9.4C22,8.3,21.1,7.4,20,7.4z" />
                    <path
                      d="M5,1.1v2H4c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h12.2c1.1,0,2-0.9,2-2v-12c0-1.1-0.9-2-2-2h-1v-2h-2v2H7v-2
			C7,1.1,5,1.1,5,1.1z M4,8.1h12.2v9H4V8.1z"
                    />
                    <path d="M13.7,16.3l-2.4-1.4L9,16.3l0.6-2.7l-2.1-1.8l2.8-0.2L11.4,9l1.1,2.5l2.8,0.3l-2.1,1.8L13.7,16.3z" />
                  </g>
                </svg>
                <p className="pl-2">Reg. Eventi</p>
              </button>
            </Link>

            <Link>
              {" "}
              {/*//NOTE - attendance users prenotations */}
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300 hover:text-black group/item">
                <svg
                  className="max-h-10 max-w-10 fill-white group-hover/item:fill-black delay-100 duration-300"
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 428.168 428.168"
                  xmlSpace="preserve"
                >
                  <path
                    d="M348.407,289.168h-31.548v-5.307c0-5.522-4.477-10-10-10s-10,4.478-10,10v5.307h-49v-5.308
	c0-5.522-4.478-9.999-10.001-9.999c-5.522,0-9.999,4.478-9.999,10.001v5.306h-32.255c-5.523,0-9.745,4.031-9.745,9.554v119.404
	c0,5.522,4.222,10.042,9.745,10.042h152.803c5.523,0,10.452-4.52,10.452-10.042V298.722
	C358.858,293.2,353.93,289.168,348.407,289.168z M338.858,408.168h-133v-99h22v4.413c0,5.522,4.478,9.999,10.001,9.999
	s9.999-4.478,9.999-10.001v-4.411h49v4.412c0,5.522,4.477,10,10,10s10-4.478,10-10v-4.412h22V408.168z M109.06,78.82
	c1.606,31.74,15.076,57.13,37.873,70.673c10.719,6.367,22.735,9.551,34.753,9.551c12.017,0,24.036-3.185,34.754-9.553
	c18.024-10.709,30.215-28.819,35.323-51.622c7.385,11.893,15.708,22.382,24.484,30.792c-0.581,0.167-1.166,0.327-1.754,0.48
	c-5.345,1.392-8.55,6.853-7.158,12.197s6.854,8.546,12.196,7.158c7.448-1.939,14.45-4.771,20.812-8.418
	c2.996-1.718,4.894-4.858,5.02-8.309c0.127-3.451-1.536-6.723-4.397-8.655c-14.663-9.9-29.308-28.389-40.309-50.345
	c-2.793-5.574-10.791-29.291-13.368-34.475c-10.489-21.094-31.126-33.329-52.378-37.358c-0.184-0.047-2.297-0.283-4.804-0.551
	c-1.702-0.182-4.642-0.317-7.623-0.381c-3.765-0.081-13.586,0.818-15.834,1.295c-28.934,6.135-56.22,27.577-57.656,65.978
	c-0.145,3.868-0.124,7.655,0.058,11.358C109.053,78.698,109.056,78.759,109.06,78.82z M200.954,23.157
	c16.262,5.771,29.833,18.367,32.85,38.539c0.304,2.033,0.612,7.175,0.623,7.596c-16.489,4.627-33.958,0.074-46.529-12.067
	C194.271,47.492,198.706,35.965,200.954,23.157z M232.919,90.125c-3.481,19.022-12.728,33.873-26.695,42.171
	c-15.134,8.993-33.939,8.994-49.077,0.001c-14.185-8.426-23.501-23.608-26.856-43.056c14.793-0.098,29.336-5.039,41.286-14.262
	c1.092-0.843,2.157-1.717,3.196-2.622C190.664,87.302,211.995,93.748,232.919,90.125z M129.626,61.277
	c4.322-27.406,28.227-40.691,51.686-41.766c-2.424,14.349-7.774,24.444-13.556,31.471c-0.263,0.278-0.508,0.57-0.734,0.872
	c-2.563,2.984-5.19,5.382-7.666,7.293c-8.79,6.783-19.554,10.302-30.417,10.088C128.951,68.833,129.286,63.438,129.626,61.277z
	 M112.71,248.061L91.333,363.473l59.959-0.002c5.523,0,10,4.477,10,10c0,5.522-4.477,10-10,10l-71.982,0.002
	c-2.971,0-5.788-1.321-7.688-3.605s-2.686-5.295-2.145-8.216l23.568-127.233c8.272-44.66,50.44-64.653,88.558-64.653
	c0.002,0-0.001,0,0.001,0c38.118,0,80.283,19.992,88.555,64.653c1.005,5.431-2.582,10.648-8.012,11.654
	c-5.429,0.998-10.648-2.581-11.654-8.012c-6.179-33.362-39.052-48.296-68.89-48.296C151.765,199.764,118.89,214.698,112.71,248.061z
	 M316.487,353.246c0.002,1.495-0.333,3.014-1.041,4.444c0,0-12.844,25.94-13.49,27.245c-0.017,0.034-0.025,0.051-0.025,0.051
	c-3.197,4.557-5.291,5.588-9.821,5.583c-3.064,0.031-6.202-2.938-8.411-5.625c-1.818-2.211-9.939-14.163-9.939-14.163
	c-1.216-1.742-1.8-3.737-1.801-5.713c0-3.158,1.491-6.266,4.277-8.211c4.529-3.163,10.762-2.053,13.923,2.477l1.261,1.807
	l6.103-12.325c2.45-4.95,8.449-6.974,13.399-4.524C314.441,346.034,316.482,349.57,316.487,353.246z"
                  />
                </svg>
                <p className="pl-2">Reg. Prenotazioni</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
