import Layout from "./src/components/layout.jsx"

module.exports = () => {

    return <Layout>
        <h1>
            About
        </h1>
        <p>
            {project.description}
        </p>
        <h2>Usage</h2>
        {(project.sections?.usage || []).map(i => (i.type == "heading") ? <h3>{i.text}</h3> : <p>{i.text}</p>)}
    </Layout>

}

module.exports.metadata = () => {

    return {
        title: `About • ${project.name}`,
        description: project.description
    };

}