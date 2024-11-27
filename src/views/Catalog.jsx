import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalEditProduct from '../components/modalEditProduct';

const Catalog = () => {

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const apiUrl = 'http://localhost/products/api.php';
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }

  const getAllProducts = async () => {
    const res = await axios.get(`${apiUrl}/productos`, config);
    console.log(res);

    setData(res.data)
  }

  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <div>

      <section class="text-gray-600 body-font">
        <div className="p-4">

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to={'/Product'}>Agregar Producto</Link></button>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div class="flex flex-wrap -m-4">
            {data.map((item, key)=> {

return (
  <div className="lg:w-1/3 sm:w-1/2 p-4" key={key}>
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <img
        alt="gallery"
        className="w-full h-48 object-cover object-center"
        src="https://dummyimage.com/600x360"
      />
      <div className="p-4">
        <h2 className="text-sm title-font font-medium text-indigo-500 mb-1">
          {item.id}
        </h2>
        <h1 className="text-lg font-medium text-gray-900 mb-3">{item.nombre}</h1>
        <p className="leading-relaxed mb-3">{item.descripcion}</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Editar
        </button>
      </div>
    </div>
  </div>
);

            })}




          </div>
        </div>

{showModal && <ModalEditProduct setShowModal={setShowModal}/>}
      </section>
    </div>
  )
}

export default Catalog;