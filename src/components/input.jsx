import React from 'react'

function Input({ inputValue = "", setInputValue }) {
    return (
        <div className="relative container mx-auto">
            <input
                type={"text"}
                placeholder="Email"
                value={inputValue}
                name="email"
                onChange={(event) => setInputValue(event?.target?.value)}
                className="w-full px-6 lg:px-8
                            py-3 lg:py-6
                            text-base
                            font-medium
                            text-[#636363]
                            placeholder:text-[#636363]
                            border border-inputBorder
                            rounded
                            outline-none"
            />
        </div>
    )
}

export default Input