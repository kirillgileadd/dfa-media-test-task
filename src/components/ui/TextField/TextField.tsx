import { FC, HTMLAttributes } from 'react'

import styles from './TextField.module.scss'
import cl from 'classnames'

export interface ITextField extends HTMLAttributes<HTMLInputElement> {
	value: string
	name: string
	label: string
	className?: string
}

const TextField: FC<ITextField> = ({
	value,
	onChange,
	label,
	className,
	...rest
}) => {
	return (
		<div className={cl(className, styles.text_field__box)}>
			<label htmlFor="text-field">{label}</label>
			<input {...rest} value={value} onChange={onChange} id="text-field" />
		</div>
	)
}

export default TextField
