const Home = () => {
    return (
        <div className="min-h-dscreen bg-black flex flex-col items-center">
            <div className="logo bg-white h-32 w-32 my-20 p-2">
            </div>
            <div className="bg-white flex flex-col justify-center items-center rounded-tl-[100px] w-full h-full flex-1">
                <div className="flex flex-col items-center w-full p-4 m-2 px-8">
                    <h2 className="text-lg text-3xl my-2 w-full font-medium">Welcome</h2>
                    <h3 className="text-gray-600 mb-8">Sign up or Login to an existing account <br/> to get started!</h3>

                    <button className="bg-black text-white w-full p-3 m-2 rounded-[10px]">
                        Create an Account
                    </button>
                    <button className="border-black border-2 w-full p-3 m-2 rounded-[10px]">
                        Login to existing Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
