import { Duty } from './Duty';

export const JobInfo = ({ jobs, currentJob }) => {
  const { company, dates, title, duties } = jobs[currentJob];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duty duties={duties} />
    </article>
  );
};
