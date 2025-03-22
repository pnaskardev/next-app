import axios from "axios";

async function fetchData() {
  const response = await axios.get("http:localhost:3000/api/user");
  return response.data;
}

export default async function User() {
  const userData = await fetchData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div> Name: {userData?.name}</div>
          Email:{userData?.email}
        </div>
      </div>
    </div>
  );
}
