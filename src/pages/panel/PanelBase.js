
import { Route, Routes } from "react-router-dom";
import Productlist from "./products/Productlist";
import Categorylist from "./products/Categorylist";
import Addproduct from "./products/Addproduct";
import Dashboard from "./Dashboard";

function PanelBase() {
    return (
        <>
            <Routes >
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="product/list" element={<Productlist />}></Route>
                <Route path="product/add" element={<Addproduct />}></Route>
                <Route path="categories/list" element={<Categorylist />}></Route>
            </Routes>
        </>
    );
}

export default PanelBase;