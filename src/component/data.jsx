import img1 from './image/bien.png'
import img2 from './image/por.png'
import img3 from './image/react.png'
import img4 from './image/res.png'
import img5 from './image/e-commerce.png'
import img6 from './image/estate.webp'
import img7 from './image/G-store.png'
export const NavElements = [
    {
        text: 'Home',
        url: '/'
    },
    {
        text: 'About',
        url: '/about'
    },
    {
        text: 'Skills',
        url: '/skills'
    },
    {
        text: 'Projects',
        url: '/projects'
    },
    {
        text: 'Contact Us',
        url: '/contact'
    }
]

export const skillsData = [
    {
        category: "Frontend Development",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "BootStrap",
            "JQuery",
            "React_JS",
        ],
    },
    {
        category: "Other Skills",
        skills: [
            "Git/GitHub",
            "Responsive Design",
            "C++",
            "C",
            "Dart",
        ],
    },
];

export const ProjectsData = [
    {
        img: img1,
        address: {
            url: '/Bein_Sport/',
            sourse: '/Bein_Sport',
        }
    },
    {
        img: img2,
        address: {
            url: '/portifolio/',
            sourse: '/portifolio',
        }
    },
    {
        img: img3,
        address: {
            url: '/FirstProject/',
            sourse: '/FirstProject',
        }
    },
    {
        img: img4,
        address: {
            url: '/resturant/',
            sourse: '/resturant',
        }
    },
    {
        img: img5,
        address: {
            url: '/raya_site/',
            sourse: '/raya_site',
        }
    },
    {
        img: img6,
        address: {
            url: '/Estate_project/',
            sourse: '/Estate_project',
        }
    },
    {
        img: img7,
        address: {
            url: '/e-commerce/',
            sourse: '/e-commerce',
        }
    },
]