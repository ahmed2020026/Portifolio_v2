import { skillsData } from '../data'
import { Title } from "./title";

export const Skills = () => {
    return (
        <>
            <Title title="My Skills" />
            <div className="container mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skillsData.map((ele, i) => (
                        <div
                            key={i}
                            className="skills-card bg-[#1a1a1a] p-6 rounded-xl shadow-lg shadow-green-900/30"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay={i * 200}
                        >
                            {/* Category */}
                            <h2 className="text-xl font-bold text-green-500 mb-6 border-b border-green-800 pb-2">
                                {ele.category}
                            </h2>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {ele.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center bg-[#222] text-white rounded-lg py-4 hover:bg-green-600 hover:scale-105 transition-all duration-300 cursor-default"
                                        data-aos="zoom-in"
                                        data-aos-duration="800"
                                        data-aos-delay={index * 100}
                                    >
                                        {/* Placeholder Icon */}
                                        <div className="w-10 h-10 mb-2 rounded-full flex items-center justify-center bg-green-700/20">
                                            <span className="text-green-400 text-sm">⚡</span>
                                        </div>
                                        <span className="text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

