import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalEditProduct from '../components/modalEditProduct';
import Swal from 'sweetalert2';

const Catalog = () => {
  const [dataProducts, setDataproducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idEdit, setIdEdit] = useState(0);

  const apiUrl = 'http://localhost/products/api.php';
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/productos`, config);
      setDataproducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const openModalEdit = (id) => {
    setIdEdit(id);
    setShowModal(true);
  };

  const deleteProduct = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8B5CF6",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "¡Sí, bórralo!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${apiUrl}/productos/${id}`, config);
          Swal.fire("¡Borrado!", "El producto ha sido eliminado.", "success");
          getAllProducts();
        } catch (error) {
          console.error("Error al eliminar producto:", error);
        }
      }
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">Catálogo de Productos</h1>
          <Link to="/Product">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Agregar Producto
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataProducts.length > 0 ? (
            dataProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIgDfp26G_BvrrF655Yp8GabpNcaJNkZfPQ&s"
                  alt={item.nombre}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold text-blue-700">{item.nombre}</h2>
                <p className="text-sm text-gray-600">{item.descripcion}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">${item.precio}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="text-sm text-blue-600 hover:underline"
                    onClick={() => openModalEdit(item.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="text-sm text-red-600 hover:underline"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center col-span-full">
              <h2 className="text-xl font-medium text-blue-700">
                No hay productos disponibles
              </h2>
              <p className="text-gray-600">Agrega productos para mostrarlos aquí.</p>
            </div>
          )}
        </div>
        {showModal && (
          <ModalEditProduct
            setShowModal={setShowModal}
            idEdit={idEdit}
            getAllProducts={getAllProducts}
          />
        )}
        
      </div>
    </section>
  );
};

export default Catalog;
