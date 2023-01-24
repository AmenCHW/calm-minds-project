import React from 'react';
import { Link } from 'react-router-dom';

function BackToHomeButton() {

    return (
        <button
            className="mt-5 bg-[#2DD3E3] hover:bg-[#7decf6] text-black text-xl
                   py-2 px-4 border-b-4 border-[#2DD3E3] hover:border-[#7decf6] rounded"
            type="button"
        >
            <Link to="/" className="focus:text-white">BACK TO HOME</Link>
        </button>
    );
}

export default BackToHomeButton;
