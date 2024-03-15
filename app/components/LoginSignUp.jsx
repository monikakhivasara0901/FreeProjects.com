import { useState } from 'react';

const LoginSignUp = () => {
    const [signup, setSignup] = useState(false);

    const toggleSignup = () => {
        setSignup(prevState => !prevState);
    };

    return (
        <div className="flex items-center justify-center absolute left-[40%]">
            <div className="container w-[58vh] px-6 py-8 bg-white rounded-lg shadow-md justify-center items-center ">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">{signup ? "Sign Up" : "Welcome back!"}</h2>
                <p className="text-center text-gray-700 mb-6">{signup ? "Join us to explore new opportunities." : "Your Next Project is Just a Click Away."}</p>
                <form className="space-y-4">
                    {signup && (
                        <div>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    )}
                    {signup && (
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    )}
                    <div>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="w-full px-4 py-3 border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 border-2 border-gray-350 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">{signup ? 'Sign Up' : 'Login'}</button>
                </form>
                <p className="mt-4 text-center text-gray-800">
                    {signup ? 'Already have an account?' : 'Create New Account?'}
                    <button onClick={toggleSignup} className="text-blue-600 hover:underline ml-1">{signup ? 'Login' : 'Sign Up'}</button>
                </p>
            </div>
        </div>
    );
}

export default LoginSignUp;