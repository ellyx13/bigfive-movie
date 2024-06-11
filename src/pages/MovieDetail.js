import React from 'react';
import '../assets/styles/global.css';
import '../assets/styles/signIn.css';



function Rating({ src, rating, votes }) {
    return (
        <div className="flex gap-1.5 items-center">
            <img loading="lazy" src={src} className="shrink-0 self-stretch w-7 aspect-square" alt="Rating icon" />
            <div className="self-stretch my-auto text-xl font-bold tracking-normal leading-6 text-white">{rating}</div>
            <div className="self-stretch my-auto text-xs tracking-wide leading-3 text-zinc-400">{votes} <br /> đánh giá </div>
        </div>
    );
}

function Language({ src, language }) {
    return (
        <div className="flex gap-2.5">
            <img loading="lazy" src={src} className="shrink-0 w-9 aspect-square fill-white" alt="Language flag" />
            <div className="my-auto">{language}</div>
        </div>
    );
}

function Review({ username, date, src, rating, content }) {
    return (
        <article className="flex flex-col items-start mt-4 max-md:max-w-full">
            <div className="flex gap-1.5 pb-3">
                <div className="flex overflow-hidden relative flex-col justify-center items-center w-9 rounded-full aspect-square">
                    <img loading="lazy" src={src} className="object-cover absolute inset-0 size-full" alt={username} />
                    <img loading="lazy" src={src} className="w-full rounded-full aspect-square" alt={username} />
                </div>
                <div className="my-auto text-xs tracking-wide leading-3 text-zinc-400">
                    <span className="text-sm">{username}</span> <br />
                    <span className="text-zinc-400">{date}</span>
                </div>
            </div>
            <div className="flex gap-1.5 mt-1 pb-2">
                <div className="flex overflow-hidden relative flex-col justify-center items-center w-3 aspect-square ">
                    <img loading="lazy" src={rating} className="object-cover absolute inset-0 size-full" alt="Rating icon" />
                    <img loading="lazy" src={rating} className="w-full aspect-square" alt="Rating icon" />
                </div>
                <div className="text-xs tracking-wide leading-3 text-zinc-400">10/10 · {content}</div>
            </div>
            <div className="self-stretch text-xs tracking-wide leading-3 text-zinc-400 max-md:max-w-full pb-3">{content}</div>
        </article>
    );
}



