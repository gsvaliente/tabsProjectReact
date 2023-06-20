/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { JobInfo } from "./components/JobInfo";
import { useFetch } from "./useFetch";
import { BtnContainer } from "./components/BtnContainer";

const url = "https://course-api.com/react-tabs-project",
  App = () => {
    const { isLoading, isError, data: jobs } = useFetch(url);
    const [currentJob, setCurrentJob] = useState(0);

    if (isLoading) {
      return (
        <section className="jobs-center">
          <div className="loading"></div>
        </section>
      );
    }

    if (isError) {
      return <h3>Error while fetching</h3>;
    }

    return (
      <section className="jobs-center">
        <BtnContainer
          jobs={jobs}
          currentJob={currentJob}
          setCurrentJob={setCurrentJob}
        />
        <JobInfo jobs={jobs} currentJob={currentJob} />
      </section>
    );
  };
export default App;
