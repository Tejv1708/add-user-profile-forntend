"use client";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddButton() {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleProfile = (e: any) => {
    e.preventDefault();
    const data = { name, phonenumber, email, hobbies };
    axios
      .post("https://creating-profile-backend.onrender.com/profile", data)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Popover placement="left">
        <PopoverTrigger>
          <Button className="bg-blue-700 text-white h-9 w-40 rounded-2xl">
            Add User
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <form onSubmit={handleProfile}>
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
        </PopoverContent>
      </Popover>
    </>
  );
}
