'use client'
import { useCreateUser } from "@client/src/services/users"
import { toast, ToastContainer } from "react-toastify";
import { useRegisterForm } from "./hooks/use-register-form";
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const fromRegister = useRegisterForm();
    const fromCreateUser = useCreateUser({
        onCompleted: () => toast('User created successfully!'),
        onError: () => toast('An error occurred while creating a new user!')
    });

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fromCreateUser.call({
            ...fromRegister.data
        })
    };

    return (
        <main className="">
            <ToastContainer
                position="top-center"
            />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-20 w-auto" src="/logo.png" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="name" value={fromRegister.data?.name} onChange={(e) => fromRegister.onChangeName(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        {/* <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                            <div className="mt-2">
                                <input id="lastName" name="lastName" type="lastName" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div> */}
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" value={fromRegister.data?.email} onChange={(e) => fromRegister.onChangeEmail(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        {/*  <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Create your password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Confirm your password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div> */}
                        <div>
                            <button onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">Register</button>
                        </div>
                    </form>
                </div>
            </div >
        </main >
    )
}