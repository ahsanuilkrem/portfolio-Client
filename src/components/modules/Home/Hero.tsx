import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  return (
    // <div className="mb-10">
    //   <div className="max-h-screen w-full relative  ">
    //     {/* Crimson Depth */}
    //     <div
    //       className="absolute inset-0 z-0"
    //       style={{
    //         background:
    //           "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
    //       }}
    //     />

    //     <section className="relative flex flex-col items-center  text-center py-28 px-6 text-white  ">

    //       <div className="flex flex-col items-center justify-around ">
    //         <div className="w-full h-auto rounded-full ml-5 sm:text-center">
    //           <Image
    //             src={"https://i.ibb.co.com/kV5qhZjg/IMG-20250311-115453.jpg"}
    //             alt="this is photo"
    //             width={300}
    //             height={300}
    //             className="rounded-full 
    //            w-32 h-32 
    //            sm:w-48 sm:h-48 
    //            md:w-64 md:h-64 
    //            lg:w-80 lg:h-80 
    //            xl:w-96 xl:h-96 
    //            object-cover"  
    //           />
    //         </div>

    //         <div className="space-y-6">
    //           <h1 className="text-3xl md:text-2xl font-extrabold tracking-tight  ">
    //             Mohammed Ahsan    <br className="hidden md:block" />
    //             Full Stack Developer (MERN Stack)    
    //           </h1>


    //           <p className="mt-6 text-lg md:text-xl ">
    //             Enthusiastic and detail-oriented Junior Backend Developer with a strong foundation 
    //             in server-side development, API creation, and database management. Eager to contribute 
    //             to impactful backend systems and collaborate with cross-functional teams to build scalable web applications.
    //           </p>

    //           <div className="mt-10 flex flex-col sm:flex-row  justify-center">
    //             <Link
    //               href="/"
    //               className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl border border-input hover:bg-accent hover:text-accent-foreground transition"
    //             >
    //               My Resume
    //             </Link>
    //           </div>

    //         </div>

    //       </div>

    //     </section>
    //   </div>
    // </div>

    <div className="mb-10">
      <div className="max-h-screen w-full relative">
        {/* Crimson Depth */}
        <div
          className="absolute inset-0 z-0 h-full"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
          }}
        />

        <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 text-white">
          {/* Responsive Layout: Image + Text */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
            {/* Profile Image */}
            <div className="rounded-full overflow-hidden">
              <Image
                src="https://i.ibb.co.com/kV5qhZjg/IMG-20250311-115453.jpg"
                alt="Mohammed Ahsan"
                width={300}
                height={300}
                className="rounded-full 
              w-32 h-32 
              sm:w-48 sm:h-48 
              md:w-64 md:h-64 
              lg:w-72 lg:h-72 
              xl:w-80 xl:h-80 
              object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="text-white text-center lg:text-left max-w-2xl space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Mohammed Ahsan
                <br className="hidden lg:block" />
                <span className="text-accent"> Full Stack Developer (MERN)</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Enthusiastic and detail-oriented Junior Backend Developer with a strong foundation
                in server-side development, API creation, and database management. Eager to contribute
                to impactful backend systems and collaborate with cross-functional teams to build scalable web applications.
              </p>

              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-transparent border border-white rounded-xl hover:bg-white hover:text-black transition-colors duration-300"
                >
                  My Resume
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>




  );
}
