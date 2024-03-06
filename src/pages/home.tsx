"use client";
import axios from "axios";
import { Link } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get("https://creating-profile-backend.onrender.com/profile")
      .then((res) => {
        setProfile(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(profile);
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100">Name</th>
            <th className="py-2 px-4 bg-gray-100">Phone Number</th>
            <th className="py-2 px-4 bg-gray-100">Email</th>
            <th className="py-2 px-4 bg-gray-100">Hobbies</th>
            <th className="py-2 px-4 bg-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {profile?.map((item: any, index: number) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.phonenumber}</td>
              <td className="py-2 px-4">{item.email}</td>
              <td className="py-2 px-4">{item.hobbies}</td>
              <td className="py-2 px-4">
                <Link href={`/edit/${item._id}`}>
                  <button className="bg-blue-500 text-white px-2 py-1 mr-2">
                    Edit
                  </button>
                </Link>
                <Link href={`/delete/${item._id}`}>
                  <button className="bg-red-500 text-white px-2 py-1">
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