const MovieDetailPage = () => {
    return (
        <div className="flex flex-col items-center px-12 py-11 bg-zinc-900 max-md:px-5">
            <header className="flex gap-5 items-center self-stretch w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto self-stretch my-auto text-4xl font-bold leading-10 text-red-500">bigfive.movie</div>
                <nav className="flex gap-5 justify-between self-stretch my-auto text-lg tracking-normal leading-6 text-zinc-400 max-md:flex-wrap max-md:max-w-full">
                    <div className="text-white">Trang chủ</div>
                    <div className="my-auto">Phim</div>
                    <div>Sắp chiếu</div>
                    <div>Hội viên</div>
                    <div>Liên hệ</div>
                </nav>
                <div className="flex gap-5 self-stretch text-white max-md:flex-wrap">
                    <div className="flex flex-auto gap-5 justify-between px-5 py-3 text-lg tracking-normal leading-6 rounded-lg border border-gray-700 border-solid">
                        <Language src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e89752ce838086cff4894b7dfec698e0dee0a01fa85d888274933da73408735?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" language="Tiếng việt" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2727f76c503b489b03418ce376cc91059380049fc67b90bd53e89b3cacf546b5?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 my-auto w-5 aspect-[1.54] fill-white" alt="" />
                    </div>
                    <button className="justify-center px-9 py-5 text-2xl font-bold leading-7 bg-red-500 rounded-xl border border-rose-700 border-solid max-md:px-5">ĐĂNG NHẬP</button>
                </div>
            </header>

            <main className="mt-10 max-w-full w-[927px] max-md:mt-10">
                <section className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <article className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f8c850d66005febe15f23991a2607b6ec0d8cf798ce87e746e3ad921412b142?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="grow w-full aspect-[0.75] max-md:mt-10" alt="Poster" />
                    </article>

                    <article className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                            <div className="justify-center items-center px-1.5 w-5 h-5 text-sm tracking-normal leading-5 text-white whitespace-nowrap bg-sky-600 rounded">K</div>
                            <h1 className="mt-4 text-4xl font-bold leading-10 text-white max-md:max-w-full">Lật Mặt 7: Một Điều Ước</h1>

                            <div className="flex gap-5 justify-between self-start mt-2">
                                <Rating src="https://cdn.builder.io/api/v1/image/assets/TEMP/7192fd5d4e6fb0a7b79ab38f081866fff5aa5a63d80e28ce904a282617d0c2cd?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" rating="9.6" votes="28.6k" />
                                <div className="flex gap-5 justify-between my-auto text-xs tracking-wide leading-3 text-center text-zinc-400">
                                    <div>Thời lượng <br /> 160 phút</div>
                                    <div>Năm sản xuất <br /> 2024</div>
                                </div>
                            </div>

                            <h2 className="mt-11 text-lg font-bold tracking-normal leading-6 text-white max-md:mt-10 max-md:max-w-full">Nội dung</h2>
                            <p className="mt-1.5 text-sm tracking-normal leading-5 text-zinc-400 max-md:max-w-full">Qua những lát cắt đan xen, ẩn chứa nhiều nụ cười và cả nước mắt, &quot;Lật Mặt 7: Một Điều Ước&quot; là câu chuyện cảm động về đại gia đình bà Hai 73 tuổi - người mẹ đơn thân tự mình nuôi 5 người con khôn lớn. Khi trưởng thành, mỗi người đều có cuộc sống và gia đình riêng. Bất chợt, biến cố ập đến, những góc khuất dần được hé lộ, những nỗi niềm, lo lắng, trĩu nặng ẩn sâu trong trái tim người mẹ. Trách nhiệm thuộc về ai?</p>

                            <div className="flex gap-5 justify-between mt-6 text-sm tracking-normal leading-5 text-white max-md:flex-wrap">
                                <div>Ngày ra mắt <br /><span className="font-bold text-white">26/04/2024</span></div>
                                <div>Thể loại <br /><span className="font-bold text-white"> Gia đình, Hài, Tình cảm </span></div>
                                <div>Quốc gia <br /><span className="font-bold text-white">Việt Nam</span></div>
                            </div>

                            <div className="flex gap-5 justify-between self-start mt-11 max-md:mt-10">
                                <button className="justify-center px-4 py-3.5 text-2xl font-bold leading-7 text-white bg-red-500 rounded-lg border border-rose-700 border-solid">Đặt vé ngay</button>
                                <div className="flex gap-1.5 my-auto text-sm tracking-normal leading-5 text-zinc-400">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/658a4d5962a94cb0e354c1b3ca19a509d411c8e085db61e0c3fa57b218b95b9e?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 w-7 aspect-square" alt="Play icon" />
                                    <div className="my-auto">Xem trailer</div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                <section className="mt-11 max-w-full w-[1200px] max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full pb-2.5">
                            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full pb-2.5">
                                <h2 className="text-3xl font-bold text-white max-md:max-w-full pb-8">Nhận xét của người xem</h2>
                                <Rating src="https://cdn.builder.io/api/v1/image/assets/TEMP/7192fd5d4e6fb0a7b79ab38f081866fff5aa5a63d80e28ce904a282617d0c2cd?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" rating="9.6/10" votes="28.6k đánh giá" />
                                <Review username="Phạm Lê Tuấn Kiệt" date="1 ngày trước" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0b59d94490b90d94e3a0fecba4133c106f80cd46dae119e77bf36dec443800?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" rating="https://cdn.builder.io/api/v1/image/assets/TEMP/766c7270d0193607ad0220d09417175ce27bf4e0d53a5b6a2f360990f738c75f?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" content="Cực phẩm!" />
                                <Review username="Phạm Lê Tuấn Kiệt" date="1 ngày trước" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0b59d94490b90d94e3a0fecba4133c106f80cd46dae119e77bf36dec443800?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" rating="https://cdn.builder.io/api/v1/image/assets/TEMP/766c7270d0193607ad0220d09417175ce27bf4e0d53a5b6a2f360990f738c75f?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" content="Cực phẩm!" />
                                <Review username="Phạm Lê Tuấn Kiệt" date="1 ngày trước" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0b59d94490b90d94e3a0fecba4133c106f80cd46dae119e77bf36dec443800?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" rating="https://cdn.builder.io/api/v1/image/assets/TEMP/766c7270d0193607ad0220d09417175ce27bf4e0d53a5b6a2f360990f738c75f?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" content="Cực phẩm!" />
                            </div>
                        </article>

                        <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                                <h2 className="text-3xl font-bold text-white max-md:max-w-full pb-8">Hình ảnh & Video</h2>
                                <div className="mt-4 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c11aba31b12a7b80fe64780bd49e49146512d1d7b26877b4b9179bd545be491d?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="grow w-full aspect-[1.82] max-md:mt-4" alt="Image 1" />
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fbc3a1bca451ef676eb3c45b6f874f5b5586f0201c78d5b351b7c24d25f73a6?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="grow w-full aspect-[1.85] max-md:mt-4" alt="Image 2" />
                                    </div>
                                </div>
                                <div className="mt-3.5 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/626d26895d7108bb2386e84e18de213397d5724f8575c493d6d7b92d99856227?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="grow w-full aspect-[1.79] max-md:mt-4" alt="Image 3" />
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bbe36d46a01c8ccb7e0fb6a2081947a75d54485fb7d0fe8dc182a3f0b9513dd?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="grow w-full aspect-[1.79] max-md:mt-4" alt="Image 4" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MovieDetailPage;
