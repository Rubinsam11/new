import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";


const workspaces = [
  { name: "Lending Loan Management", status: "Ready", type: "Free" },
  { name: "Lending Loan Management", status: "Failed", type: "Free" },
  { name: "Lending Loan Management", status: "Ready", type: "Free" },
];

export default function Workspace() {
  return (
    <>
      <div className="flex h-screen bg-black text-white">
        {/* Sidebar */}
       

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="container mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Workspace</h1>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                + Create New Workspace
              </button>
            </div>

            {/* Workspace Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {workspaces.map((ws, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">{ws.name}</h2>
                    <DropdownMenu />
                  </div>
                  <p className="text-sm">SERVER TYPE: {ws.type}</p>
                  <p className={`text-sm font-bold ${ws.status === "Ready" ? "text-green-400" : "text-red-400"}`}>
                    SERVER STATUS: {ws.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Dropdown Menu Component
function DropdownMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <EllipsisVerticalIcon className="w-6 h-6 text-gray-400" />
      </Menu.Button>
      <Transition
        as="div"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-900 shadow-md rounded-md text-white border border-gray-700">
          <Menu.Item key="inviteMember">
            {({ active }) => (
              <button className={`w-full text-left px-4 py-2 ${active ? "bg-gray-800" : ""}`}>
                Invite Member
              </button>
            )}
          </Menu.Item>
          <Menu.Item key="workspaceSettings">
            {({ active }) => (
              <button className={`w-full text-left px-4 py-2 ${active ? "bg-gray-800" : ""}`}>
                Workspace Settings
              </button>
            )}
          </Menu.Item>
          <Menu.Item key="deleteWorkspace">
            {({ active }) => (
              <button className={`w-full text-left px-4 py-2 text-red-400 ${active ? "bg-gray-800" : ""}`}>
                Delete
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
