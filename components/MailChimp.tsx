"use client"

import React from 'react';

const MailchimpForm: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-96 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-lg font-medium">Subscribe To Stay Up To Date With MassAdoption</h2>
        
        <form
          action="https://massadoption.us9.list-manage.com/subscribe/post?u=8194ee6a68e4ce432b1d7a4cc&amp;id=cd03f24ba1&amp;f_id=00401ae1f0" 
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >

          {/* Email input */}
          <div className="flex flex-col mt-4">
            <label className="text-gray-700" htmlFor="mce-EMAIL">
              Email Address <span className="text-red-500">*</span>
            </label>
            
            <input
              type="email"
              name="EMAIL" 
              className="px-3 py-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              id="mce-EMAIL"
              required
            />
          </div>

          {/* Submit button */}  
          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

        </form>

        {/* Disclaimer text */}
        <p className="mt-4 text-xs text-gray-500 text-center">
          By subscribing, you agree to our <span className="text-blue-500">Terms of Service</span> and 
          <span className="text-blue-500"> Privacy Policy</span>.
        </p>

      </div>
    </div>
  );
};

export default MailchimpForm;