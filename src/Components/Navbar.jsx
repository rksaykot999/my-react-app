
export default function () {
    return (
        <div className="navbar bg-base-100 shadow-sm px-1 lg:px-5">
            <div className="hidden lg:block navbar-start">
                <div className="flex-1">
                    <a href="index.html" className="text-xl font-bold">RK Saykot</a>
                </div>
            </div>
            <div className="block lg:hidden navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>About</a></li>
                        <li>
                            <details>
                                <summary>Services</summary>
                                <ul class="p-2 bg-base-100 w-40 z-1">
                                    <li><a>Graphics Design</a></li>
                                    <li><a>Web Design and Development</a></li>
                                    <li><a>SEO Optimization</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Skills</a></li>
                        <li>
                            <details>
                                <summary>Projects</summary>
                                <ul class="p-2 bg-base-100 w-40 z-1">
                                    <li><a>Educational Projects</a></li>
                                    <li><a>E-Commarce Projets</a></li>
                                    <li><a>Portfolio Projects</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><a>About</a></li>
                    <li>
                        <details>
                            <summary>Services</summary>
                            <ul class="p-2 bg-base-100 w-40 z-1">
                                <li><a>Graphics Design</a></li>
                                <li><a>Web Design and Development</a></li>
                                <li><a>SEO Optimization</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Skills</a></li>
                    <li>
                        <details>
                            <summary>Projects</summary>
                            <ul class="p-2 bg-base-100 w-40 z-1">
                                <li><a>Educational Projects</a></li>
                                <li><a>E-Commarce Projets</a></li>
                                <li><a>Portfolio Projects</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div class="navbar-center block lg:hidden">
                <div className="flex-1">
                    <a href="index.html" className="text-xl font-bold">RK Saykot</a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="src/assets/RK logo.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}