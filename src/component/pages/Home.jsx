import { Link } from "react-router-dom"
import { About } from "../sections/About"
import { Skills } from "../sections/Skills"
import { Projects } from "../sections/Projects"
import { Contact } from "../sections/Contact"


export const Home = () => {
    return (
        <>
            <section
                id="Hero"
                className="min-h-dvh flex items-center justify-center bg-[#111] py-20 md:py-32"
            >
                <div className="container text-white">
                    <div className="hero text-center max-w-3xl mx-auto">
                        <p
                            className="text-green-500 uppercase tracking-wide"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="200"
                        >
                            Hello, I'm
                        </p>

                        <h1
                            className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="400"
                        >
                            Ahmed Samir Mustafa
                        </h1>

                        <h2
                            className="my-3 font-semibold text-base md:text-2xl text-gray-200"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="600"
                        >
                            Front-End Developer | React
                        </h2>

                        <div
                            className="info text-gray-400 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="800"
                        >
                            <p>
                                I create responsive and interactive web interfaces using modern
                                technologies like React, Tailwind CSS, and Bootstrap.
                            </p>
                        </div>

                        <div
                            className="btns mt-10"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="1000"
                        >
                            <Link
                                to="/Contact"
                                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-all shadow-md hover:shadow-green-500/30"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="About" className="pt-30 min-h-dvh pb-10 md:pb-0">
                <About />
            </section>
            <section id="Skill" className="pt-30 min-h-dvh pb-10 md:pb-0">
                <Skills />
            </section>
            <section id="Projects" className="pt-30 min-h-dvh pb-10 md:pb-0">
                <Projects />
            </section>
            <section id="Contact" className="pt-30 min-h-dvh pb-10 md:pb-0">
                <Contact />
            </section>
        </>
    )
}

