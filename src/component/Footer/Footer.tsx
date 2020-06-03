import React from 'react';
import ViewCounter from '../ViewCounter/ViewCounter';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <p className="text-center mb-4">
        Copyright &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Bisvarup Mukherjee
      </p>
      <ViewCounter />
    </footer>
  );
}
