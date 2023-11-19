import { useEffect, useState } from 'react'
const WatchMouseEnter = <T extends HTMLElement>({ refElement }: { refElement: React.RefObject<T> }) => {
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const elementRef = refElement.current
        if (elementRef) {
            const handleMouseEnter = () => setIsHovered(true)
            elementRef.addEventListener("mouseenter", handleMouseEnter)
            return () => {
                elementRef.removeEventListener("mouseenter", handleMouseEnter)
            }
        }
    }, [refElement])
    return isHovered
};

export default WatchMouseEnter