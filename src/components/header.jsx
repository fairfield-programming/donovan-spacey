module.exports = function Header({  }) {

    return <header style="display: block; width: 100%; background: #f5f5f5;">
        <a href="/">{project.name}</a>
        <a href="/about">About</a>
        <a href="/search">Search</a>
    </header>

}