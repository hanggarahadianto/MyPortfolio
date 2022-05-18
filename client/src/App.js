import "./App.css";
import { Youtube, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";

function App() {
  return (
    <div className="bg-gray-100">
      <div id="home" className="pt-2">
        <div className="container">
          <section className="flex flex-wrap">
            <div className="w-full self-center px-4 font-medium text-primary lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl lg:text-3xl">
                Hallo all 😊😊😊😊😊
              </h1>
              <span className="text-dark block font-bold mt-2 text-3xl lg:text-6xl">
                I am Hangga
              </span>
              <h2 className="font-medium mb-5 text-lg lg:3xl">
                Fullstack Developer
              </h2>
              <button className="bg-teal-300 mt-3 rounded-xl px-4 py-2 hover:shadow-lg hover:bg-teal-400 duration-500">
                <span className="text-white font-bold text-lg">Contact Me</span>
              </button>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative lg:mt-9 lg:right-0">
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
          </section>
          <section id="about">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-2 lg:w-1/2">
                <h2 className="font-bold text-primary text-lg mb-2 mt-5">
                  About me
                </h2>
                <h2 className="font-bold text-dark text-3xl mb-3 max-w-xl">
                  I am a fullstack web developer
                </h2>
                <h4 className="font-medium text-base text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </h4>
              </div>
              <div className="w-full px-4 lg:w-1/2 lg:px-10 lg:mt-10">
                <div className="text-2xl font-bold mt-5">
                  <h2 className="">Just follow me on my social media</h2>
                  <h3 className="text-lg text-slate-500 mt-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </h3>
                </div>
                <div className="flex gap-8">
                  <div className="flex items-center mt-5 cursor-pointer">
                    <a href="https://www.youtube.com/watch?v=8Ea4oq8qFtM&t=3s" />
                    <div className="flex justify-center items-center border-slate-300 bg-slate-100 hover:bg-primary border-2 w-16 h-16 rounded-full duration-500">
                      <Youtube className="w-8 h-8 text-center items-center" />
                    </div>
                  </div>
                  <div className="flex items-center mt-5 cursor-pointer">
                    <a href="https://www.youtube.com/watch?v=8Ea4oq8qFtM&t=3s" />
                    <div className="flex justify-center items-center border-slate-300 bg-slate-100 hover:bg-primary border-2 w-16 h-16 rounded-full duration-500">
                      <Instagram className="w-8 h-8 text-center items-center" />
                    </div>
                  </div>
                  <div className="flex items-center mt-5 cursor-pointer">
                    <a href="https://www.youtube.com/watch?v=8Ea4oq8qFtM&t=3s" />
                    <div className="flex justify-center items-center border-slate-300 bg-slate-100 hover:bg-primary border-2 w-16 h-16 rounded-full duration-500">
                      <Linkedin className="w-8 h-8 text-center items-center" />
                    </div>
                  </div>
                  <div className="flex items-center mt-5 cursor-pointer">
                    <a href="https://www.youtube.com/watch?v=8Ea4oq8qFtM&t=3s" />
                    <div className="flex justify-center items-center border-slate-300 bg-slate-100 hover:bg-primary border-2 w-16 h-16 rounded-full duration-500">
                      <Twitter className="w-8 h-8 text-center items-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
