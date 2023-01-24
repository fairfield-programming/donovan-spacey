import Layout from "./src/components/layout.jsx"

module.exports = () => {

    return <Layout>
        <h1>
            License
        </h1>
        <p>
            {project.license}
        </p>
    </Layout>

}

module.exports.metadata = () => {

    return {
        title: `License • ${project.name}`,
        description: project.license
    };

}