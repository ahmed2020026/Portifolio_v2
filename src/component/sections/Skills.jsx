import { skillsData } from '../data'
import { Title } from "./title";

export const Skills = () => {
    return (
        <>
            <Title title="My Skills" />
            <div className="container mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {skillsData.map((ele , i) => (
                        <div key={i} className='skills relative pl-3.5'>
                            <h1 className='font-bold text-2xl mb-5 text-green-600'>{ele.category}</h1>
                            <div className='skill-content relative left-4 pl-2.5'>
                                {ele.skills.map((skill, index) => (
                                    <div key={index} className='px-2 py-1.5 mb-2 rounded text-white w-fit ele'>{skill}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

