import React from 'react';

const OpenBook = ({ leftPageContent, rightPageContent }) => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="relative bg-white w-4/5 h-4/5 shadow-2xl rounded-md overflow-hidden">
                {/* Left Page */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-white p-8">
                    <div className="h-full border-r-2 border-gray-300 p-4">
                        {leftPageContent}
                    </div>
                </div>
                {/* Right Page */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white p-8">
                    <div className="h-full p-4">
                        {rightPageContent}
                    </div>
                </div>
                {/* Center Spine */}
                <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-400"></div>
            </div>
        </div>
    );
};

export default OpenBook;