import React, { useState } from "react";
import { useRouter } from "next/router";
import { EMode } from "../helpers/enums";

export default function Modal({ editing, mode, onClose }) {
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const addDevice = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/devices", {
      body: JSON.stringify({
        id: event.target.id.value,
        token: event.target.token.value,
        user_id: event.target.user_id.value,
        project_id: event.target.project_id.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    try {
      refreshData(); // Cheat to update the list
      const result = await res.json();
      onClose();
    } catch (error) {
      console.log("err", error);
      setErrorMsg("There was a problem adding the device.");
    }
  };

  const updateDevice = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/devices", {
      body: JSON.stringify({
        id: event.target.id.value,
        token: event.target.token.value,
        user_id: event.target.user_id.value,
        project_id: event.target.project_id.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    try {
      refreshData(); // Cheat to update the list
      const result = await res.json();
      onClose();
    } catch (error) {
      console.log("err", error);
      setErrorMsg("There was a problem updating the device details.");
    }
  };

  const deleteDevice = async (id) => {
    console.log(id)
    const res = await fetch("/api/devices", {
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    try {
      refreshData(); // Cheat to update the list
      const result = await res.json();
      onClose();
    } catch (error) {
      console.log("err", error);
      setErrorMsg("There was a problem deleting the device.");
    }
  };

  const { edit_mode, id, token, user_id, project_id } = editing
    ? editing
    : {
        edit_mode: null,
        id: null,
        token: null,
        user_id: null,
        project_id: null,
      };

  const userOpts = [
    "John Doe",
    "Jane Doe",
    "Danny Crew",
    "George Mandrake",
  ].map((u, index) => (
    <option value={index + 1} selected={user_id === index + 1}>
      {u}
    </option>
  ));

  const projectOpts = [
    "Project 01",
    "Project 02",
    "Project 03",
    "Project 04",
  ].map((p, index) => (
    <option value={index + 1} selected={project_id === index + 1}>
      {p}
    </option>
  ));

  if (edit_mode === EMode.DELETE)
    return (
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0" style={{ zIndex: -1 }}>
            <div className="absolute inset-0 bg-coral-red-800 opacity-50" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-bottom bg-coral-red-50 rounded-lg text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full z-20"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="text-coral-red-700 border-gray-300 border-b px-4 pt-2 pb-2 mb-4 text-lg leading-7 sm:truncate">
              {"Are you sure you want to Remove this device?"}
            </div>
            <div className="bg-coral-red-50 px-4 pb-4">
              <div className="m-0">
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={() => deleteDevice(id)}
                    className="inline-flex text-coral-red-50 items-center px-4 py-2 ml-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-coral-red-500 hover:bg-coral-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-red-500"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => onClose()}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-red-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="text-coral-red-600">{errorMsg && errorMsg}</div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0" style={{ zIndex: -1 }}>
            <div className="absolute inset-0 bg-coral-red-800 opacity-50" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-bottom bg-coral-red-50 rounded-lg text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full z-20"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <h2 className="text-gray-500 border-gray-300 border-b px-4 pt-2 pb-2 mb-4 text-2xl leading-7 sm:text-3xl sm:truncate">
              {mode === EMode.ADD ? "Add Device" : "Modify Device"}
            </h2>
            <div className="bg-coral-red-50 px-4 pb-4">
              <form
                className="mt-1 space-y-1"
                onSubmit={mode === EMode.ADD ? addDevice : updateDevice}
              >
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="token" className="sr-only">
                      Device Token
                    </label>
                    {id && (
                      <input
                        id="id"
                        name="id"
                        type="hidden"
                        value={id}
                        required
                      />
                    )}
                    <input
                      id="token"
                      name="token"
                      type="text"
                      defaultValue={token ?? null}
                      required
                      className="my-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Token"
                    />
                  </div>
                  <div>
                    <label htmlFor="user" className="sr-only">
                      User
                    </label>
                    <select
                      id="user"
                      name="user_id"
                      required
                      className="my-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="User"
                    >
                      <option value={-1} selected={mode === EMode.ADD}>
                        Select User
                      </option>
                      {userOpts}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="Project" className="sr-only">
                      Project
                    </label>
                    <select
                      id="project"
                      name="project_id"
                      required
                      className="my-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Project"
                    >
                      <option value={-1} selected={mode === EMode.ADD}>
                        Select Project
                      </option>
                      {projectOpts}
                    </select>
                  </div>
                </div>

                <div className="m-0">
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => onClose()}
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="text-coral-red-600">{errorMsg && errorMsg}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
