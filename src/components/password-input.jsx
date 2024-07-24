import React, { useState } from "react";
import { VisibilityIcon, VisibilityOffIcon } from "../assets";

export default function PasswordInput({ inputValue = "", setInputValue, error }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    return (
        <>
            <div className="relative container mx-auto">
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    value={inputValue}
                    name="password"
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
                <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 border border-inputBorder rounded-tr rounded-br bg-white border-l-0"
                    onClick={togglePasswordVisibility}
                >
                    {isPasswordVisible ? (
                        <VisibilityOffIcon className="fill-[#636363]" />
                    ) : (
                        <VisibilityIcon className="fill-[#636363]" />
                    )}
                </button>
            </div>
            {error && <p className="text-xs text-red-700 font-light">{error}</p>}
        </>
    );
}