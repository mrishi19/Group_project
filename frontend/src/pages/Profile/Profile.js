import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ userData }) => {
    const user = localStorage.getItem("token");
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

   // Define activity levels with their respective percentages and colors
   const activityLevels = [
    { level: "Purchaged", percentage: 30, color: "bg-red-500" },
    { level: "Downloads", percentage: 60, color: "bg-yellow-500" },
    { level: "Spent Time", percentage: 90, color: "bg-green-500" },
];

    return (
        <div className=" inset-0 py-1 my-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("https://image.slidesdocs.com/responsive-images/slides/2-blue-business-style-company-profile-powerpoint-background_7190a86fdb__960_540.jpg")' }}>
        <div className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            {/* Background Image */}
            

            <div className="relative z-10">
                <div className="flex items-center justify-center">
                    <img className="w-16 h-16 rounded-full mr-4" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="Avatar" />
                    <div>
                        <h2 className="text-2xl font-bold">{userData.username}</h2>
                        <p className="text-gray-600">{userData.email}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Bio</h3>
                    <p className="text-gray-700">{userData.bio}</p>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Activity Levels</h3>
                    {activityLevels.map((activity, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">{activity.level}</span>
                                <span className="text-sm">{activity.percentage}%</span>
                            </div>
                            <div className="bg-gray-200 h-4 rounded-full">
                                <div
                                    className={`h-full ${activity.color} rounded-full`}
                                    style={{ width: `${activity.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-end mt-10">
                    <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                    <div>
                        {user &&
                            <button
                                className="text-red-600 mx-1 py-1 hover:text-red-400 duration-300 cursor-pointer"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;
