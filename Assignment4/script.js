document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://your-github-username.github.io/your-repo-name/data.json"; // Replace with your actual GitHub JSON URL
    const contentDiv = document.getElementById("content");

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            let html = "";
            data.forEach(item => {
                html += `
                    <div class="card">
                        <img src="${item.image}" alt="${item.name}">
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                    </div>
                `;
            });
            contentDiv.innerHTML = html;
        })
        .catch(error => console.error("Error fetching data:", error));
});
