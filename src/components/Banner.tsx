import React from "react";

function Banner() {
    return (
        <section className="w-full py-6">

            {/* TOP LINE */}
            <div className="mb-6">
                <div className="mb-6 border-t border-[#7a8f6a]"></div>
            </div>

            {/* BANNER IMAGE */}
            <div
                className="w-full py-16 px-6 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Banner.jpeg')" }}
            >
                <div className="flex flex-col md:flex-row items-center justify-around text-center gap-10 text-[#4b3a2f]">

                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold">100%</h2>
                        <p className="mt-2">Natural Products</p>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold">15000+</h2>
                        <p className="mt-2">Happy Clients</p>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold">250+</h2>
                        <p className="mt-2">Projects Completed</p>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold">8+</h2>
                        <p className="mt-2">Years Experience</p>
                    </div>

                </div>
            </div>

            {/* BOTTOM LINE */}
            <div className="mt-6">
                <div className="mt-6 border-t border-[#7a8f6a]"></div>
            </div>

        </section>
    );
}

export default Banner;