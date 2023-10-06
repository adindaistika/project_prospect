import Link from 'next/link';

const Signup = () => {
    return (
        <div className="w-full px-[30px]  grid place-items-center">
            <div className="w-full md:max-w-lg p-5 rounded-lg shadow-lg bg-white text-sky-600">
                <img src="/static/auth/logo.png" className="w-[90px] m-auto"></img>
                <h1 className="text-center mt-5 text-2xl font-bold">SIGN UP PAGE</h1>
                <p className="text-xs text-center mb-10">
                    Please login with your account!
                </p>

                <form className="md:flex flex-col w-full" action="">
                    <div className="grid grid-cols-2 gap-3 ">
                        <label className="flex my-2 flex-col gap-1 text-xs w-full">
                            <span className="text-xs font-bold text-sky-600">First Name</span>
                            <input
                                className="p-3 rounded-md outline-none border border-sky-600 text-sky"
                                type="text"
                                required
                                placeholder="Your First Name"
                                name="firstname"
                                id="firstname"
                            />
                        </label>
                        <label className="flex my-2 flex-col gap-1 text-xs w-ful">
                            <span className="text-xs font-bold text-sky-600">Last Name</span>
                            <input
                                className="p-3 rounded-md outline-none border border-sky-600 text-sky"
                                type="text"
                                required
                                placeholder="Your Last Name"
                                name="lastname"
                                id="lastname"
                            />
                        </label>
                    </div>
                    <label className="flex my-1 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-sky-600">Email</span>
                        <input
                            className="p-3 w-full rounded-md outline-none border border-sky-600 text-sky"
                            type="email"
                            required
                            placeholder="Your Email"
                            name="email"
                            id="email"
                        />
                    </label>
                    <label className="flex my-1 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-sky-600">Password</span>
                        <input
                            className="p-3 w-full rounded-md outline-none border border-sky-600 text-sky"
                            type="password"
                            required
                            placeholder="Your Password"
                            name="password"
                            id="password"
                        />
                    </label>
                    <Link href={'/sign up'}></Link>
                    <button className="bg-sky-600 hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold">Sign Up Account</button>
                    <p className="text-xs font-semibold text-center mb-10">
                        Have an account? Login
                    </p>
                </form>
            </div>
        </div>
    );
};


export default Signup;