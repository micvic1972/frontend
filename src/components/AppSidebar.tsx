import App from "next/app";

const AppSidebar = () => {
    return (
        <div className="bg-gray-800 text-white p-4">
            <h1 className="text-lg font-bold">Admin Dashboard</h1>
            <ul className="mt-4 space-y-2">
                <li>
                    <a href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700"> Dashboard</a>
                </li>
                <li>
                    <a href="/users" className="block py-2 px-4 rounded hover:bg-gray-700"> Users</a>
                </li>
                <li>
                    <a href="/settings" className="block py-2 px-4 rounded hover:bg-gray-700"> Settings</a>
                </li>
            </ul>
        </div>
    );
}   
    
export default AppSidebar;