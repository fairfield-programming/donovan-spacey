import Layout from "./src/components/layout.jsx"
import "../example.css"

module.exports = () => {

    return <Layout>
        <h1>
            Docs
        </h1>
    </Layout>

}

module.exports.metadata = () => {

    return {
        title: `Docs • ${project.name}`,
        description: project.description
    };

}