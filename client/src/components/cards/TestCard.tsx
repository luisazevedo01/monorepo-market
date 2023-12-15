export const TestCard = () => {
    return (
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div className="mx-auto max-w-md">
                <img src="/logo.png" className="mx-auto h-20" alt="Logo" />
                <div className="divide-y divide-gray-300/50">
                    <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                        <p>Um mercado de produtos locais para promover o comércio local, junta-te a nós se:</p>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-lime-600 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>
                                <p className="ml-4">
                                    És dos Açores;
                                </p>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-lime-600 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>
                                <p className="ml-4">
                                    És fixe;
                                </p>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-lime-600 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>
                                <p className="ml-4">Estás à procura de produtos locais;</p>
                            </li>
                        </ul>
                        <p>Junta-te para teres acesso aos produtos mais frescos!!!</p>
                    </div>
                    <div className="pt-8 text-base font-semibold leading-7">
                        <p className="text-gray-900">Queres te juntar ao Mercadinho?</p>
                        <button
                            className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"

                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}