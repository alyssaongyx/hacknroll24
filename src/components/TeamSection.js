import React from "react";
import TeamMember from "./TeamMember.js";
import "./TeamSection.css";

export default function TeamSection(props) {
  const team_members = [
    {
      imageUrl: "/alyssaongyx.jpeg",
      name: "Alyssa Ong",
      designation: "Back End",
      githubUrl: "https://github.com/alyssaongyx",
      linkedinUrl: "https://www.linkedin.com/in/alyssaong03",
    },
    {
      imageUrl: "/ruth-lim.png",
      name: "Ruth Lim",
      designation: "Front End | Back End",
      githubUrl: "https://github.com/ruth-lim",
      linkedinUrl: "https://www.linkedin.com/in/ruth-lim-sze-ern/",
    },
  ];

  return (
    <header className="team-header">
      <section className="team-container">
        <span className="team-title-badge">Our Team</span>
        <h2 className="team-main-title">Meet the Dream Team</h2>
        <p className="team-description">
          We’re a group of NUS Computer Science undergraduates.
        </p>
        <div className="team-grid">
          {team_members.map((team_member, index) => (
            <TeamMember
              key={index}
              imageUrl={team_member.imageUrl}
              name={team_member.name}
              designation={team_member.designation}
              linkedinUrl={team_member.linkedinUrl}
              githubUrl={team_member.githubUrl}
            />
          ))}
        </div>

        <div className="contact-box">
          <div className="contact-header-container">
            <h2 className="contact-header">Get in touch with us</h2>
          </div>
          <div className="contact-description-container">
            <p className="contact-description">
              Have a project in mind? Looking for collaboration? Or just want to
              say hi? Connect and reach out to us!
            </p>
          </div>
        </div>
      </section>
    </header>
  );
}
