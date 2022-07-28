import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterList from "../components/CharactersList";
import Page404 from "../components/Page404";

export default function Router() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={< CharacterList />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </React.Fragment>
    );
};