// import { useThree } from '@react-three/fiber'
// import { useEffect } from 'react'

// export function ZoomController() {
// 	const { camera } = useThree()

// 	useEffect(() => {
// 		const onWheel = (e: WheelEvent) => {
// 			camera.zoom = Math.max(0.2, Math.min(2, camera.zoom - e.deltaY * 0.001))
// 			camera.updateProjectionMatrix()
// 		}

// 		window.addEventListener('wheel', onWheel)
// 		return () => window.removeEventListener('wheel', onWheel)
// 	}, [camera])

// 	return null
// }
