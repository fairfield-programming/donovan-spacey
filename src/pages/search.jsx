module.exports = () => {

    return <main>
        <div className="w-full">
            <h1>
                Search
            </h1>
            <p>
                {project.description}
            </p>
        </div>
    </main>

}

module.exports.metadata = () => {

    return {
        title: `Search • ${project.name}`,
        description: project.description
    };

}