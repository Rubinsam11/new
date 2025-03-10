import { Menu } from "@headlessui/react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const workspacesData = [
  {
    id: 1,
    name: "Lending Loan Management",
    serverType: "Free",
    status: "Ready",
  },
  {
    id: 2,
    name: "Lending Loan Management",
    serverType: "Free",
    status: "Failed",
  },
  {
    id: 3,
    name: "Lending Loan Management",
    serverType: "Free",
    status: "Ready",
  },
];

const Workspace = () => {
  return (
    <div className="flex gap-4 p-4 bg-black text-white rounded-lg">
      {/* Create Workspace Card */}
      <div className="bg-gray-900 flex flex-col items-center justify-center w-48 h-32 rounded-lg cursor-pointer hover:bg-gray-800">
        <span className="text-xl">➕</span>
        <p className="text-sm mt-2">Create Workspace</p>
      </div>

      {/* Workspace Cards */}
      {workspacesData.map((workspace) => (
        <div
          key={workspace.id}
          className="relative bg-gray-900 w-[298px] h-[128px] p-4 rounded-lg"

        >
          <h3 className="text-sm font-semibold">{workspace.name}</h3>
          <p className="text-xs text-gray-400 mt-1">SERVER TYPE</p>
          <p className="text-xs">{workspace.serverType}</p>
          <p className="text-xs text-gray-400 mt-1">SERVER STATUS</p>
          <p
            className={`text-xs font-semibold ${
              workspace.status === "Ready" ? "text-green-400" : "text-red-400"
            }`}
          >
            {workspace.status}
          </p>

          {/* Three-dot Dropdown */}
          <Menu as="div" className="absolute top-2 right-2">
            <Menu.Button>
              <BsThreeDotsVertical className="text-white cursor-pointer" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-40 bg-gray-800 text-sm text-white rounded-lg shadow-lg">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`block w-full text-left px-4 py-2 ${
                      active ? "bg-gray-700" : ""
                    }`}
                  >
                    Invite Member
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`block w-full text-left px-4 py-2 ${
                      active ? "bg-gray-700" : ""
                    }`}
                  >
                    Workspace Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`block w-full text-left px-4 py-2 text-red-400 ${
                      active ? "bg-gray-700" : ""
                    }`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      ))}
    </div>
  );
};

export default Workspace;