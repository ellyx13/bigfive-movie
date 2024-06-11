import React from 'react';
import '../assets/styles/global.css';
import '../assets/styles/signIn.css';




function InputField({ id, label, type }) {
    return (
        <div className="rounded-xl overflow-hidden relative flex-col justify-center items-start px-5 py-6 mt-20 text-2xl leading-8 border border-solid border-white border-opacity-70 min-h-[70px] text-zinc-400 w-[501px] max-md:mt-10 max-md:max-w-full">
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <input
                id={id}
                type={type}
                className="pl-1.5 object-cover absolute inset-0 size-full bg-transparent focus:outline-none"
                placeholder={label}
            />
        </div>
    );
}




const SignUpPage = () => {
    return (
        <div className="flex flex-col justify-center bg-white">
            <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[1080px] max-md:max-w-full">
                <img
                    loading="lazy"
                    className="object-cover absolute inset-0 size-full page"
                    alt=""
                />
                <div className="flex relative justify-center items-center px-16 py-20 w-full bg-zinc-900 bg-opacity-60 max-md:px-5 max-md:max-w-full">
                    <div className="mt-11 mb-11 w-full max-w-[1723px] max-md:my-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                                <header className="flex flex-col self-stretch my-auto font-bold max-md:mt-10 max-md:max-w-full">
                                    <h1 className="self-center text-8xl leading-10 text-red-500 max-md:max-w-full max-md:text-4xl">
                                        bigfive.movie
                                    </h1>
                                    <h2
                                        className="mt-5 text-6xl tracking-tight text-center leading-[64px] text-white text-opacity-70 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]"
                                    >
                                        Tận hưởng những bộ phim hoành tráng <br /> ngay tại rạp
                                    </h2>
                                </header>
                            </div>

                            <section className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                                <form className="flex flex-col grow items-center px-20 pt-20 pb-11 w-full rounded-3xl backdrop-blur-[35px] bg-neutral-400 bg-opacity-40 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                    <legend className="text-6xl font-bold tracking-tight text-white leading-[63.84px] max-md:text-4xl">
                                        Đăng ký
                                    </legend>
                                    <InputField id="name" label="Họ và tên" type="text" />
                                    <InputField id="email" label="Email" type="email" />
                                    <InputField id="password" label="Mật khẩu" type="password" />
                                    <button
                                        type="submit"
                                        className="items-center self-stretch px-16 pt-6 pb-4 mt-12 text-3xl font-medium text-white bg-red-500 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
                                    >
                                        Đăng ký
                                    </button>
                                    <fieldset className="self-stretch mt-9 max-md:max-w-full">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col grow mt-1.5 max-md:mt-7">
                                                    <div className="shrink-0 h-px border border-solid bg-zinc-400 border-zinc-400" />
                                                    <button
                                                        type="button"
                                                        className="flex flex-col justify-center items-start px-16 py-4 mt-8 rounded-xl border border-solid border-zinc-400 max-md:px-5"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7810840dace846f2c1fe1c3c4cace9665a867bbf71f8102633ab106f10a4ea45?apiKey=121a915ce1474cf6af7b9f7ae8029fda&"
                                                            className="ml-2.5 w-10 aspect-square"
                                                            alt="Google Logo"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col grow max-md:mt-5">
                                                    <div className="flex gap-5 justify-between text-lg tracking-normal leading-6 whitespace-nowrap text-zinc-400">
                                                        <div>hoặc</div>
                                                        <div className="shrink-0 my-auto h-px border border-solid bg-zinc-400 border-zinc-400 w-[210px]" />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="flex justify-center items-center self-end px-16 py-4 mt-6 max-w-full rounded-xl border border-solid border-zinc-400 w-[180px] max-md:px-5"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f690f0f53e0d4f86affe684b0c418bd3b4892eb21d8011b4b26d565a6afc059?apiKey=121a915ce1474cf6af7b9f7ae8029fda&"
                                                            className="w-full aspect-square"
                                                            alt="Facebook Logo"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <p className="mt-8 text-lg tracking-normal leading-6 text-red-500">
                                        Đã có tài khoản?{" "}
                                        <a href="/login" className="text-red-500">
                                            Đăng nhập ngay
                                        </a>
                                    </p>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}









export default SignUpPage;
