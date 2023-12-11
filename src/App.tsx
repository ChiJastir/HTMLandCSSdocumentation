import {Route, Routes, useLocation} from "react-router-dom";
import {routes} from './router';
import {ThemeProvider} from "styled-components";
import {useAppSelector} from "@/shared";
import {GlobalStyles} from "@styles/global";
import {Suspense, useEffect, useState} from "react";
import { Navigation } from "@/widgets";
import {useSwipeable} from "react-swipeable";
import {useAppDispatch} from "@/shared";
import {inRussian} from "@/shared";

function App() {
    const themeValue = useAppSelector((store) => store.themeSlice.themeValue)
    const langValue = useAppSelector((store) => store.languagesSlice.languagesValue)

    const dispatch = useAppDispatch()

    const history = useLocation()

    const [swipe, setSwipe] = useState(false)

    const handlers = useSwipeable({
        onSwipedRight: (eventData) => {
            setSwipe(eventData.deltaX >= 100)
        },
        onSwipedLeft: (eventData) => {
            setSwipe(eventData.deltaX >= 100)
        },
    });

    useEffect(() => {
        if (navigator.language === 'ru' && !langValue)
            dispatch(inRussian())
    }, [])

    return (
        <Suspense>
            <ThemeProvider theme={themeValue}>
                <div {...handlers} style={{all: 'unset'}}>
                    {history.pathname !== '/' && <Navigation swipe={swipe} setSwipe={setSwipe}/>}
                    <Routes>
                        {routes.map(route => <Route path={route.path} element={route.component} key={route.path}/>)}
                    </Routes>
                    <GlobalStyles/>
                </div>
            </ThemeProvider>
        </Suspense>
    )
}

export default App
