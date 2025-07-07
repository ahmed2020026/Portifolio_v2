import { Link } from "react-router-dom"
import { About } from "../sections/About"
import { Skills } from "../sections/Skills"
import { Projects } from "../sections/Projects"
import { Contact } from "../sections/Contact"



export const Home = () => {
    return (
        <>
            <section id="Hero" className="py-30 min-h-dvh flex items-center">
                <div className="container text-white">
                    <div className="hero text-center">
                        <p className="text-green-600">Hello I'm</p>
                        <h1 className="text-3xl md:text-5xl font-bold">Ahmed Samir Mustafa</h1>
                        <h2 className="my-3 font-semibold text-base md:text-2xl">I'm Front-End Developer | React</h2>
                        <div className="info text-gray-400">
                            <p>I create responsive and interactive web interfaces using modern technologies like React, Tailwind CSS, and Bootstrap.</p>
                        </div>
                        <div className="btns mt-10">
                            <Link to='/Contact' className="contact-btn border-2 rounded border-green-600 text-green-600 px-3 py-2 hover:bg-green-600 hover:text-white transition-all">Contact US</Link>
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

