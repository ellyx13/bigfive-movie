import React from 'react';

function LanguageSelector() {
    return (
        <div className="flex flex-auto gap-5 justify-between px-5 py-3 text-lg tracking-normal leading-6 rounded-lg border border-gray-700 border-solid">
            <div className="flex gap-2.5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e89752ce838086cff4894b7dfec698e0dee0a01fa85d888274933da73408735?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 w-9 aspect-square fill-white" alt="Language icon" />
                <div className="my-auto">Tiếng việt</div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2727f76c503b489b03418ce376cc91059380049fc67b90bd53e89b3cacf546b5?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 my-auto w-5 aspect-[1.54] fill-white" alt="Dropdown icon" />
        </div>
    );
}

function MovieCard({ movie }) {
    return (
        <div className="flex flex-col grow max-md:mt-10">
            <div className="overflow-hidden px-4 pt-4 pb-20">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[88%] max-md:ml-0 max-md:w-full">
                        <div className="flex gap-4 px-4 py-2.5 w-full text-lg tracking-normal leading-5 text-white rounded border border-solid backdrop-blur-[1.5px] bg-zinc-400 bg-opacity-50 border-zinc-300 border-opacity-70 max-md:mt-10">
                            <img loading="lazy" src={movie.ratingIcon} className="shrink-0 w-6 aspect-square" alt={`Rating: ${movie.rating}`} />
                            <div className="my-auto">{movie.rating} sao</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[12%] max-md:ml-0 max-md:w-full">
                        <img loading="lazy" src={movie.icon} className="shrink-0 aspect-[1.09] fill-white w-[38px] max-md:mt-10" alt="Movie icon" />
                    </div>
                </div>
            </div>
            <div className="mt-2 text-2xl font-bold tracking-normal leading-6 text-white">{movie.title}</div>
            <div className="mt-4 text-base font-medium tracking-wide leading-4 text-zinc-400">{movie.genre}</div>
        </div>
    );
}

