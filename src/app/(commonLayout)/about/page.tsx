import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
}

const AboutPage = () => {
    return (
        <div>
            <div>
                <main className="max-w-3xl mx-auto px-6 py-12 mt-20">
                    <span className=" uppercase tracking-wide">
                       <h1 className="text-4xl text-center font-bold">About Me</h1>
                   
                    </span>

                    <h1 className="text-3xl font-bold mt-2 mb-4">Hi, Mohammed Ahsan</h1>
                    <h3 className="text-2xl font-bold mt-2 mb-4">Full Stack Developer (MERN Stack)</h3>
                    <h4 className="text-2xl font-medium mt-2 mb-4 text-gray-700">Email : ahsanulkarim429@gmail.com</h4>

                    <p className="text-lg text-gray-700 mb-6">
                       Enthusiastic and detail-oriented Junior Backend Developer with a strong foundation in server-side
                        development, API creation, and database management. Eager to contribute to 
                       impactful backend systems and collaborate with cross-functional teams to build scalable
                        web applications.
                    </p>

                    <div className="text-md font-medium text-gray-800 mb-4">
                        <span className="inline-block mr-3">🔍 Problem Solver</span>
                        <span className="inline-block mr-3">⚡ Fast Learner</span>
                        <span className="inline-block">🎯 Detail-Oriented</span>
                    </div>

                    <p className="text-gray-700 mb-6">
                        <strong>What makes me stand out?</strong> I never give up on a problem
                        until  solved! Debugging, troubleshooting, and learning new skills
                        truly excite me.
                    </p>

                    <p className="text-gray-700 mb-8">
                        Currently expanding my skills in <strong>Next.js</strong>,{" "}
                        <strong>Redux</strong>, and <strong>TypeScript</strong> to build even
                        better applications.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                    <ul className="flex flex-wrap gap-3">
                        {[
                            "React",
                            "JavaScript",
                            "Tailwind CSS",
                            " Bootstrap",
                            "MongoDB",
                            "Express.js",
                            "Firebase",
                            "Next js",
                            "TypeScrip",
                            "Postgresql",
                            "Prisma"
                        ].map((tech, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 bg-gray-100 text-sm rounded shadow-sm"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </div>
    );
};

export default AboutPage;