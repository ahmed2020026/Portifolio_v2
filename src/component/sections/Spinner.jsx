import React from "react";

const Spinner = ({ size = "md", color = "blue-500" }) => {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
    };

    return (
        <div
            className={`inline-block ${sizeClasses[size]} text-green-600 animate-spin rounded-full border-4 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
            style={{ borderColor: `currentColor`, borderRightColor: 'transparent' }}
            role="status"
        >
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 text-amber-200"
            >
                Loading...
            </span>
        </div>
    );
};

export default Spinner;