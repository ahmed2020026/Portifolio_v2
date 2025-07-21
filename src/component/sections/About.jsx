import { Title } from "./title"
import image from '../image/image.jpg'
export const About = () => {
    return (
        <>
            <Title title = "About Me"/>
            <div className="container mt-10">
                <div className="About-Content grid grid-cols-1 text-center md:text-left md:grid-cols-3 md:gap-12">
                    <div className="about-image text-center md:text-left mb-10 w-11/12 mx-auto">
                        <img src={image} alt="" className="max-w-full rounded-xl" data-aos="fade-right" data-aos-duration="1500"/>
                    </div>
                    <div className="About-info col-span-2" data-aos="fade-up" data-aos-duration="1500">
                        <h1 className="font-bold text-3xl text-white mb-5">Front-End Developer</h1>
                        <p className="text-gray-400">Frond-End Developer with a strong passion for transforming creative ideas into engaging and seamless web user interface.I have established a solid foundation in JavaScript & modern framework like React, along with libraries such as jQuery & mastered HTML5, CSS3 and CSS frameworks like tailwind CSS and Bootstrap.l believe in the importance of continuous learning and always seeking to explore the latest technologies and best practices in web development</p>
                        <a href="./ASM_CV.pdf" download className="px-3 py-2 bg-green-600 text-white mt-5 rounded inline-block hover:bg-green-800 transition-all">DownLoad CV</a>
                    </div>
                </div>
            </div>
        </>
    )
}
