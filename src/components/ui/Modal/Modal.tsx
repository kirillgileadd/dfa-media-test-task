import { Dispatch, FC, ReactNode, SetStateAction, useRef } from 'react'

import styles from './Modal.module.scss'
import cl from 'classnames'
import { useModal } from '@/components/ui/Modal/useModal'

interface IModal {
	children: ReactNode
	classNames?: string
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<IModal> = ({ children, classNames, setOpen, open }) => {
	const modalBackgroundRef = useRef<HTMLDivElement>(null)

	useModal(open, setOpen, modalBackgroundRef)

	if (open) {
		return (
			<div className={cl(classNames, styles.modal)}>
				<div ref={modalBackgroundRef} className={styles.modal_background}></div>
				<div className={styles.modal_content}>{children}</div>
			</div>
		)
	}

	return <></>
}

export default Modal
