import { useEffect, useState } from 'react';

// Anything narrower than this (or very short, e.g. a phone in landscape)
// is treated as a phone/small screen.
export const MOBILE_MAX_WIDTH = 800;
export const MOBILE_MAX_HEIGHT = 520;

const read = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
});

export default function useViewport() {
    const [size, setSize] = useState(read);

    useEffect(() => {
        const onResize = () => setSize(read());
        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('orientationchange', onResize);
        };
    }, []);

    const isMobile =
        size.width < MOBILE_MAX_WIDTH || size.height < MOBILE_MAX_HEIGHT;

    return { ...size, isMobile };
}
