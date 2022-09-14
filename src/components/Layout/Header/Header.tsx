import React, { FC, useState } from 'react'

import styles from './Header.module.scss'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal/Modal'
import ModalForm from '@/components/ModalForm/ModalForm'

const Header: FC = () => {
	const [modalVisible, setModalVisible] = useState<boolean>(false)

	const onOpenModal = () => {
		setModalVisible(true)
	}

	const onCloseModal = () => {
		setModalVisible(false)
	}

	return (
		<>
			<header className={styles.header}>
				<p>Мероприятия</p>
				<Button onClick={onOpenModal}>Модальное окно</Button>
			</header>
			<Modal open={modalVisible} setOpen={setModalVisible}>
				<ModalForm onCloseModal={onCloseModal} />
			</Modal>
		</>
	)
}

export default Header
