import { RefObject, useCallback, useEffect } from 'react'

export const useModal = (
	visible: boolean,
	setVisible: any,
	ref: RefObject<HTMLDivElement>
) => {
	useEffect(() => {
		if (visible) {
			document.addEventListener('click', (event: any) => {
				const path = event.path || (event.composedPath && event.composedPath())
				if (path.includes(ref.current)) {
					onClose()
				}
			})
		}
	}, [visible])

	const onClose = useCallback(() => {
		setVisible(false)
	}, [])
}
