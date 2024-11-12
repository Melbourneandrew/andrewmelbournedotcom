import { useState } from "react";
import ProjectTemplate from "./ProjectTemplate";
import { projects } from "./projects";

export default function App() {
  const [projectList, setProjectList] = useState(projects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>(
    []
  );

  // Get unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort();

  // Filter projects based on search term and selected technology
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTech =
      selectedTechs.length === 0 ||
      selectedTechs.every((tech) =>
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
  };

  // Add new state for filter visibility
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <div className="flex flex-col items-center mt-[30px] h-screen">
      {/* Header */}
      <div className="text-4xl font-bold">Andrew Melbourne</div>
      {/* Links */}
      <div className="flex flex-row gap-4 mb-[30px]">
        <a href={links.github}>Github</a>
        <a href={links.linkedin}>LinkedIn</a>
        <a href={links.twitter}>X/Twitter</a>
        <a href={links.devpost}>Devpost</a>
      </div>

      {/* Filter and Search */}
      <div className="w-full max-w-2xl px-6 flex flex-col mb-[5px]">
        <button
          onClick={() => setIsFilterVisible(!isFilterVisible)}
          className="w-full text-left"
        >
          <span className="text-gray-600 text-lg">
            Filter &equiv;
          </span>
        </button>

        {isFilterVisible && (
          <div className="flex flex-col gap-4 mt-[5px] mb-[20px]">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedTechs.includes(tech)
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
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-4">
        {filteredProjects.map((project, index) => (
          <>
            <ProjectTemplate key={index} {...project} />
            {index < filteredProjects.length - 1 && (
              <div className="h-[1px] w-full bg-gray-200 mb-[10px]"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}