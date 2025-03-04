export interface Project {
  title: string;
  description: string;
  technologies: string[];
  date?: string;
  links?: Record<string, string>;
  imageUrl?: string;
  imageAlt?: string;
}

export default function ProjectTemplate({
  title,
  date,
  description,
  technologies,
  links,
  imageUrl,
  imageAlt,
}: Project) {
  return (
    <div className="w-full max-w-2xl p-6 pt-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
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
        {links && Object.keys(links).length > 0 && (
          <div className="flex gap-4">
            {Object.entries(links).map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}

        {/* Project Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full max-w-[624px] object-cover rounded-md border border-gray-200"
          />
        )}
      </div>
    </div>
  );
}
