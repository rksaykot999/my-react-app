export default function () {
    return (
        <div
            className="hero min-h-[30vh]"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hi, I'm RK Saykot</h1>
                    <p className="mb-5">
                        I create modern, responsive, and user-friendly websites that deliver exceptional user experiences and drive business results.
                    </p>
                    <div className="flex justify-center gap-5">
                        <button className="btn btn-primary">View My Work</button>
                        <button className="btn btn-success">Download CV</button>
                    </div>

                </div>
            </div>
        </div>
    )
}