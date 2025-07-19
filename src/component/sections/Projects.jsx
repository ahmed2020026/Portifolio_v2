import { Title } from "./title"
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectsData } from "../data"

export const Projects = () => {
    return (
        <>
            <Title title="My Projects" />
            <div className="container mt-10">
                <div className="Project-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        ProjectsData.map((project, index) => {
                            //console.log(project.address.url)
                            return (
                                <div key={index} className="group overflow-hidden relative" data-aos="zoom-in" data-aos-duration='1500' data-aos-delay={`${Number(index + 1) * 200}`}>
                                    <img src={project.img} className="w-full transition-all duration-500 h-full" />
                                    <div className="source absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#21222236] opacity-0 transition-opacity duration-500">
                                        <a href={`${project.address.url}`} target='_blank' rel='noopener noreferrer' className="text-white p-2 bg-green-600 mx-2 rounded">
                                            <VisibilityIcon />
                                        </a>
                                        <a href={`${project.address.sourse}`} target='_blank' rel='noopener noreferrer' className="text-white p-2 bg-green-600 mx-2 rounded">
                                            <GitHubIcon />
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}