import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newId =
      taskList.length > 0
        ? Math.max(...taskList.map((task) => task.id)) + 1
        : 1;
    const newTask = { id: newId, name: name, status: status };
    setTaskList([...taskList, newTask]);
  };

  const handleUpdateStatus = (id) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: task.status === "active" ? "completed" : "active"
        };
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  const handleClick = (val) => {
    setShow(val);
  };

  const filteredTasks = taskList.filter((task) => {
    if (show === "all") {
      return true;
    } else {
      return task.status === show;
    }
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmitForm}
          >
            <div className="col-auto">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
              {filteredTasks?.map((task) => (
                <tr key={task?.id}>
                  <td scope="col">{task.name}</td>
                  <td scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      //   disabled={task.status !== "active"}
                      onClick={() => {
                        handleUpdateStatus(task?.id);
                      }}
                    >
                      {task.status}
                    </button>
                  </td>
                </tr>
              ))}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
