import {Route, Routes} from "react-router-dom";
import {routes} from './router';
import {ThemeProvider} from "styled-components";
import {useAppSelector} from "./hooks/redux";
import {GlobalStyles} from "./styles/global";
import {Suspense} from "react";

function App() {
    const themeValue = useAppSelector((store) => store.themeSlice.themeValue)
    return (
        <Suspense>
            <ThemeProvider theme={themeValue}>
                <Routes>
                    {routes.map(route => <Route path={route.path} element={route.component} key={route.path}/>)}
                </Routes>
                <GlobalStyles/>
            </ThemeProvider>
        </Suspense>
    )
}

export default App
