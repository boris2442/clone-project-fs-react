import React from 'react';

const Logo = () => {
    return (
        // les images importes depuis la balises img sont importes depuis le public
        <div clasName="w-[100%] fixed top-0 left-0" >
            <div className="md:w-full mx-auto flex items-center justify-center mt-5 shadow-2xl lg:w-[400px] rounded-4xl p-4 gap-2">
            <img src="logo.webp" alt="logo simo" className="h-[50px] w-[90px] object-cover" />
            <h2 className="md:text-[16px] text-green-500 font-bold lg:3xl uppercase ">Explorer les pays du monde</h2>
            </div>
        </div>
    );
};

export default Logo;