import React, {useContext} from 'react'
import UserContext from '../../context/userContext/userContext.js'
export const Profile = () => {
    const { user } = useContext(UserContext) // Here user is accessing from the UserContext and we will use it to display the user information in the profile component. If the user is not logged in, we will show a message asking them to login.
    if (!user) {
        return <p className="text-center text-gray-600 mt-6">Please login to view your profile</p>
    }
    return (
        <div className="max-w-md mx-auto p-6 bg-gray-800 shadow-lg rounded-lg mt-8">
            <h1 className="text-3xl font-semibold mb-4">Profile</h1>
            <p className="mb-2"><span className="font-medium">Username:</span> {user.username}</p>
        </div>
    )
}