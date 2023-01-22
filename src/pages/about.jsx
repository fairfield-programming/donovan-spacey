module.exports = () => {

    return <main>
        <div className="w-full">
            <h1>
                About
            </h1>
            <p>
                {project.description}
            </p>
        </div>
    </main>

}

module.exports.metadata = () => {

    return {
        title: `About • ${project.name}`,
        description: project.description
    };

}