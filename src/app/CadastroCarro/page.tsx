'use client'
import { useState } from 'react';
import Header from '@/components/header/page';
import Link from 'next/link';

export default function CadastroVeiculo() {
    const [formData, setFormData] = useState({
        usuario: '',
        marca: '',
        modelo: '',
        placa: '',
        ano: '',
        kmRodados: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        try {
            const response = await fetch('/api/cadastroVeiculo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message); 
                setFormData({ usuario: '', marca: '', modelo: '', placa: '', ano: '', kmRodados: '' }); 
            } else {
                setMessage(data.message); 
            }
        } catch (error) {
            console.error('Erro ao cadastrar veículo:', error);
            setMessage('Erro ao cadastrar veículo. Tente novamente mais tarde.');
        }
    };

    return (
        <>
            <Header />
            <div className="flex justify-center mt-8">
                <div className="w-full max-w-2xl p-6 bg-white border border-gray-300 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">Cadastre seu veículo</h2>
                    {message && <p className="text-center text-red-600">{message}</p>}
                    <form onSubmit={handleSubmit} id='CadastroCarro'>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <div className="sm:col-span-4">
                                    <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-900">
                                        Usuário (Email)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="usuario"
                                            name="usuario"
                                            type="text"
                                            value={formData.usuario}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-sky-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" 
                                            required
                                        />
                                    </div>
                                    <p>Não possui uma conta? <Link href="/login" className="text-indigo-600">Cadastre-se</Link></p>
                                </div>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label htmlFor="marca" className="block text-sm font-medium leading-6 text-gray-900">
                                            Marca
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="marca"
                                                name="marca"
                                                type="text"
                                                value={formData.marca}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-sky-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" 
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="modelo" className="block text-sm font-medium leading-6 text-gray-900">
                                            Modelo
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="modelo"
                                                name="modelo"
                                                type="text"
                                                value={formData.modelo}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-sky-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" 
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="placa" className="block text-sm font-medium leading-6 text-gray-900">
                                            Placa
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="placa"
                                                name="placa"
                                                type="text"
                                                value={formData.placa}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-sky-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" 
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="ano" className="block text-sm font-medium leading-6 text-gray-900">
                                            Ano
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="ano"
                                                name="ano"
                                                value={formData.ano}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-sky-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                                required
                                            >
                                                <option value="" disabled hidden>Selecione um ano</option>
                                                {Array.from({ length: 45 }, (_, i) => 1980 + i).map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="kmRodados" className="block text-sm font-medium leading-6 text-gray-900">
                                            KM rodada
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="kmRodados"
                                                name="kmRodados"
                                                value={formData.kmRodados}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-sky-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                                required
                                            >
                                                <option value="" disabled hidden>Selecione a KM correspondente</option>
                                                <option>10 km</option>
                                                <option>30 km</option>
                                                <option>50 km</option>
                                                <option>70 km</option>
                                                <option>90 km</option>
                                                <option>110 km</option>
                                                <option>130 km</option>
                                                <option>150 km</option>
                                                <option>170 km</option>
                                                <option>190 km</option>
                                                <option>200 km</option>
                                                <option>250 km</option>
                                                <option>300 km</option>
                                                <option>350 km</option>
                                                <option>400 km</option>
                                                <option>450 km</option>
                                                <option>500 km</option>
                                                <option>Nenhuma das opções</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
