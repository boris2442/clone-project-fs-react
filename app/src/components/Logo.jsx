import React from 'react';

const Logo = () => {
    return (
        // les images importes depuis la balises img sont importes depuis le public
        <div clasName="w-[100%]" >
            <div className=" mx-auto flex items-center justify-center mt-5 shadow-2xl w-[400px] rounded-4xl p-4 gap-2">
            <img src="logo.webp" alt="logo simo" className="h-[50px] w-[90px] object-cover" />
            <h2 className="text-3xl text-green-500 font-bold-900">React project</h2>
            </div>
        </div>
    );
};

export default Logo;