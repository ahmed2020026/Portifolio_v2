import { useRef } from "react";
import { Title } from "./title";
import emailjs from '@emailjs/browser';
import Toastify from 'toastify-js'

export const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6g24gt3', 'template_imn9jer', form.current, {
            publicKey: 'WNVR_tWPumhREht6F',
        })
            .then(
                () => {
                    Toastify({
                        text: "Success",
                        duration: 3000,
                        position:'right',
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                    }).showToast();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        Array.from(form.current.children).forEach(ele => ele.value = '');
    };
    return (
        <>
            <div className="container mx-auto max-w-4xl text-center mt-20">
                {/* Section Title */}
                <h1 className="text-3xl font-bold text-white mb-4">
                    Contact <span className="text-green-500">Me</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Feel free to reach out for collaborations or just a friendly hello 👋
                </p>

                {/* Contact Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="mt-12 grid gap-6 max-w-xl mx-auto bg-[#1a1a1a] p-8 rounded-xl shadow-lg shadow-green-900/40"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="w-full border text-white placeholder:text-gray-300 border-gray-600 rounded px-4 py-3 bg-transparent focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="w-full border text-white placeholder:text-gray-300 border-gray-600 rounded px-4 py-3 bg-transparent focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full text-white placeholder:text-gray-300 border border-gray-600 rounded px-4 py-3 bg-transparent focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        rows="5"
                        name="message"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-green-600 flex items-center justify-center gap-2 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 8l16-4-4 16-4-6-6-4z"
                            />
                        </svg>
                        Send Message
                    </button>
                </form>
            </div>

        </>
    );
};
