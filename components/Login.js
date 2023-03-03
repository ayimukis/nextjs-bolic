import React from "react";
import Image from "next/image";
import {signIn} from "next-auth/react";

const Login = () => {
    return (
        <div className="flex flex-col items-center mx-auto">
            <Image
                src="/logo-white.png"
                width={240}
                height={240}
                alt="logo"
            />
            <a onClick={signIn} className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-neutral-600 rounded-md text-white">
                Login
            </a>
        </div>
    )
}

export default Login;