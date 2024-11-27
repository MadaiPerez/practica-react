import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterProduct = () => {

    const navigate = useNavigate();

    const apiUrl = 'http://localhost/products/api.php';
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }

    const dataProductInit = {
        name: "",
        description: "",
        price: 0
    }

    const [dataProduct, setDataProduct] = useState(dataProductInit);

    const handleChange = (e) => {
        //Actualizando el valor segun propiedad y valor que proviene del input
        setDataProduct({ ...dataProduct, [e.target.name]: e.target.value });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dataProduct);
        await axios.post(`${apiUrl}/Product`, dataProduct, config)
            .then(response => {
                console.log(response);
                navigate('/catalogo');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Registrar Producto</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>
                <div onSubmit={handleSubmit} class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Nombre</label>
                                <input type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                    placeholder='ingrese el nombre del producto'
                                    required
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="text" class="leading-7 text-sm text-gray-600">Precio</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    onChange={handleChange}
                                    placeholder='0.00'
                                    required
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Mensaje</label>
                                <textarea
                                    id="mensaje"
                                    name="description"
                                    onChange={handleChange}
                                    required
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <button
                            type='submit'
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar</button>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterProduct