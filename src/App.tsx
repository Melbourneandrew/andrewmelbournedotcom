import { useState } from "react";
import ProjectTemplate from "./ProjectTemplate";
import { projects, technologies } from "./projects";
import GithubIcon from "./icons/github";
import LinkedinIcon from "./icons/linkedin";
import XIcon from "./icons/x";
import DevpostIcon from "./icons/devpost";
import BlogIcon from "./icons/blog";

export default function App() {
  const [projectList, setProjectList] = useState(projects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>(
    []
  );

  // Get unique technologies from all projects
  const allTechnologies = Object.values(technologies);

  // Filter projects based on search term and selected technology
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTech =
      selectedTechs.length === 0 ||
      selectedTechs.some((tech) =>
        project.technologies.includes(tech)
      );
    return matchesSearch && matchesTech;
  });

  // Add toggle function for tech selection
  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  const links = {
    github: "https://github.com/Melbourneandrew",
    linkedin: "https://www.linkedin.com/in/melbourneandrew/",
    twitter: "https://x.com/andrew_melby",
    devpost: "https://devpost.com/Melbourneandrew",
    huggingface: "https://huggingface.co/M3LBY",
    blog: "https://blog.melbournedev.com",
  };

  // Add new state for filter visibility
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <div className="flex flex-col items-center mt-[30px] h-screen">
      {/* Header */}
      <div className="text-4xl font-bold mb-[5px]">
        Andrew Melbourne
      </div>
      {/* Links */}
      <div className="flex flex-row gap-4 mb-[30px]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-1"
          href={links.github}
        >
          <GithubIcon /> Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-1"
          href={links.linkedin}
        >
          <LinkedinIcon /> LinkedIn
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-1"
          href={links.twitter}
        >
          <XIcon /> Twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-1"
          href={links.devpost}
        >
          <DevpostIcon /> Devpost
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-1"
          href={links.blog}
        >
          <BlogIcon /> Blog
        </a>
      </div>

      {/* Filter and Search */}
      <div className="w-full max-w-2xl px-6 flex flex-col mb-[20px]">
        <div className="flex flex-row items-center gap-2">
          <div className="text-2xl font-bold mr-auto">
            Projects
          </div>
          <button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className="text-left"
          >
            <span className="text-lg whitespace-nowrap px-2 py-1">
              Filter &equiv;
            </span>
          </button>
        </div>

        {isFilterVisible && (
          <div className="flex flex-col gap-4 mt-[10px] mb-[20px]">
            <input
              type="text"
              placeholder=" Search projects..."
              className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedTechs.includes(tech)
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="h-[1px] w-full bg-gray-400"></div>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-4">
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <ProjectTemplate {...project} />
            {index < filteredProjects.length - 1 && (
              <div className="h-[1px] w-full bg-gray-200 mb-[10px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
