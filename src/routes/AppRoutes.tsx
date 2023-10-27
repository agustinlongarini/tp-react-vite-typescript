import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Administration from "../pages/Administration/Administration";
import Components from "../pages/Components/Components";

const AppRoutes: React.FC = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/components" element={<Components/>}/>
            <Route path="/administration" element={<Administration/>}/>
        </Routes>
        </>
    )
}

export default AppRoutes;