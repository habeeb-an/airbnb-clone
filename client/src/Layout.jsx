import { Outlet } from "react-router-dom";
import HeaderFile from "./HeaderFile";

export default function Layout() {
    return (
        <div className="py-4 px-8 flex flex-col min-h-screen">
            <HeaderFile/>
            <Outlet/>
        </div>
    )
}