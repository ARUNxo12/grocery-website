import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <div className="grid grid-cols-2 gap-2 w-12 h-12 animate-pulse">
                <div className="w-5 h-5 bg-orange-500 rounded-sm"></div>
                <div className="w-5 h-5 bg-orange-200 rounded-sm animate-bounce delay-75"></div>
                <div className="w-5 h-5 bg-orange-500 rounded-sm animate-bounce delay-150"></div>
                <div className="w-5 h-5 bg-orange-500 rounded-sm"></div>
            </div>
            <p className="text-gray-500 font-medium animate-pulse">Loading..</p>
        </div>
    );
};

export default LoadingSpinner;
