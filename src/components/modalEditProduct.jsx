const ModalEditProduct = (props) => {

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
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-1/2 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Editar producto
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => props.setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>

                        </div>
                        {/*body*/}
                        <div className="flex items-center justify-center w-full ">
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
                        </div>
                    </div>
                </div>
            </div >
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ModalEditProduct;