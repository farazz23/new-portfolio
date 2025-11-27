import React from 'react';

const PasswordValidation = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30 z-50">
      <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 w-80">
        <form action="">
          <label className="block text-sm font-semibold mb-2">
            Admin Password
          </label>

          <input
            type="password"
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 outline-none"
            placeholder="Enter password"
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordValidation;
