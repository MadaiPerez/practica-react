const Home = () => {
    return (
      <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 min-h-screen">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
                Encuentra los Mejores Electrodomésticos para tu Hogar
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Descubre una amplia variedad de productos de alta calidad que combinan tecnología avanzada y diseño moderno. 
                Todo lo que necesitas para hacer tu vida más fácil y cómoda.
              </p>
              <div className="flex gap-4">
                <a
                  href="/catalogo"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
                >
                  Ver Catálogo
                </a>
                <a
                  href="#ofertas"
                  className="text-blue-600 px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-100 transition"
                >
                  Ver Ofertas
                </a>
              </div>
            </div>
           
            <div className="relative">
              <img
                src="https://www.shutterstock.com/image-photo/salesman-electrical-appliances-smiling-leaning-260nw-2277997057.jpg"
                alt="Electrodomésticos"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-0 left-0 bg-blue-600 text-white text-sm py-2 px-4 rounded-bl-lg">
                ¡Hasta 30% de descuento!
              </div>
            </div>
          </div>
  
         
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM12 14c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 20c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Calidad Garantizada</h3>
                <p className="text-gray-600 mt-2">
                  Solo ofrecemos productos de marcas reconocidas y con garantía.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h11M9 21V3M19 21V3"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Envíos Rápidos</h3>
                <p className="text-gray-600 mt-2">
                  Entrega garantizada en tiempo récord en todo el país.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A1 1 0 004 18.608v.773A2.619 2.619 0 006.619 22h10.762A2.619 2.619 0 0020 19.381v-.773a1 1 0 00-1.121-.804l-1.1-.656a9.8 9.8 0 00-1.618-.664c-.324-.116-.592-.205-.839-.28C15.308 15.47 14.651 15 14 15h-4c-.651 0-1.308.47-1.322.603-.247.075-.515.164-.839.28a9.8 9.8 0 00-1.618.664l-1.1.656z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Soporte 24/7</h3>
                <p className="text-gray-600 mt-2">
                  Nuestro equipo está siempre listo para ayudarte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  