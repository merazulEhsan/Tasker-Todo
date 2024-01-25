/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../contexts";
import Task from "./Task";

export default function TasksList({ taskData, onEdit, onFavourite, onDelete }) {
  const { tasksData } = useContext(TaskContext);
  console.log(tasksData);
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {taskData.length > 0 ? (
            taskData?.map((task) => (
              <Task
                key={task.id}
                task={task}
                onEdit={onEdit}
                onFavourite={onFavourite}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center text-2xl ">
                No Search found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
