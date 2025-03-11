import "bootstrap-icons/font/bootstrap-icons.css";

export const ExperienceCard = ({ icon, year, title, description }) => {
  return (
    <div className="timeLineItem">
      <i className={icon}></i>
      <span>{year}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
