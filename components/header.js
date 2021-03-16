import React, {useState} from "react";
import Modal from "./modal";
import {EMode} from "../helpers/enums";

export default function HeaderView({ title }) {
  const [adding, setAdding] = useState(false);

  const modalProps = {
    mode: EMode.ADD,
    onClose: () => setAdding(false)
  }

  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-8">
      {adding > 0 && <Modal {...modalProps} />}
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {title}
        </h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            User device management table. Add, remove and update devices.
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <button
            onClick={() => setAdding(true)}
            type="button"
            className="inline-flex text-coral-red-50 items-center px-4 py-2 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-coral-red-500 hover:bg-coral-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-red-500"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Add Device
          </button>
        </span>
      </div>
    </div>
  );
}
