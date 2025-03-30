import axios from "axios";

const BIN_ID = "67e7d9648a456b79667ee363"; // Replace with your JSON Bin ID
const API_KEY = "$2a$10$yti1izYQ7PKY9IhwxrQiuuIk8TZDdxM6nzYFnduMOvJtKIdyRhBB."; // Replace with your JSON Bin API Key
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

const headers = {
  "X-Master-Key": API_KEY,
  "Content-Type": "application/json",
};

// Fetch all users
export const getUsers = async () => {
  const response = await axios.get(BASE_URL, { headers });
  return response.data.record || [];
};


export const addUser = async (user: any) => {
  const users = await getUsers();
  users.push(user);
  await axios.put(BASE_URL, users, { headers });
};

// Update a user (Admin)
export const updateUser = async (index: number, updatedUser: any) => {
  const users = await getUsers();
  users[index] = updatedUser;
  await axios.put(BASE_URL, users, { headers });
};

export const deleteUser = async (index: number) => {
    const users = await getUsers();
    users.splice(index, 1);
  
    await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
      body: JSON.stringify({ users }),
    });
  };
