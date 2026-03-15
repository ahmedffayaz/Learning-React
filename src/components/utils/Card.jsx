import {useContext} from 'react'
import UserContext from '../../context/userContext/userContext.js'
export default function Card({ children }) {
const { user } = useContext(UserContext)
    console.log("User in Card component: ", user)
    return (
        <div className=" w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="mt-2 flex justify-end px-4 mb-0 pb-0">
                    {children}
                </div>

            <a href="#">
                <img className="p-8 rounded-t-lg" src={user?.avatar_url} alt="product_image1" />
            </a>
        </div>
    );
}
