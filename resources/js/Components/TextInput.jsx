import { forwardRef, useEffect, useRef } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default forwardRef(function TextInput({ type = 'text', action, passwordType, showPass, setShowPass, placeholder, className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const UsernameIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
    )
    const PasswordIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </svg>
    )

    return (
        <div className="flex flex-col items-start">
            <span className="absolute left-6 pl-2 pt-3.5">
                {action === 'email'
                    ? <UsernameIcon />
                    : action === 'password'
                    ? <PasswordIcon />
                    : action === 'name'
                    ? <UsernameIcon />
                    : action === 'confirmation password'
                    ? <PasswordIcon />
                    : ''
                }
            </span>
            <input
                {...props}
                type={type}
                placeholder={placeholder}
                className={'pl-9 block border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +className}
                ref={input}
            />
            {passwordType && <div className='cursor-pointer absolute mt-4 ml-80' style={{ marginLeft: "370px" }} onClick={() => setShowPass(!showPass)}>
                {showPass ? <IoEyeOutline style={{ color: "white" }} /> : <IoEyeOffOutline style={{ color: "white" }} />}
            </div>}
        </div>
    );
});
