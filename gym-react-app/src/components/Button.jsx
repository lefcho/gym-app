import React from 'react'

function Button(props) {
    const { children, func } = props;

    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-medium border-[2px]
        bg-slate border-blue-400 border-solid blueShadow duration-200'>
            <p>{children}</p>
        </button>
    )
}

export default Button