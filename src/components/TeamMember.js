import React from "react";
import linkedinLogo from "../linkedinicon.svg";
import githubLogo from "../githubicon.svg";

export default function TeamMember({
  imageUrl,
  name,
  designation,
  githubUrl,
  linkedinUrl,
}) {
  return (
    <div className="team-member-item">
      <img
        loading="lazy"
        src={imageUrl}
        className="team-member-image"
        alt={`${name}`}
      />
      <p className="team-member-name">{name}</p>
      <p className="team-member-designation">{designation}</p>
      <div className="social-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
