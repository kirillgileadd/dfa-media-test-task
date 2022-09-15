import { RefObject, useCallback, useEffect } from 'react'

export const useModal = (
	visible: boolean,
	setVisible: any,
	ref: RefObject<HTMLDivElement>
) => {
	const onClose = useCallback(() => {
		setVisible(false)
	}, [setVisible])

	useEffect(() => {
		if (visible) {
			document.addEventListener('click', (event: any) => {
				const path = event.path || (event.composedPath && event.composedPath())
				if (path.includes(ref.current)) {
					onClose()
				}
			})
		}
	}, [visible, ref, setVisible, onClose])
}
