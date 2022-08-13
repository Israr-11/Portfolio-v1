import React from "react";

const Footer = () => {
return(
  <>
 <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1",marginTop:50}}>
  <div className="container pt-4">
    <section className="mb-4">
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f"></i></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i></a>

      {/* <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i></a> */}

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/israr-ahmed-aaa785212/"
        role="button"
        target="_blank"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i></a>
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/Israr-11"
        target="_blank"
        role="button"
        data-mdb-ripple-color="dark"><i class="fab fa-github"></i></a>
    </section>
  </div>

  <div className="text-center text-dark p-3" >
    © 2022 Copyright:
    <a className="text-dark" href="#home">Israrportfolio</a>
  </div>
</footer>
  </>
)
  }


export default Footer
