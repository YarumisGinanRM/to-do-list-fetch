import React, { useState } from "react";
import "../../styles/index.css";

export const Lista = () => {
    const [inputValue, setInputValue] = useState("");
    const [taskList, setTaskList] = useState([{
        description: "Tarea 1",
        status: true
    },
    {
        description: "Tarea 2",
        status: true
    },
    {
        description: "Tarea 3",
        status: true
    },
    ]);

    const handleAddTask = (event) => {
        setInputValue(event.target.value)
        if(event.key == "Enter"){
            console.log(event.key)
            setTaskList([...taskList,
            {
                 description: inputValue,
                 status: false
            }])
            setInputValue(" ")
        }
    }

    const eliminarTarea = (taskIndex) => {
        console.log(taskIndex)
        setTaskList(taskList.filter((task, index) => index != taskIndex))
    }

    return (
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">

                        <div className="card">
                            <div className="card-body p-5">
                                <h1 className="text-center">To-Do List</h1>
                                <div className="d-flex justify-content-center align-items-center mb-4">
                                    <div className="form-outline flex-fill">
                                        <input type="text" className="form-control" value={inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyUp={handleAddTask}/>
                                    </div>
                                </div>

                                <div>
                                    <div className="tab-pane fade show active" role="tabpanel"
                                        aria-labelledby="ex1-tab-1">
                                        <ul className="list-group col-12"> {
                                            taskList.length == 0 && <h1>No hay tareas, añadir tareas.</h1>
                                        }
                                            {
                                                taskList.length != 0 && taskList.map ((element, index) => {
                                                    return (
                                                         <li key={index} className="col-12 mb-2 d-flex justify-content-between align-items-center list-group-item border-2 rounded">
                                                            <p className="overflow-hidden px-2">{" "} {element.description} {" "}</p>
                                                            <button type="submit" onClick={() => eliminarTarea (index)} className="button1 btn btn-info">X</button>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Tabs content --> */}

                            </div>
                        </div>

                    </div>
                </div>
        </div>
    </section>
);
};