const movies = [
    { title: 'Doraemon: Bản giao hưởng địa cầu', rating: '9.5', ratingIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7bbd416bfbb667ad012aec83d8d887cc9e92f7502b914fab16959442289516?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c64087d9c2023ede5300c32b29f835707e83526e491c1146cf689558a18e87e3?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', genre: 'Khoa học Viễn tưởng, Hoạt hình' },
    { title: 'Móng vuốt', rating: '8', ratingIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7bbd416bfbb667ad012aec83d8d887cc9e92f7502b914fab16959442289516?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a734bc2e2facdb945dad83aa548e1e56658ad156166332d4da1040a457cd204?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', genre: 'Kinh dị, hài' },
    { title: 'Vây Hãm: Kẻ Trừng Phạt', rating: '4.7', ratingIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7bbd416bfbb667ad012aec83d8d887cc9e92f7502b914fab16959442289516?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a734bc2e2facdb945dad83aa548e1e56658ad156166332d4da1040a457cd204?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', genre: 'Chính kịch, Hành động, Hình sự' },
    { title: 'Án Mạng Lầu 4', rating: '4.7', ratingIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7bbd416bfbb667ad012aec83d8d887cc9e92f7502b914fab16959442289516?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a734bc2e2facdb945dad83aa548e1e56658ad156166332d4da1040a457cd204?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', genre: 'Gay cấn, Hình sự' },
    { title: 'Stalker: Tội Ác Hoàn Hảo', rating: '4.7', ratingIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7bbd416bfbb667ad012aec83d8d887cc9e92f7502b914fab16959442289516?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c64087d9c2023ede5300c32b29f835707e83526e491c1146cf689558a18e87e3?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', genre: 'Bí ẩn, Gay cấn' },
    { title: 'Tarot', rating: '4.7', ratingIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7bbd416bfbb667ad012aec83d8d887cc9e92f7502b914fab16959442289516?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a734bc2e2facdb945dad83aa548e1e56658ad156166332d4da1040a457cd204?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', genre: 'Gay cấn, Kinh dị' },
    { title: 'Ngôi Đền Kỳ Quái 4', rating: '4.7', ratingIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7bbd416bfbb667ad012aec83d8d887cc9e92f7502b914fab16959442289516?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a734bc2e2facdb945dad83aa548e1e56658ad156166332d4da1040a457cd204?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', genre: 'Hài, Kinh dị' },
    { title: 'Gia Tài Của Ngoại', rating: '4.7', ratingIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb7bbd416bfbb667ad012aec83d8d887cc9e92f7502b914fab16959442289516?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a734bc2e2facdb945dad83aa548e1e56658ad156166332d4da1040a457cd204?apiKey=121a915ce1474cf6af7b9f7ae8029fda&', genre: 'Chính kịch' },
];


const HomePage = () => {
    return (
        <div className="flex flex-col justify-center py-9 bg-zinc-900">
            <div className="flex gap-5 items-center self-center px-5 w-full max-w-[1820px] max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto self-stretch my-auto text-4xl font-bold leading-10 text-red-500">bigfive.movie</div>
                <nav className="flex gap-5 justify-between self-stretch my-auto text-lg tracking-normal leading-6 text-zinc-400 max-md:flex-wrap max-md:max-w-full">
                    <a href="/#" className="text-white">Trang chủ</a>
                    <a href="/#">Phim</a>
                    <a href="/#">Sắp chiếu</a>
                    <a href="/#">Hội viên</a>
                    <a href="/#">Liên hệ</a>
                </nav>
                <div className="flex gap-5 self-stretch text-white max-md:flex-wrap">
                    <LanguageSelector />
                    <button className="justify-center px-9 py-5 text-2xl font-bold leading-7 bg-red-500 rounded-xl border border-rose-700 border-solid max-md:px-5">
                        ĐĂNG NHẬP
                    </button>
                </div>
            </div>
            <section className="flex flex-col justify-center mt-10 w-full text-white border-b border-gray-700 border-solid max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col items-start px-16 py-20 w-full min-h-[600px] max-md:px-5 max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30bc78033f0450bd39ccd79ee27ec166cb4932170b8a1bee39232f6bc9502e6b?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="object-cover absolute inset-0 size-full" alt="Movie background" />
                    <h1 className="relative mt-4 text-6xl font-extrabold tracking-tight leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                        Lật Mặt 7<br />
                        Một Điều Ước
                    </h1>
                    <p className="relative mt-6 text-sm tracking-normal leading-5 w-[643px] max-md:max-w-full">
                        &quot;Lật Mặt 7: Một Điều Ước&quot; là câu chuyện cảm động về đại gia đình bà Hai 73 tuổi - người mẹ đơn thân tự mình nuôi 5 người con khôn lớn. Bất chợt, biến cố ập đến, những góc khuất dần được hé lộ, những nỗi niềm, lo lắng, trĩu nặng ẩn sâu trong trái tim người mẹ. Trách nhiệm thuộc về ai?
                    </p>
                    <div className="flex relative gap-5 justify-between mt-6 text-sm tracking-normal leading-5">
                        <div className="justify-center px-3 py-2 text-black bg-white rounded">K 13+</div>
                        <div className="flex gap-1 font-bold whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/24563d95b3b2e8e5adb43be0c499fce5ea15a5a720876bbb966faea481532d86?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 w-6 aspect-[0.96] fill-rose-700" alt="Movie release year" />
                            <div className="my-auto">2024</div>
                        </div>
                        <div className="flex gap-0.5">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/31650c456668c46021e403ddedbc38eee6a0d19bd2a5300a143c91e9c4724d3a?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 aspect-square fill-rose-700 w-[25px]" alt="Movie duration" />
                            <div className="my-auto">120 phút</div>
                        </div>
                    </div>
                    <div className="relative mt-6 text-sm tracking-normal leading-5 max-md:max-w-full">
                        <span className="font-bold">Đạo diễn: </span>Lý Hải <br />
                        <span className="font-bold">Diễn viên: </span>Thanh Hiền, Quách Ngọc Tuyên, Trâm Anh <br />
                        <span className="font-bold">Thể loại: </span>Gia đình, Hài, Tình cảm
                    </div>
                    <div className="flex relative gap-5 justify-between mt-6 max-w-full text-white w-[356px]">
                        <button className="justify-center items-center px-16 py-5 text-2xl font-bold leading-7 bg-red-500 rounded-xl border border-rose-700 border-solid max-md:px-5">
                            Đặt vé
                        </button>
                        <button className="my-auto text-lg tracking-normal leading-6">Xem chi tiết</button>
                    </div>
                </div>
            </section>
            <section className="flex flex-col px-12 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-5xl font-extrabold text-white leading-[52.2px] max-md:max-w-full max-md:text-4xl">Phim hay đang chiếu</h2>
                <section className="px-px mt-8 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {movies.slice(0, 4).map((movie, index) => (
                            <MovieCard key={index} movie={movie} />
                        ))}
                    </div>
                </section>
                <section className="px-px mt-12 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {movies.slice(4).map((movie, index) => (
                            <MovieCard key={index} movie={movie} />
                        ))}
                    </div>
                </section>
            </section>
            <nav className="flex gap-5 justify-between self-center mt-9 text-lg tracking-normal leading-6 text-zinc-400 max-md:flex-wrap">
                <button className="flex gap-2.5 px-4 py-4 rounded-lg border border-gray-700 border-solid bg-zinc-900">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f369158ea951a6dbdbd92688e136d89605b9974d026127d712d90d319bcc09e6?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 self-start w-3 aspect-[0.63] fill-zinc-400" alt="Previous page" />
                    Trang trước
                </button>
                <button className="justify-center items-center px-5 text-white whitespace-nowrap bg-red-500 rounded-lg border border-rose-700 border-solid h-[50px] w-[50px] max-md:pr-5">
                    1
                </button>
                <button className="justify-center items-center px-5 whitespace-nowrap rounded-lg border border-gray-700 border-solid bg-zinc-900 h-[50px] w-[50px] max-md:pr-5">
                    2
                </button>
                <button className="justify-center items-center px-5 whitespace-nowrap rounded-lg border border-gray-700 border-solid bg-zinc-900 h-[50px] w-[50px] max-md:pr-5">
                    3
                </button>
                <button className="justify-center items-center px-5 whitespace-nowrap rounded-lg border border-gray-700 border-solid bg-zinc-900 h-[50px] w-[50px] max-md:pr-5">
                    4
                </button>
                <button className="justify-center items-center px-5 whitespace-nowrap rounded-lg border border-gray-700 border-solid bg-zinc-900 h-[50px] w-[50px] max-md:pr-5">
                    5
                </button>
                <button className="justify-center items-center px-5 whitespace-nowrap rounded-lg border border-gray-700 border-solid bg-zinc-900 h-[50px] w-[50px] max-md:pr-5">
                    6
                </button>
                <button className="justify-center items-center px-5 whitespace-nowrap rounded-lg border border-gray-700 border-solid bg-zinc-900 h-[50px] w-[50px] max-md:pr-5">
                    7
                </button>
                <button className="justify-center items-center px-5 whitespace-nowrap rounded-lg border border-gray-700 border-solid bg-zinc-900 h-[50px] w-[50px] max-md:pr-5">
                    8
                </button>
                <button className="justify-center items-center px-5 whitespace-nowrap rounded-lg border border-gray-700 border-solid bg-zinc-900 h-[50px] w-[50px] max-md:pr-5">
                    9
                </button>
                <button className="flex gap-3 px-6 py-4 rounded-lg border border-gray-700 border-solid bg-zinc-900 max-md:px-5">
                    Trang sau
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e22fc77aa75852368210866efc13113bbfea35eb205194f46e9b0af0da3c68c?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 self-start w-3 aspect-[0.63] fill-zinc-400" alt="Next page" />
                </button>
            </nav>
            <footer className="flex gap-5 justify-between items-start self-center mt-12 w-full text-lg leading-6 max-w-[1722px] text-zinc-400 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col mt-1.5">
                    <h3 className="text-4xl font-bold leading-10 text-red-500">bigfive.movie</h3>
                    <p className="mt-4 tracking-normal">Website đặt vé xem phim hàng đầu Việt Nam</p>
                    <h4 className="mt-9 text-3xl font-bold leading-9 text-white">Thông tin liên hệ</h4>
                    <div className="shrink-0 h-0.5 bg-white border-2 border-white border-solid" />
                    <address className="flex gap-1.5 mt-4 tracking-normal">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdb25b991415655e3cb983303884884f00dae9b547418adf1cfb22f272a5fb04?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 w-9 aspect-square" alt="Address icon" />
                        <div className="flex-auto my-auto">140 Lê Trọng Tấn</div>
                    </address>
                    <div className="flex gap-1.5 self-start mt-3.5 tracking-normal">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe0d8d0ceb572dbd271486e456685cd673b99fef81dd56fb631c2376b137c829?apiKey=121a915ce1474cf6af7b9f7ae8029fda&" className="shrink-0 w-9 aspect-square" alt="Phone icon" />
                        <div className="flex-auto my-auto">+84 01231231</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-3xl font-bold leading-9 text-white">Dịch vụ</h4>
                    <div className="shrink-0 h-0.5 bg-white border-2 border-white border-solid" />
                    <p className="mt-7 tracking-normal">Đăng nhập</p>
                    <p className="mt-8 tracking-normal">Đăng ký hội viên</p>
                    <p className="mt-8 tracking-normal">Đặt vé</p>
                    <p className="mt-7 tracking-normal">Thanh toán</p>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-3xl font-bold leading-9 text-white">Danh mục phim</h4>
                    <div className="shrink-0 h-0.5 bg-white border-2 border-white border-solid" />
                    <p className="mt-7 tracking-normal">Phim hoạt hình</p>
                    <p className="mt-8 tracking-normal">Phim hành động</p>
                    <p className="mt-8 tracking-normal">Phim kinh dị</p>
                    <p className="mt-7 tracking-normal">Phim hài</p>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-3xl font-bold leading-9 text-white">Chăm sóc khách hàng</h4>
                    <div className="shrink-0 h-0.5 bg-white border-2 border-white border-solid" />
                    <p className="mt-7 tracking-normal">Phàn nàn với nhân viên</p>
                    <p className="mt-9 tracking-normal">Đánh giá trang web</p>
                    <p className="mt-7 tracking-normal">Hỏi thăm nhân viên</p>
                    <p className="mt-8 tracking-normal">Hỗ trợ trả góp</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
