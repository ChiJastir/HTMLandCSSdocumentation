import {Route, Routes} from "react-router-dom";
import {routes} from './router';
import {ThemeProvider} from "styled-components";
import {useAppSelector} from "./hooks/redux";
import {GlobalStyles} from "./styles/global";
import {Suspense, useState} from "react";
import Navigation from "./components/navigation";
import {useSwipeable} from "react-swipeable";

function App() {
    const themeValue = useAppSelector((store) => store.themeSlice.themeValue)

    const [swipe, setSwipe] = useState(false)

    const handlers = useSwipeable({
        onSwipedRight: (eventData) => {
            setSwipe(eventData.deltaX >= 100)
        },
        onSwipedLeft: (eventData) => {
            setSwipe(eventData.deltaX >= 100)
        },
    });

    return (
        <Suspense>
            <ThemeProvider theme={themeValue} {...handlers}>
                <Navigation swipe={swipe} setSwipe={setSwipe}/>
                <Routes>
                    {routes.map(route => <Route path={route.path} element={route.component} key={route.path}/>)}
                </Routes>
                <GlobalStyles/>
            </ThemeProvider>
        </Suspense>
    )
}

export default App
