import axios from 'axios';
import { useEffect, useState } from 'react';

const ModalEditProduct = ({ idEdit, setShowModal, getAllProducts }) => {
  const dataProductInit = {
    nombre: '',
    descripcion: '',
    precio: '',
  };

  const [dataProduct, setDataProduct] = useState(dataProductInit);

  const apiUrl = 'http://localhost/products/api.php';
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const getProduct = async () => {
    try {
      const res = await axios.get(`${apiUrl}/productos/${idEdit}`, config);
      setDataProduct(res.data);
    } catch (error) {
      console.error('Error al obtener datos del producto:', error);
    }
  };

  const handleChange = (e) => {
    setDataProduct({ ...dataProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/productos/${idEdit}`, dataProduct, config);
      setShowModal(false);
      getAllProducts();
    } catch (error) {
      console.error('Error al actualizar producto:', error);
    }
  };

  useEffect(() => {
    if (idEdit) {
      getProduct();
    }
  }, [idEdit]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-lg relative">
       
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">Editar Producto</h3>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>
        </div>

        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre del Producto
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={dataProduct.nombre}
                onChange={handleChange}
                placeholder="Ej. Refrigeradora"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

           
            <div>
              <label htmlFor="precio" className="block text-sm font-medium text-gray-700">
                Precio ($)
              </label>
              <input
                type="number"
                id="precio"
                name="precio"
                value={dataProduct.precio}
                onChange={handleChange}
                placeholder="Ej. 250.00"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          
          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={dataProduct.descripcion}
              onChange={handleChange}
              placeholder="Describe las características del producto"
              rows="4"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditProduct;
