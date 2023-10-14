import { useState, useEffect } from "react";

export const Contributors = () => {
    const [contributors, setContributors] = useState([]);
    const [error, setError] = useState(null);

    const owner = "Pinaka-Pani-18";
    const repo = "Hacktoberfest-Projects-Hub";

    useEffect(() => {
        const locallyCachedContributors = localStorage.getItem("contributors");
        if (locallyCachedContributors) {
            let contributors = JSON.parse(locallyCachedContributors);
            const currentTimestamp = Math.floor(Date.now() / 1000);
            const secondsToCache = 7200; // 60 * 60 * 2 => Two hours

            if (contributors.cachedAt + secondsToCache > currentTimestamp)
                return setContributors(contributors.data);
        }
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/${owner}/${repo}/contributors`
                );
                const data = await response.json();
                const currentTimestamp = Math.floor(Date.now() / 1000);

                localStorage.setItem(
                    "contributors",
                    JSON.stringify({
                        data: data,
                        cachedAt: currentTimestamp,
                    })
                );
                setContributors(data);
            } catch (error) {
                setError("Error occurred while fetching contributors.");
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen mt-20">
            <h1 className="text-center text-7xl pt-12 font-bold text-[#1f2937]">Contributors</h1>
            <div className="flex flex-wrap justify-center gap-8 px-20 py-12">
                {error ? (
                    <h1 className="text-2xl">{error}</h1>
                ) : (
                    contributors.map((contributor) => (
                        <div
                            onClick={() => window.open(contributor.html_url)}
                            className="cursor-pointer shadow-lg bg-white rounded-lg p-5"
                            key={contributor.id}
                            style={{ width: "200px" }}
                        >
                            <img
                                src={contributor.avatar_url}
                                alt="Contributor Avatar"
                                className="w-36 h-36 object-cover mx-auto rounded-full transform transition-transform hover:scale-110 duration-300  hover:shadow-blue-900 shadow-lg"
                            />
                            <p className="text-center mt-6">
                                <p className=" font-bold text-lg">{contributor.login}</p>
                                {contributor.login === owner ?
                                    <h1 className="text-gray-700 font-semibold">Project Admin</h1>
                                    :
                                    <h1 className="text-gray-700 font-semibold">Contributor</h1>
                                }
                                <p className="text-sm"> {contributor.contributions}{" "}
                                    {contributor.contributions === 1 ? "Commit" : "Commits"}
                                </p>
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
