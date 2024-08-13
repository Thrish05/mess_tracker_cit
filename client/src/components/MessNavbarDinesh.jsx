import React from 'react'

export default function MessNavbarDinesh() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">Mess Poll</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-white ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                            </li>

                            <li className="nav-item text-white">
                                <a className="nav-link text-white" href="/menu">Menu</a>
                            </li>
                            <li className="nav-item text-white">
                                <a className="nav-link text-white" href="/vote">Vote Now</a>
                            </li>
                            <li className="nav-item text-white">
                                <a className="nav-link text-white" href="/about">About Us</a>
                            </li>
                            <li className="nav-item text-white">
                                <a className="nav-link text-white" href="/result" >Results</a>
                            </li>
                            <li className="mx-2" >
                                <button type = 'button' className = 'btn btn-outline-primary'>Log Out </button>
                            </li>
                            

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
