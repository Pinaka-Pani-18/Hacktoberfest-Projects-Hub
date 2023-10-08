import React, { useState, useEffect } from 'react'

export const Contributors = () => {
    const [contributors, setContributors] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/repos/Pinaka-Pani-18/Hacktoberfest-Projects-Hub/contributors')
            .then(response => response.json())
            .then(data => setContributors(data))
    }, [])

    return (
        <>
        <div className="contributors-heading">
            <h1>Contributors</h1>
        </div>
        <div className="contributors">
            <div className="contributer-profile-container">
                {contributors.map(contributor => (
                    <div className="contributor" key={contributor.id}>
                        <img src={contributor.avatar_url} alt={contributor.login} />
                            <h3>{contributor.login}</h3>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .contributer-profile-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                }

                .contributors-heading {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                .contributors {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    grid-gap: 1rem;
                }

                .contributor {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .contributor img {
                    width: 100%;
                    max-width: 200px;
                    height: auto;
                    border-radius: 50%;
                    margin-bottom: 0.5rem;
                }

                @media (max-width: 768px) {
                    .contributors {
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    }
                }

                @media (max-width: 480px) {
                    .contributors {
                        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                    }

                    .contributor img {
                        max-width: 150px;
                    }
                }
            `}</style>
        </div></>
    )
}
