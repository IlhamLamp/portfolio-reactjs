import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import BackIcon from "@material-ui/icons/ArrowBack";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const navigate = useNavigate();

    return (
        <div className="project">
            <div className="goBack"
                onClick={() => {
                    navigate("/projects/")
                }}
            >
                <BackIcon />
            </div>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.img_alt} />
            <p>
                Skills: {project.skills}
            </p>
            <a href={project.github}><GitHubIcon /></a>
        </div>
    );

}

export default ProjectDisplay;