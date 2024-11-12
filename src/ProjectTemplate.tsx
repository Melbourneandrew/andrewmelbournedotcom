export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function ProjectTemplate({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  imageUrl,
  imageAlt,
}: Project) {
  return (
    <div className="w-full max-w-2xl p-6 pt-0">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(githubUrl || demoUrl) && (
          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        )}

        {/* Project Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-48 object-cover rounded-md"
          />
        )}
      </div>
    </div>
  );
}
