import Header from "./src/components/header.jsx"

module.exports = function Layout({ children }) {

    return <div>
        <Header />
        <main>
            {children}
        </main>
        <footer>Made with ❤️ through Donovan</footer>
    </div>

}