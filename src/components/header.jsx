const Donovan = require('donovan')

module.exports = function Header({  }) {

    const path = Donovan.useState("/test");

    return <header>
        <a href="/">{project.name}</a>
        <a href="/about">About</a>
        <a href="/search">Search</a>
    </header>

}