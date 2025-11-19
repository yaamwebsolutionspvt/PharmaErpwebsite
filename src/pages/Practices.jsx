import React, { useState } from "react";

const Practices = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submittedDetails, setSubmittedDetails] = useState({
     submittedName : "",
     submittedEmail: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault(); // stops form refresh
    
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);

    setSubmittedDetails({
   submittedName : name,
     submittedEmail: email
    })
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 px-10">
      <div className="bg-gray-200 px-20 py-10 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Contact Form</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
          <div className="flex flex-col">
            <label className="font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-400 rounded px-3 py-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="border border-gray-400 rounded px-3 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>

        </form>
        <div>
            <h1>My Name is {submittedDetails.submittedName}</h1>
            <h2>My emial is email {submittedDetails.submittedEmail}</h2>
        </div>
      </div>
    </div>
  );
};

export default Practices;
