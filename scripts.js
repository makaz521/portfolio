
document.addEventListener("DOMContentLoaded", function () {
    const projectsList = document.getElementById("projects-list");
    const githubUsername = "yourusername"; // Replace with your GitHub username

    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                // Skip the manual projects we already added
                if (repo.name !== 'automated-marking' && repo.name !== 'smart-task-tracker' && repo.name !== 'e-church-system' && repo.name !== 'e-commerce') {
                    const projectDiv = document.createElement("div");
                    projectDiv.classList.add("project");
                    projectDiv.innerHTML = `
                        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                        <p>${repo.description || "No description available"}</p>
                    `;
                    projectsList.appendChild(projectDiv);
                }
            });
        })
        .catch(error => console.error("Error fetching GitHub repos:", error));
});
