import Layout from "./src/components/layout.jsx"
import Donovan from "donovan"

module.exports = () => {

    return <Layout>
            <h1>
                {project.name}
            </h1>
            <p>
                {project.description}
            </p>
    </Layout>

}

module.exports.metadata = () => {

    return {
        title: project.name,
        description: project.description
    };

}