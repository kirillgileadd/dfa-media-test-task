import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import TextField from '@/components/ui/TextField/TextField'
import Button from '@/components/ui/Button'

interface IModalForm {
	onCloseModal: () => void
}

interface IFormState {
	name: IInputState
	password: IInputState
}

interface IInputState {
	name: string
	value: string
}

const ModalForm: FC<IModalForm> = ({ onCloseModal }) => {
	const [formState, setFormState] = useState<IFormState>({
		name: { name: 'username', value: '' },
		password: { name: 'password', value: '' },
	})

	const onSetFromState = (e: ChangeEvent<HTMLInputElement>) => {
		setFormState((prev) => ({
			...prev,
			[e.target.name]: {
				name: e.target.name,
				value: e.target.value,
			},
		}))
	}

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={onSubmit}>
			<TextField
				value={formState.name.value}
				name={'name'}
				label={'Имя'}
				className={'mb-4'}
				onChange={onSetFromState}
			/>
			<TextField
				value={formState.password.value}
				name={'password'}
				label={'Пароль'}
				className={'mb-4'}
				onChange={onSetFromState}
			/>
			<Button className="mr-4" onClick={onCloseModal} type="button">
				Закрыть
			</Button>
			<Button className="bg-green-600 hover:bg-green-800">Отправить</Button>
		</form>
	)
}

export default ModalForm
