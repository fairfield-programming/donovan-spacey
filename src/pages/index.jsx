import Layout from "./src/components/layout.jsx"
import Donovan from "donovan"

module.exports = () => {

    console.log(MODULE_PATH())

    return <Layout>
            <h1>
                {project.name}
            </h1>
            <p>
                {project.description}
            </p>
            <h2>Contributing</h2>
            {(project.sections?.contributing || []).map(i => (i.type == "heading") ? <h3>{i.text}</h3> : <p>{i.text}</p>)}
    </Layout>

}

module.exports.metadata = () => {

    return {
        title: project.name,
        description: project.description
    };

}