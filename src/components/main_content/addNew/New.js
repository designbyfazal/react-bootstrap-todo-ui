import React from "react";
import menuHorizontal from "../../../assets/images/menu-horizentol.svg";

export default function New() {
  return (
    <div className="new-list ">
      <form className="form-editor">
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control form-editor--input-field"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <div className="dropdown input-group-text" id="basic-addon2">
              <a
                className="arrow-none dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>

              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group form-editor--actions form-actions d-flex">
          <div className="form-actions--buttons">
            <a className="btn btn-primary text-white mr-2"> Add Task </a>
            <a className="btn btn-light"> Cancle </a>
          </div>
          <div className="form-actions--list d-flex">
            <div className="select-project-dropdown">
              <div className="dropdown">
                <a
                  className="btn arrow-none dropdown-toggle btn-sm"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select Project
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="btn light-bg btn-outline-info mr-2 btn-sm"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              + Label
            </button>
            <button
              type="button"
              className="btn light-bg btn-outline-success mr-2 btn-sm"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Priority
            </button>
            <button
              type="button"
              className="btn light-bg btn-outline-warning mr-2 btn-sm"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Reminder
            </button>

            <div className="select-project-dropdown">
              <div className="dropdown">
                <a
                  className="btn arrow-none dropdown-toggle btn-sm"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={menuHorizontal} width="15px" />
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right mt-2"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
