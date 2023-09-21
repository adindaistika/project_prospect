import Link from 'next/link';

const Login = () => {
    return (
        <div className="min-h-screen px-20px grid place-items-center">
            <div className="w-full md:max-w-lg p-8 rounded-lg shadow-lg bg-white text-sky-600">
                <img src="/static/auth/logo.png" className="w-[90px] m-auto"></img>
                <h1 className="text-center mt-5 text-2xl font-bold">LOGIN PAGE</h1>
                <form className="flex flex-col gap-1" action="">
                    <label className="flex my-2 flex-col gap-1 text-xs w-full">
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
                    <label className="flex my-2 flex-col gap-1 text-xs w-full">
                        <span className="text-xs font-bold text-sky-600">Password</span>
                        <input
                            className="p-3 w-full rounded-md outline-none border border-sky-600 text-sky"
                            type="password"
                            required
                            placeholder="Your Password"
                            name="password"
                            id="Password"
                        />
                    </label>
                    <Link href={'/login'}></Link>
                    <button className="bg-sky-600 hover:bg-transparent hover:text-sky-600 border-2 transition-all ease-in-out border-sky-600 p-3 text-xs rounded-md text-white font-bold">Login Now</button>
                </form>
                <p className="text-xs font-semibold text-center mb-10">
                    Dont have account? Sign in
                </p>
            </div>
        </div>
    );
};


export default Login;
