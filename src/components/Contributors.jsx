import { useState, useEffect } from "react";
import "../CSS/Contributors.css";

function Contributors() {
    const [contributors, setContributors] = useState([]);
    const [error, setError] = useState(null);

    const owner = "Pinaka-Pani-18";
    const repo = "Hacktoberfest-Projects-Hub";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/${owner}/${repo}/contributors`
                );
                const data = await response.json();
                setContributors(data);
            } catch (error) {
                setError("Error occurred while fetching contributors.");
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs once after initial render

    return (
        <div>
            <h1 className="contributors-container-heading">Contributors</h1>
            <div className="contributors-container">
                {error ? (
                    <h1>{error}</h1>
                ) : (
                    contributors.map((contributor) => (
                        <div
                            onClick={() => window.open(contributor.html_url)}
                            className="contributor"
                            key={contributor.id}
                        >
                            <img
                                src={contributor.avatar_url}
                                alt="Contributor Avatar"
                            />
                            <p>{contributor.login}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Contributors;
