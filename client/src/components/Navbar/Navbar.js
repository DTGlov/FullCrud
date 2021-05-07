import React from 'react';
import { PencilAltIcon} from '@heroicons/react/outline';

function Navbar() {
    return (
        <nav className="h-16 m-8 rounded-lg shadow-lg  head text-white flex items-center justify-center">
            <h1 className="text-center text-white font-body  font-bold text-3xl">Todo</h1>
<PencilAltIcon className="h-8"/>
        </nav>
        
    );
}

export default Navbar
