export default function ActionButton({ className = '', disabled, background, bgOnDark, textColor, textOnDark, bgHover, onDarkHover, onFocus, onDarkFocus, onActive, onActiveDark, onDarkFocusRing, border, borderColor, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 ${background} dark:${bgOnDark} ${border ? 'border' : ''} ${borderColor} rounded-md font-semibold text-xs ${textColor} dark:${textOnDark} uppercase tracking-widest hover:${bgHover} dark:hover:${onDarkHover} focus:${onFocus} dark:focus:${onDarkFocus} active:${onActive} dark:active:${onActiveDark} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:${onDarkFocusRing} transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}