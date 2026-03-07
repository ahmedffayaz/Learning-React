import React, {useContext} from 'react'
import UserContext from '../../context/usserContext'
export const Profile = () => {
    const { user } = useContext(UserContext)
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