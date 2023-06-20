export const BtnContainer = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, idx) => {
        return (
          <button
            key={job.id}
            type="button"
            className={idx === currentJob ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrentJob(idx)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
