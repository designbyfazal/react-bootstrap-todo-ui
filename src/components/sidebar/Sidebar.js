import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar--content">
      <ul className="nav flex-column sidebar--filters">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Inbox
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Today
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Next 7 Days
          </a>
        </li>
      </ul>

      <div className="flex-column">
        <div className="collapse-item">
          <div className="collapse-item--header">
            <p
              className="btn-link m-0 collapse-item--title "
              type="button"
              data-toggle="collapse"
              data-target="#projectFilter"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i className="icon right-arrow"></i> Projects
            </p>

            <button
              className="btn collapse-item--add"
              data-toggle="modal"
              data-target="#addProject"
            >
              +
            </button>
          </div>

          <div className="collapse multi-collapse pt-1" id="projectFilter">
            <ul className="nav flex-column collapse-nav">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  <i className="icon-circle bg-info"></i> New Testing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="icon-circle bg-warning"></i> Welcome
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse-item">
          <div className="collapse-item--header">
            <p
              className="btn-link m-0 collapse-item--title "
              type="button"
              data-toggle="collapse"
              data-target="#allFilters"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i className="icon right-arrow"></i> Filters
            </p>

            <button
              className="btn collapse-item--add"
              data-toggle="modal"
              data-target="#addProject"
            >
              +
            </button>
          </div>
          <div className="collapse multi-collapse " id="allFilters">
            <ul className="nav flex-column collapse-nav pt-1">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="icon-circle bg-warning"></i> Assigned to me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="icon-circle bg-default"></i> Assigned to others
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="icon-circle bg-info"></i> Priority 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="icon-circle bg-info"></i> Priority 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="icon-circle bg-info"></i> Priority 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="icon-circle bg-info"></i> Priority 4
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="icon-circle bg-success"></i> View all
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="icon-circle bg-danger"></i> No due date
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addProject"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addProjectLabel"
        aria-hidden="true"
      >
        <form>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-light">
                <h5 className="modal-title" id="addProjectLabel">
                  Add Project
                </h5>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label for="addProject" className="text-bold">
                    <strong> Project Name </strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectName"
                    aria-describedby="projectName"
                  />
                </div>
                <div className="form-group">
                  <label for="projectColor">
                    <strong> Project color </strong>
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success">
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
