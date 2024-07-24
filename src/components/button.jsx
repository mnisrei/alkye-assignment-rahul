import React from 'react'

function Button({ onClick, children, className = "", disabled = false }) {
    return (
        <button disabled={disabled} onClick={onClick} className={`rounded-md md:rounded-xl bg-black disabled:bg-gray-200 text-white font-extrabold text-xs md:text-xl px-4 py-2 md:px-6 md:py-4 ${className}`} >
            {children}
        </button >
    )
}

export default Button