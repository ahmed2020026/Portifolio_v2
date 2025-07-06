import Mail from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import Location from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';;
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <footer className="  text-white mt-10 bg-[#1a1a1a]">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex items-center gap-5 justify-center">
                        <Mail className="text-neutral-700" />
                        <p className="text-white">your-email@example.com</p>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                        <CallIcon className="text-neutral-700" />
                        <p className="text-white">+20 123 456 7890</p>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                        <Location className="text-neutral-700" />
                        <p className="text-white">Cairo, Egypt</p>
                    </div>
                </div>
                <div className="social-media  my-5 flex justify-center gap-3">
                    <a href="#" target='_blank' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <FacebookIcon style={{ fontSize: "35px" }} />
                    </a>
                    <a href="#" target='_blank' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <LinkedIn style={{ fontSize: "35px" }} />
                    </a>
                    <a href="#" target='_blank' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <InstagramIcon style={{ fontSize: "35px" }} />
                    </a>
                    <a href="#" target='_blank' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <Twitter style={{ fontSize: "35px" }} />
                    </a>
                    <a href="#" target='_blank' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <GitHubIcon style={{ fontSize: "35px" }} />
                    </a>
                </div>
            </div>
            <div className="text-center bg-[#212222] py-5">
                <p>&copy; {new Date().getFullYear()} Ahmed Samir. All rights reserved.</p>
            </div>
        </footer>
    );
};