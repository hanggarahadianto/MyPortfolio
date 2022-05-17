import "./App.css";

function App() {
  return (
    <div className="">
      <div id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 font-medium text-primary lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                Hallo all 😊😊😊😊😊
              </h1>
              <span className="text-dark block font-bold mt-2 text-3xl lg:text-5xl">
                I am Hangga
              </span>
              <h2 className="font-medium mb-5 text-lg lg:2xl">
                Fullstack Developer
              </h2>
              <button className="bg-teal-300 rounded-xl px-4 py-2 hover:shadow-lg hover:bg-teal-400 duration-500">
                <span className="text-white font-bold text-lg">Contact Me</span>
              </button>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-7 relative lg:mt-9 lg:right-0">
                <img
                  className="max-w-full mx-auto"
                  src="images/photo.png"
                  alt="Hangga Rahadianto"
                />
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M51.3,-45.6C65.7,-36.8,76.3,-18.4,70.6,-5.6C65,7.1,43.2,14.3,28.7,30.5C14.3,46.7,7.1,72,-8,80C-23.1,88,-46.2,78.6,-52.4,62.4C-58.5,46.2,-47.8,23.1,-48,-0.2C-48.1,-23.4,-59.2,-46.9,-53,-55.6C-46.9,-64.3,-23.4,-58.4,-2.5,-55.9C18.4,-53.4,36.8,-54.3,51.3,-45.6Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
