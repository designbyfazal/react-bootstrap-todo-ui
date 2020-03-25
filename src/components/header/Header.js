import React from "react";
import profileIcon from "../../assets/images/user-profile-icon.png";
import addIcon from "../../assets/images/add-new-icon.svg";
import notificationIcon from "../../assets/images/notification-icon.svg";
import mainLogo from "../../assets/images/my-cap-logo.png";
import noNotification from "../../assets/images/no-notification-icon.svg";

export default function Header() {
  return (
    <header>
      <div className="top-bar navbar-light bg-light">
        <nav className="navbar navbar-expand-lg container cust-nav">
          <a className="navbar-brand" href="#">
            <img src={mainLogo} alt="design by fazal" width="30px" />
          </a>

          <div className="right-side justify-end">
            <ul className="navbar-nav list-unstyled flex ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={addIcon} alt="Add New Todo" width="15px" />
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown nav-link no-arrow-down">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={notificationIcon}
                      alt="Notifications"
                      width="15px"
                    />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right  shadow-none  p-0 mt-3 border-0"
                    aria-labelledby="dropdownMenu2"
                  >
                    <div className="card cust-dropdown">
                      <div className="card-header"> Notifications </div>
                      <div className="card-body">
                        <img src={noNotification} alt="Empty Notification" />
                        <h4> Stay up-to-date </h4>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" aria-disabled="true">
                  <img src={profileIcon} alt="" width="30px" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
