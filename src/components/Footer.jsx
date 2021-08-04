import React from "react";

function Footer() {
    let today = new Date()
    let currentYear = today.getFullYear()

    return (
        <footer className="footer">
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    )
}

export default Footer