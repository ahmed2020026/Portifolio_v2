
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';;
import LinkedIn from '@mui/icons-material/LinkedIn';
import WtsIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import Location from '@mui/icons-material/LocationOn';

export const Footer = () => {
    return (
        <footer className="  text-white mt-10 bg-[#1a1a1a] rounded-t-xl border-t-2 border-[#cccccc18]">
            <div className="container">
                <div className="social-media  my-5 flex justify-center gap-3">
                    <a href="https://www.facebook.com/share/16fc5S2dPs/" target='_blank' rel='noopener noreferrer' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <FacebookIcon style={{ fontSize: "35px" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/ahmed-samir-513237251" target='_blank' rel='noopener noreferrer' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <LinkedIn style={{ fontSize: "35px" }} />
                    </a>
                    <a href="https://www.instagram.com/a7med_samir_2001?igsh=MWhvaThtMzVsN29lcA==" target='_blank' rel='noopener noreferrer' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <InstagramIcon style={{ fontSize: "35px" }} />
                    </a>
                    <a href="https://wa.me/201063483113" target='_blank' rel='noopener noreferrer' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <WtsIcon style={{ fontSize: "35px" }} />
                    </a>
                    <a href="https://github.com/ahmed2020026" target='_blank' className="text-neutral-700 hover:text-green-600 duration-500 inline-block">
                        <GitHubIcon style={{ fontSize: "35px" }} />
                    </a>
                </div>
                <div className="mt-10">
                    <div className="flex items-center gap-3 justify-center">
                        <CallIcon className="text-neutral-700" />
                        <p className="text-white">+20 106 348 3113</p>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                        <Location className="text-neutral-700" />
                        <p className="text-white">Cairo, Egypt</p>
                    </div>
                </div>
            </div>
            <hr className='w-11/12 mx-auto text-[#cccccc1e]' />
            <div className="text-center py-5">
                <p>&copy; {new Date().getFullYear()} Ahmed Samir. All rights reserved.</p>
            </div>
        </footer>
    );
};