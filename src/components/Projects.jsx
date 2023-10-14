import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-28 px-4 sm:px-36 text-center">
      {/* search bar */}

      {/* add your project */}

      {/* Project card */}
      <div className="card__container py-4 grid lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      {/* back to top */}
    </section>
  );
};

export default Projects;
