const Register = () => {
    return (
        <div className="h-dscreen bg-black flex flex-col items-center">
            <div className="logo bg-white h-32 w-32 my-20 p-2">
            </div>
            <div className="bg-white flex flex-col justify-center items-center rounded-tl-[100px] w-full h-full flex-1">
                <div className="flex flex-col items-center w-full p-4 m-2 px-8">
                    <h2 className="text-lg text-3xl my-2 w-full font-medium">Register</h2>
                    <div className="flex items-start w-full flex-col">
                        <h3 className="font-medium m-1">
                            Name
                        </h3>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="mb-4 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div className="flex items-start w-full flex-col">
                        <h3 className="font-medium m-1">
                            Email
                        </h3>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mb-4 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div className="flex items-start w-full flex-col">
                        <h3 className="font-medium m-1">
                            Password
                        </h3>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="mb-4 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div className="flex items-start w-full flex-col">
                        <h3 className="font-medium m-1">
                            Confirm Password
                        </h3>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="mb-4 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <button className="bg-black text-white w-full p-3 m-2 rounded-[10px]">
                        Sign up
                    </button>

                    <div className="flex-grow"></div>

                    <div className="text-center text-lg">
                        Already have an account? Login now!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
