import React, { Component } from "react";
import commentIcon from "../../../assets/images/comment-icon.svg";
import menuIcon from "../../../assets/images/menu-icon.svg";
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome";
import New from "../addNew/New";
import menuHorizontal from "../../../assets/images/menu-horizentol.svg";

class Inbox extends Component {
  render() {
    return (
      <div className="page">
        <div className="page--header">
          <h4> Inbox </h4>
          <div className="page--header__actions">
            <div className="header-actions">
              <button
                className="comment-btn px-2"
                data-toggle="modal"
                data-target="#commentPanel"
              >
                <img src={commentIcon} width="17px" />
              </button>

              <div className="dropdown">
                <a
                  className="btn dropdown-toggle "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={menuIcon} width="20px" />
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Add section
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Sort by date
                  </a>
                  <a className="dropdown-item" href="#">
                    Sort by priority
                  </a>
                  <a className="dropdown-item" href="#">
                    Sort by name
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Import from template
                  </a>
                  <a className="dropdown-item" href="#">
                    Export as template
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Email tasks to this project
                  </a>
                  <a className="dropdown-item" href="#">
                    Project calendar feed
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Show completed tasks
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page--content">
          <ul className="section-list list-unstyled">
            <li className="list-item section-list--item">
              <div className="section-list--holder">
                <div className="list-manager">
                  <div className="list-holder mb-3 pt-3">
                    <div className="list-holder--item pt-3 pb-3">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="customControlValidation2"
                          name="radio-stacked"
                        />
                        <label
                          className="custom-control-label"
                          for="customControlValidation2"
                        >
                          Create frontend of todolist in React JS without
                          functionality. Functionality will be add after the UI.
                        </label>
                      </div>

                      <div className="list-holder--actions">
                        <div className="actions-items">
                          <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                          >
                            Primary
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary mr-2"
                          >
                            Secondary
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-success mr-2"
                          >
                            Success
                          </button>
                          <div className="dropdown">
                            <a
                              className="btn arrow-none dropdown-toggle"
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
                      </div>
                    </div>
                  </div>

                  <New />
                </div>
                <a href="#" className="list-manager--add-new">
                  <span> + </span> Add Task
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* <!-- Add Label Popup --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade right-modal"
          id="commentPanel"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="commentPanelLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog comments-modal" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="commentPanel">
                  Comment Screen
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inbox;
