import React from 'react'
import Form from '../Form/Form';
import Posts from '../Posts/Posts';

function Main() {
    return (
        <div className="flex flex-col-reverse m-8 sm:grid sm:grid-cols-3 sm:gap-3 text-white">
            <Posts/>
            <Form/>
        </div>
    )
}

export default Main
