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
        className="forum-regular w-full py-8 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Banner.jpeg')" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-around text-center gap-6 text-[#2f241d]">

          <div>
            <h2 className="text-3xl md:text-5xl font-semibold">100%</h2>
            <p className="mt-2 text-base md:text-lg">Natural Products</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-semibold">15000+</h2>
            <p className="mt-2 text-base md:text-lg">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-semibold">250+</h2>
            <p className="mt-2 text-base md:text-lg">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-semibold">8+</h2>
            <p className="mt-2 text-base md:text-lg">Years Experience</p>
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