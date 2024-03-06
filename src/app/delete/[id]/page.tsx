"use client";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { Suspense } from "react";
interface IdProps {
  params: {
    id: number;
  };
}

export default function DeleteProfile({ params }: IdProps) {
  const { id } = params;
  const handleDeleteProfile = () => {
    axios
      .delete(`https://creating-profile-backend.onrender.com/profile/${id}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Suspense fallback="Loading..">
      <div
        className=" box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75) flex flex-col justify-center items-center mt-10"
      >
        <h3>Are you really want to delete this book </h3>
        <Button className="bg-red-900 " onClick={handleDeleteProfile}>
          Delete
        </Button>
      </div>
    </Suspense>
  );
}
