import React, { FormEvent, useState, InputHTMLAttributes } from 'react';

interface Props {
    onSubmit: (x: {name: string, email: string})=>void
}

export default function Newsletter({ onSubmit: os }:Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    os({ name, email });
  }

  return (
    <div className="container mx-auto my-8 w-5/6 p-4 flex flex-col shadow-md">
      <div>
        <img src="/images/send.svg" alt="" className="h-10 m-auto mb-4" />
        <b className="mb-2 block">Subscribe to the Newsletter</b>
        <p>Subscribe to get my latest content by email.</p>
      </div>
      <div>
        <form className="mt-8 text-center" onSubmit={onSubmit}>
          <label htmlFor="name" className="block text-left">
            Name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" className="my-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="John doe" />
          </label>
          <label htmlFor="email" className="block text-left">
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="my-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="johndoe@gmail.com" />
          </label>
          <input type="submit" className="my-4 mx-auto bg-purple-600 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Subscribe" />
        </form>
      </div>
    </div>
  );
}
