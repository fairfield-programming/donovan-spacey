module.exports = () => {

    return <main>
        <div className="w-full">
            <h1>
                {project.name}
            </h1>
            <p>
                {project.description}
            </p>
        </div>
    </main>

}

module.exports.getHead = () => {

    return <>
        <title>{project.name}</title>
    </>;

}