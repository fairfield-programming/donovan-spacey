import Layout from "./src/components/layout.jsx"

module.exports = () => {

    return <Layout>
        <h1>
            About
        </h1>
        <p>
            {project.description}
        </p>
    </Layout>

}

module.exports.metadata = () => {

    return {
        title: `About • ${project.name}`,
        description: project.description
    };

}