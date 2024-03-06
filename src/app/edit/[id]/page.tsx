"use client";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { redirect } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface IdProps {
  params: {
    id: number;
  };
}

export default function Edit({ params }: IdProps) {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const { id } = params;
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://creating-profile-backend.onrender.com/profile/${id}`)
      .then((res) => {
        setName(res.data.name);
        setPhonenumber(res.data.phonenumber);
        setEmail(res.data.email);
        setHobbies(res.data.hobbies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleProfile = () => {
    const data = {
      name,
      phonenumber,
      email,
      hobbies,
    };
    axios
      .put(`http://localhost:5000/profile/${id}`, data)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <form action={handleProfile}>
        <div className="flex flex-col gap-4 p-4 w-80">
          <h3 className="text-lg"></h3>
          <Input
            name="name"
            label="Name"
            labelPlacement="outside"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="email"
            label="Email"
            labelPlacement="outside"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="phonenumber"
            label="Phone Number"
            labelPlacement="outside"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          <Input
            name="hobbies"
            label="Hobbies"
            labelPlacement="outside"
            placeholder="Hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </div>
        <Button type="submit" color="secondary">
          Submit
        </Button>
      </form>
    </div>
  );
}
