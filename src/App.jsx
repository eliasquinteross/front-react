import './index.css'
import axios from 'axios';
import {useForm} from "react-hook-form";

import OpenBook from "./assets/components/OpenBook.jsx";
import {useState, useEffect} from "react";

const PORT = 3000

function App() {
    const [diaries, setDiaries] = useState([])

    const {
        register,
        reset,
        handleSubmit,
        // formState: { errors },
    } = useForm();


    const getDiaries = async () => {
        try {
            const diary = await axios.get(`http://localhost:${PORT}/api/diaries`)
            console.log(diary)
        } catch (e) {
            console.log(e)
        }


    }

    //useEffect(() => {
    //    getDiaries();
    // }, [])

    const handleOnSubmit = async (data) => {

        const formData = new FormData();

        formData.append("clima", data.clima);
        formData.append("visibilidad", data.visibilidad);
        formData.append("comentarios", data.comentarios);
        try {
            const response = await axios.post(`http://localhost:${PORT}/api/diaries`, formData);

        } catch (e) {
            console.log(e.message);
        }

        reset();
    }

    const leftPageContent = (
        <div>
            <div>
                <h1 className="flex justify-center items-center font-semibold uppercase text-xl text-amber-950">Agregar una nota de viaje</h1>
            </div>
            <form encType=" multipart/form-data "
                  onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="mx-8 mt-6">
                    <label>Clima</label>
                    <select id="climas"
                            {...register("clima", {
                                required: {
                                    value: true,
                                    message: "Clima es requerido",
                                },
                            })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option value="Lluvioso">Lluvioso</option>
                        <option value="Soleado">Soleado</option>
                        <option value="Tormentoso">Tormentoso</option>
                        <option value="Nublado">Nublado</option>
                    </select>
                </div>
                <div className="mx-8 mt-6">
                <label>Visibilidad</label>
                <select id="visibilidad"
                        {...register("visibilidad", {
                            required: {
                                value: true,
                                message: "Visibilidad es requerida",
                            },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    <option value="Escasa">Escasa</option>
                    <option value="Perfecta">Perfecta</option>

                    <option value="Mala">Mala</option>
                </select>
                </div>
                <div className="mx-8 mt-6">
                <label>Comentarios</label>
                <input type="text"
                       {...register("comentarios", {
                           required: {
                               value: true,
                               message: "Comentarios son requeridos",
                           },
                       })}
                    placeholder="Desarrolle sus anectodas.."
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                />
                </div>
                <div className="flex justify-end mt-12 mr-10">
                <button
                    className=" bg-black hover:bg-black text-white font-bold py-2 px-4 border-b-4 border-black hover:border-black rounded">
                    Guardar
                </button>
                </div>
            </form>

        </div>
    );

    const rightPageContent = (
            <div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Mis Notas de Viaje - Página Derecha</h2>
                    <p className="mb-2">Lugar: Roma</p>
                    <p className="mb-2">Fecha: 15/05/2024</p>
                    <p className="mb-2">Experiencias: Exploramos el Coliseo, el Foro Romano y disfrutamos de una auténtica
                        pizza
                        italiana.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Mis Notas de Viaje - Página Izquierda</h2>
                    <p className="mb-2">Lugar: París</p>
                    <p className="mb-2">Fecha: 12/05/2024</p>
                    <p className="mb-2">Experiencias: Visitamos la Torre Eiffel, paseamos por el Sena y disfrutamos de la
                        gastronomía local.</p>
                </div>
            </div>
        )
    ;

    return (
        <OpenBook
            leftPageContent={leftPageContent}
            rightPageContent={rightPageContent}
        />
    );
}

export default App
