import { useRef } from "react";
import { Title } from "./title";
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6g24gt3', 'template_imn9jer', form.current, {
            publicKey: 'WNVR_tWPumhREht6F',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <Title title="Contact US" />
            <div className="container mx-auto max-w-4xl text-center">
                <form ref={form} onSubmit={sendEmail} className="mt-12 grid gap-6 max-w-xl mx-auto" data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="w-full border text-white placeholder:text-gray-300 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="w-full border text-white placeholder:text-gray-300 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full text-white placeholder:text-gray-300 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                        rows="5"
                        name="message"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-green-600 cursor-pointer text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </>
    );
};
