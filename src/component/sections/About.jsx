import { Title } from "./title"
import image from '../image/image.jpg'
export const About = () => {
    return (
        <>
            <Title title="About Me" />
            <div className="container mt-14">
                <div className="About-Content grid grid-cols-1 md:grid-cols-3 md:gap-12 items-center text-center md:text-left">

                    {/* About Image */}
                    <div
                        className="about-image w-11/12 mx-auto md:mx-0 mb-5 md:mb-0"
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                    >
                        <img
                            src={image}
                            alt="About Me"
                            className="max-w-full rounded-xl shadow-lg shadow-green-900/40"
                        />
                    </div>

                    {/* About Info */}
                    <div
                        className="About-info col-span-2"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <h2 className="font-bold text-3xl text-white mb-5">
                            Front-End Developer
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Front-End Developer with a strong passion for transforming creative ideas
                            into engaging and seamless web user interfaces. I have established a solid
                            foundation in JavaScript & modern frameworks like React, along with
                            libraries such as jQuery. I mastered HTML5, CSS3 and CSS frameworks like
                            Tailwind CSS and Bootstrap. I believe in the importance of continuous
                            learning and always seek to explore the latest technologies and best
                            practices in web development.
                        </p>

                        <a
                            href="./Ahmed_Samir_FrontEnd_CV"
                            download
                            className="px-5 py-3 bg-green-600 text-white mt-6 rounded-lg inline-flex items-center gap-2 hover:bg-green-700 transition-all shadow-md hover:shadow-green-600/40"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v12m0 0l-4-4m4 4l4-4m-6 8h8"
                                />
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
