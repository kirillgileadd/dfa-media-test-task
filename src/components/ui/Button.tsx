import cl from 'classnames'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	className?: string
	type?: 'button' | 'submit' | 'reset'
}

const Button: FC<IButton> = ({children, onClick, className, ...rest}) => {
	return (
		<button
			{...rest}
			onClick={onClick}
			className={cl(className, 'btn-primary')}
		>
			{children}
		</button>
	)
}

export default Button
