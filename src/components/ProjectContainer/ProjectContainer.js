import uniqid from "uniqid";
//import GitHubIcon from '@mui/icons-material/GitHub'
//import LaunchIcon from '@mui/icons-material/Launch'
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3 style={{ color: "#2978b5" }}>{project.name}</h3>

    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}
    {project.livePreview && (
      <a
        href={project.livePreview}
        target="_blank"
        aria-label="source code"
        className="link link--icon"
      >
        <button type="button" class="btn btn-outline-warning">
          View Demo
        </button>
      </a>
    )}

    {/* {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )} */}
  </div>
);

export default ProjectContainer;
