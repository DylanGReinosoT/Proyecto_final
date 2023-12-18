import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layouts(){
    return(
        <div className="p-4 flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
        </div>
    );

}