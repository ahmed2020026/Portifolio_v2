import { Title } from "./title";

export const Contact = () => {
    return (
        <>
            <Title title="Contact US" />
            <div className="container mx-auto max-w-4xl text-center">
                <form className="mt-12 grid gap-6 max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border text-white placeholder:text-gray-300 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border text-white placeholder:text-gray-300 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full text-white placeholder:text-gray-300 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-600"
                        rows="5"
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