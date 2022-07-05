import { Routes, Route } from "react-router-dom";
import { Repositories } from "../components/Repositories";
import { Starred } from "../components/Starred";

export const Router = () => {
    
    return(
        <Routes>
          <Route path="repos" element={<Repositories />} />
          <Route path="starred" element={<Starred />} />
      </Routes>
    )
}