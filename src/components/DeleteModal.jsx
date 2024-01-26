/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TaskDeleteIdContext } from "../contexts";

// eslint-disable-next-line react/prop-types
export default function DeleteModal({ onDelete, onCancel }) {
  const { deleteId } = useContext(TaskDeleteIdContext);
  const [isAllDelete] = useState(Object.is(deleteId, null));
  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 fixed top-0 left-0 flex items-center justify-center mx-auto">
        <div className="mx-auto my-10 w-full max-w-[540px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 relative z-10">
          <svg
            className="text-gray-400 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className=" text-center">
            Are you sure you want to delete{" "}
            {isAllDelete ? "all tasks" : "this task"} ?
          </p>

          <div className="mt-10 flex justify-center lg:mt-10 gap-4">
            <button
              onClick={onCancel}
              type="button"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              No, Cancel
            </button>
            <button
              onClick={() => onDelete(isAllDelete, deleteId)}
              type="button"
              className="rounded bg-red-500 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              Yes, Im sure
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
