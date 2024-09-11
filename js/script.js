function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

const projects = [
    {
        title: "Portfolio in Canva",
        description: "A personal portfolio website showcasing my skills and projects.",
        link: "https://www.canva.com/design/DAF7O32FlPc/LSQobPdxXf2l7JwUuDd-8g/view?utm_content=DAF7O32FlPc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },
    {
        title: "Puto Cheese Recipe",
        description: "A simple to-do list on how to cook my favorite food.",
        link: "https://rolandojayoma.github.io/PutoSheesh/"
    },
];

function displayProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectsContainer.appendChild(projectElement);
    });
}

displayProjects();
