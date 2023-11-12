// import { useEffect, useState } from 'react';
//
// type TWindowSize = [number, number];
//
// type THook = TWindowSize;
//
// export const useResize = (): THook => {
//     const initSize: TWindowSize = [
//         window.innerWidth,
//         window.innerHeight,
//     ];
//     const [windowSize, setWindowSize] = useState<TWindowSize>(initSize);
//
//     useEffect(() => {
//         const handleResize = (): void => {
//             setWindowSize([
//                 document.documentElement.clientWidth,
//                 document.documentElement.clientHeight,
//             ]);
//         };
//
//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);
//
//     return windowSize;
// };