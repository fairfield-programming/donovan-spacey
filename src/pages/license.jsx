import Layout from "./src/components/layout.jsx"

module.exports = () => {

    return <Layout>
        <h1>
            License
        </h1>
        {project.license?.split("\n").map(i => (i == "") ? <></> : <p>{i}</p>)}
    </Layout>

}

module.exports.metadata = () => {

    return {
        title: `License • ${project.name}`,
        description: project.license
    };

}