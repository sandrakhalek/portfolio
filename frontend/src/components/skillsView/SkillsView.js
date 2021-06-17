import "./SkillsView.css";
import React, { useState } from "react";
import Skills from "./skills/Skills";
import CustomModal from "./CustomModal";

function SkillsView() {
  const [modalShow, setModalShow] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className="container-fluid">
      <header className="row title-div skill">
        <div className="col-lg-12 col-xl-8">
          <h1 className="skill-header">Get a glance at my skills</h1>
          <svg className="svg-rect">
            <rect height="30px" width="100%" />
          </svg>
        </div>
        <div className="col-lg-12 col-xl-4 ">
          <button className="add-btn" onClick={() => setModalShow(true)}>
            <i className="bx bxs-add-to-queue bx-md" />
          </button>
          <i className="bx bx-search" />
          <input
            className="search-box form-control"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search.."
          />
        </div>
      </header>
      <div className="row skill-row">
        <div className="col-lg-4">
          <Skills skillCategory="Technical" searchTerm={search} />
        </div>
        <div className="col-lg-4">
          <Skills skillCategory="Software" searchTerm={search} />
        </div>
        <div className="col-lg-4">
          <Skills skillCategory="Soft" searchTerm={search} />
        </div>
      </div>
      <CustomModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default SkillsView;
