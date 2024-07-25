import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    alt?: boolean
    disabled?: boolean
}

export default function Button({
    children,
    alt,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                'font-medium text-sm h-12 rounded-md w-full transition-all duration-300 ease-in-out',
                {
                    'text-white bg-purple-600 border-none': !alt,
                    'text-purple-600 bg-white border border-purple-600': alt,
                    'opacity-25': disabled,
                    'hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg': !disabled,
                }
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}
