import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./productstList";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Products/>}/>
                {/*<Route path='/*' element={<Navigate to='404'/>}/>*/}
                {/*<Route path="/404" element={<NotFound/>}/>*/}
                {/*<Route path="/home" element={<Home/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
};

export default App;