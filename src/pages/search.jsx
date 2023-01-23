import Layout from "./src/components/layout.jsx"

module.exports = () => {

    return <Layout>
        <h1>
            Search
        </h1>
        <p>
            {project.description}
        </p>
    </Layout>

}

module.exports.metadata = () => {

    return {
        title: `Search • ${project.name}`,
        description: project.description
    };

}