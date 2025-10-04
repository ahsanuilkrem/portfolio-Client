import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  return (
    <div className="mb-10">
      <div className="max-h-screen w-full relative  ">
        {/* Crimson Depth */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
          }}
        />

        <section className="relative flex flex-col items-center  text-center py-28 px-6 text-white  ">

          <div className="flex items-center justify-around ">
            <div className="w-full h-full rounded-full ml-5">
              <Image
                src={"https://i.ibb.co.com/kV5qhZjg/IMG-20250311-115453.jpg"}
                alt="this is photo"
                width={300}
                height={300}
                className="rounded-full w-96 h-96 "
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl md:text-2xl font-extrabold tracking-tight  ">
                Mohammed Ahsan    <br className="hidden md:block" />
                Full Stack Developer (MERN Stack)    
              </h1>


              <p className="mt-6 text-lg md:text-xl ">
                Enthusiastic and detail-oriented Junior Backend Developer with a strong foundation 
                in server-side development, API creation, and database management. Eager to contribute 
                to impactful backend systems and collaborate with cross-functional teams to build scalable web applications.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row  justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl border border-input hover:bg-accent hover:text-accent-foreground transition"
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
