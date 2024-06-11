import React from 'react';
import '../assets/styles/global.css';
import '../assets/styles/signIn.css';


function ReusableFormInput({ type, label, placeholder, id }) {
    return (
        <>
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <div className="rounded-xl overflow-hidden relative flex-col justify-center items-start px-5 py-6 mt-20 text-2xl leading-8 border border-solid border-white border-opacity-70 min-h-[70px] text-zinc-400 w-[501px] max-md:mt-10 max-md:max-w-full">
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    aria-label={label}
                    className="pl-1.5 w-full bg-transparent focus:outline-none"
                />
            </div>
        </>
    );
}

function ReusableSection({ children }) {
    return (
        <section className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            {children}
        </section>
    );
}


const SignInPage = () => {
    return (
        <div className="flex flex-col justify-center bg-white">
            <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[1201px] max-md:px-5 max-md:max-w-full">
                <img
                    className="object-cover absolute inset-0 size-full page"
                    alt=''
                />
                <div className="relative mt-11 mb-11 w-full max-w-[1723px] max-md:my-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <section className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                            <header className="flex relative flex-col self-stretch my-auto font-bold max-md:mt-10 max-md:max-w-full">
                                <h1 className="self-center text-8xl leading-10 text-red-500 max-md:max-w-full max-md:text-4xl">
                                    bigfive.movie
                                </h1>
                                <p className="mt-5 text-6xl tracking-tight text-center leading-[64px] text-white text-opacity-70 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                                    Tận hưởng những bộ phim hoành tráng <br /> ngay tại rạp
                                </p>
                            </header>
                        </section>
                        <ReusableSection>
                            <section className="flex relative flex-col grow items-center px-20 py-20 w-full rounded-3xl backdrop-blur-[35px] bg-neutral-400 bg-opacity-40 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <h2 className="text-6xl font-bold tracking-tight text-white leading-[63.84px] max-md:text-4xl">
                                    Xin chào
                                </h2>
                                <form>
                                    <ReusableFormInput
                                        type="email"
                                        label="Địa chỉ email"
                                        placeholder="Địa chỉ email"
                                        id="emailInput"
                                    />
                                    <ReusableFormInput
                                        type="password"
                                        label="Mật khẩu"
                                        placeholder="Mật khẩu"
                                        id="passwordInput"
                                    />
                                </form>
                                <p className="self-stretch mt-3.5 text-lg tracking-normal leading-6 text-zinc-400 max-md:max-w-full">
                                    Quên mật khẩu?
                                </p>
                                <button className="items-center self-stretch px-16 pt-7 pb-4 mt-9 text-3xl font-medium text-white bg-red-500 rounded-xl max-md:px-5 max-md:max-w-full">
                                    Đăng nhập
                                </button>
                                <div className="self-stretch mt-9 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow mt-1.5 max-md:mt-7">
                                                <div className="shrink-0 h-px border border-solid bg-zinc-400 border-zinc-400" />
                                                <div className="flex flex-col justify-center items-start px-16 py-4 mt-8 rounded-xl border border-solid border-zinc-400 max-md:px-5">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7810840dace846f2c1fe1c3c4cace9665a867bbf71f8102633ab106f10a4ea45?apiKey=121a915ce1474cf6af7b9f7ae8029fda&"
                                                        className="ml-2.5 w-10 aspect-square"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow max-md:mt-5">
                                                <div className="flex gap-5 justify-between text-lg tracking-normal leading-6 whitespace-nowrap text-zinc-400">
                                                    <span>hoặc</span>
                                                    <div className="shrink-0 my-auto h-px border border-solid bg-zinc-400 border-zinc-400 w-[210px]" />
                                                </div>
                                                <div className="flex justify-center items-center self-end px-16 py-4 mt-6 max-w-full rounded-xl border border-solid border-zinc-400 w-[180px] max-md:px-5">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f690f0f53e0d4f86affe684b0c418bd3b4892eb21d8011b4b26d565a6afc059?apiKey=121a915ce1474cf6af7b9f7ae8029fda&"
                                                        className="w-full aspect-square"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-11 text-lg tracking-normal leading-6 text-red-500 max-md:mt-10">
                                    Không có tài khoản?{" "}
                                    <span className="text-red-500">Đăng ký ngay</span>
                                </p>
                            </section>
                        </ReusableSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
