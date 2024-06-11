import React from 'react';


function Seat({ className, children }) {
    return (
        <div
            className={`justify-center items-center px-1.5 ${className} h-[25px] w-[25px]`}
        >
            {children}
        </div>
    );
}

function SeatRow({ seatData, classes }) {
    return (
        <div
            className={`flex gap-2.5 mt-2.5 max-w-full text-white whitespace-nowrap w-[270px] ${classes}`}
        >
            {seatData.map((seat, index) => (
                <Seat key={index} className={seat.className}>
                    {seat.label}
                </Seat>
            ))}
        </div>
    );
}

const seatRowsData = [
    [
        { label: "A1", className: "bg-gray-700" },
        { label: "A1", className: "bg-gray-700" },
        { label: "A1", className: "bg-gray-700" },
        { label: "A1", className: "bg-gray-700" },
        { label: "A1", className: "bg-gray-700" },
        { label: "A1", className: "bg-gray-700" },
        { label: "A1", className: "bg-gray-700" },
        { label: "A1", className: "bg-gray-700" },
    ],
];


const TicketPage = () => {
    return (
        <div className="flex flex-col px-12 py-9 bg-zinc-900 max-md:px-5">
            <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                        <header className="flex flex-col grow mt-5 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="flex-auto text-4xl font-bold leading-10 text-red-500">
                                    bigfive.movie
                                </div>
                                <nav className="flex gap-5 justify-between self-start text-lg tracking-normal leading-6">
                                    <div className="text-white">Trang chủ</div>
                                    <div className="my-auto text-zinc-400">Phim</div>
                                </nav>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d7b54a925d5c6625d0df07cb87736658c9646cfda1afed8800ccbeaf45a2481?apiKey=121a915ce1474cf6af7b9f7ae8029fda&"
                                alt=""
                                className="self-end mt-7 max-w-full aspect-[0.75] w-[300px]"
                            />
                        </header>
                    </div>
                    <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                        <header className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                            <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="flex gap-5 justify-between my-auto text-lg tracking-normal leading-6 text-zinc-400">
                                    <div>Sắp chiếu</div>
                                    <div>Hội viên</div>
                                    <div>Liên hệ</div>
                                </div>
                                <div className="flex gap-5 text-white max-md:flex-wrap">
                                    <div className="flex flex-auto gap-5 justify-between px-5 py-3 text-lg tracking-normal leading-6 rounded-lg border border-gray-700 border-solid">
                                        <div className="flex gap-2.5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e89752ce838086cff4894b7dfec698e0dee0a01fa85d888274933da73408735?apiKey=121a915ce1474cf6af7b9f7ae8029fda&"
                                                alt=""
                                                className="shrink-0 w-9 aspect-square fill-white"
                                            />
                                            <div className="my-auto">Tiếng việt</div>
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2727f76c503b489b03418ce376cc91059380049fc67b90bd53e89b3cacf546b5?apiKey=121a915ce1474cf6af7b9f7ae8029fda&"
                                            alt=""
                                            className="shrink-0 my-auto w-5 aspect-[1.54] fill-white"
                                        />
                                    </div>
                                    <div className="justify-center px-9 py-5 text-2xl font-bold leading-7 bg-red-500 rounded-xl border border-rose-700 border-solid max-md:px-5">
                                        ĐĂNG NHẬP
                                    </div>
                                </div>
                            </nav>
                            <div className="flex justify-center items-center px-16 py-3 mt-5 text-2xl leading-8 text-white rounded-xl border border-gray-700 border-solid max-md:px-5 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-wrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aabf735c1a6588222ec662ad3bbe3f1e6817414bedd9a60723ec93e9a8dbf0fb?apiKey=121a915ce1474cf6af7b9f7ae8029fda&"
                                        alt=""
                                        className="shrink-0 w-8 aspect-[1.1] fill-white"
                                    />
                                    <div className="flex-auto my-auto">
                                        <span className="text-zinc-400">Thời gian:</span>{" "}
                                        <span className="font-bold">01 - 04 tháng 6</span>
                                    </div>
                                </div>
                            </div>
                            <section className="mt-7">
                                {[1, 2, 3].map((day) => (
                                    <div
                                        className="flex gap-5 items-start pt-3 pr-20 pb-8 text-lg tracking-normal leading-6 text-white border-b border-solid border-zinc-400 max-md:flex-wrap max-md:pr-5"
                                        key={day}
                                    >
                                        <div className="leading-6 text-center text-white">
                                            Ngày {day} <br /> Tháng 6
                                        </div>
                                        <div className={`mt-3${day === 2 ? " text-zinc-400" : ""}`}>
                                            {day === 1 ? "Thứ 7" : day === 2 ? "Chủ nhật" : "Thứ 2"}
                                        </div>
                                        <div className="justify-center px-6 py-3.5 whitespace-nowrap bg-gray-700 rounded-md max-md:px-5">
                                            12:30
                                        </div>
                                        <div className="justify-center px-6 py-3.5 whitespace-nowrap bg-gray-700 rounded-md max-md:px-5">
                                            15:00
                                        </div>
                                        <div className="justify-center px-6 py-3.5 whitespace-nowrap bg-gray-700 rounded-md max-md:px-5">
                                            17:10
                                        </div>
                                        <div className="justify-center px-6 py-3.5 whitespace-nowrap bg-gray-700 rounded-md max-md:px-5">
                                            19:45
                                        </div>
                                    </div>
                                ))}
                            </section>
                        </header>
                    </div>
                </div>
            </div>
            <main className="self-center mt-12 w-full max-w-[1318px] max-md:mt-10 max-md:max-w-full">
                <section className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-20 pt-12 pb-4 w-full text-sm tracking-normal leading-5 rounded-3xl bg-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/697c18d0afa2cebd8b27370f6246f40bed0cf7fda7bb4f75dccfcce2c4eba461?apiKey=121a915ce1474cf6af7b9f7ae8029fda&"
                                alt=""
                                className="self-center mr-5 ml-5 border-red-400 border-solid aspect-[14.29] border-[5px] stroke-[5px] stroke-red-400 w-[703px] max-md:max-w-full"
                            />
                            <div className="flex gap-5 justify-between items-start mt-11 mr-5 ml-5 max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                                {seatRowsData.map((rowData, index) => (
                                    <SeatRow key={index} seatData={rowData} classes="" />
                                ))}
                            </div>
                            <div className="flex gap-5 self-stretch mt-5 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col flex-1">
                                    <Seat className="rounded-md bg-zinc-900">A1</Seat>
                                    <div className="mt-2.5 text-zinc-400">Đã có người đặt</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <Seat className="bg-red-500 rounded-md">A1</Seat>
                                    <div className="mt-2.5 text-zinc-400">Ghế đang chọn</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <Seat className="bg-gray-700 rounded-md">A1</Seat>
                                    <div className="mt-2.5 text-zinc-400">Ghế còn trống</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-center px-8 py-7 mx-auto w-full text-white rounded-3xl bg-neutral-800 max-md:px-5 max-md:mt-10">
                            <div className="text-2xl leading-8">Thông tin đơn hàng</div>
                            <div className="flex gap-5 justify-between self-stretch mt-11 text-sm tracking-normal leading-5 max-md:mt-10">
                                <div className="flex flex-col">
                                    <div>Số ghế:</div>
                                    <div className="mt-7">Tên phim:</div>
                                    <div className="mt-7">Ngày chiếu:</div>
                                    <div className="mt-7">Thời gian:</div>
                                    <div className="mt-7">Giá vé:</div>
                                    <div className="mt-7">Tổng tiền:</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="self-end">F10, F11</div>
                                    <div className="mt-7">Lật Mặt 7: Một Điều Ước</div>
                                    <div className="flex flex-col pl-20 mt-7 max-md:pl-5">
                                        <div className="self-start">02/02/2024</div>
                                        <div className="self-start mt-7">17:10 - 19:10</div>
                                        <div className="self-end mt-8">100.000</div>
                                        <div className="self-end mt-8">200.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center px-11 py-6 mt-14 text-2xl font-bold leading-7 text-white bg-red-500 rounded-xl border border-rose-700 border-solid max-md:px-5 max-md:mt-10">
                                Thanh toán
                            </div>
                        </div>
                    </aside>
                </section>
            </main>
        </div>
    );
}

export default TicketPage;
