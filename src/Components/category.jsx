import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RandomJobsAction,
  categoryFilteredJobsAction,
} from "../redux/actions/jobActions";
import dataCate from "../assets/fakeData/dataCategory";

Category.propTypes = {};

function Category(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const navigate = useNavigate();
  const { className } = props;

  // State for filters
  const [jobType, setJobType] = useState(""); // Job Type filter (Full-time, Part-time, Contract)
  const [salaryRange, setSalaryRange] = useState(""); // Salary range filter
  const [location, setLocation] = useState(""); // Location filter (Remote, On-site, Hybrid)
  const [experienceLevel, setExperienceLevel] = useState(""); // Experience level filter

  const [dataBlock] = useState({
    title: "Browse by category",
    text: "Recruitment Made Easy in 100 seconds",
  });

  // Handle category click, include filters
  const handleCategoryClick = async (title) => {
    try {
      navigate(`/jobsPlatform-FrontEnd/job-list-sidebar/category/${title}`);
    } catch (error) {
      console.error("Error fetching category jobs:", error);
    }
  };

  // Handle the salary range change
  const handleSalaryRangeChange = (e) => {
    setSalaryRange(e.target.value);
  };

  // Handle the job type change
  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  // Handle location change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle experience level change
  const handleExperienceLevelChange = (e) => {
    setExperienceLevel(e.target.value);
  };

  return (
    <section className={className}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title">
              <div className="group-title">
                <h1>{dataBlock.title}</h1>
                <p>{dataBlock.text}</p>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="row mb-4">
            <div className="col-md-3">
              {/* Job Type Filter */}
              <div className="filter-group">
                <label htmlFor="job-type">Job Type:</label>
                <select
                  id="job-type"
                  value={jobType}
                  onChange={handleJobTypeChange}
                  className="form-control"
                >
                  <option value="">All</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>

            <div className="col-md-3">
              {/* Salary Range Filter */}
              <div className="filter-group">
                <label htmlFor="salary-range">Salary Range:</label>
                <select
                  id="salary-range"
                  value={salaryRange}
                  onChange={handleSalaryRangeChange}
                  className="form-control"
                >
                  <option value="">All</option>
                  <option value="0-50000">0 - 50,000</option>
                  <option value="50000-100000">50,000 - 100,000</option>
                  <option value="100000-150000">100,000 - 150,000</option>
                  <option value="150000+">150,000+</option>
                </select>
              </div>
            </div>

            <div className="col-md-3">
              {/* Location Filter */}
              <div className="filter-group">
                <label htmlFor="location">Location:</label>
                <select
                  id="location"
                  value={location}
                  onChange={handleLocationChange}
                  className="form-control"
                >
                  <option value="">All</option>
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="col-md-3">
              {/* Experience Level Filter */}
              <div className="filter-group">
                <label htmlFor="experience-level">Experience Level:</label>
                <select
                  id="experience-level"
                  value={experienceLevel}
                  onChange={handleExperienceLevelChange}
                  className="form-control"
                >
                  <option value="">All</option>
                  <option value="Entry-level">Entry-level</option>
                  <option value="Mid-level">Mid-level</option>
                  <option value="Senior-level">Senior-level</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Section */}
          <div className="col-md-12">
            <div
              className="group-category-job wow fadeInUp row"
              data-wow-delay=".2s"
            >
              {dataCate.map((idx) => (
                <div
                  key={idx.id}
                  className={`job-category-box col-4 ${idx.margin}`}
                >
                  <div className="job-category-header">
                    <h1>
                      <span onClick={() => handleCategoryClick(idx.title)}>
                        {idx.title}
                      </span>
                    </h1>
                  </div>
                  <span
                    className="btn-category-job"
                    onClick={() => {
                      handleCategoryClick(idx.title);
                    }}
                  >
                    Explore Jobs{" "}
                    <span className="icon-keyboard_arrow_right"></span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
