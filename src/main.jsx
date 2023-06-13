import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Projects from "./views/projects/Projects.jsx";
import Landing from "./views/landing/Landing.jsx";
import About from "./views/about/About.jsx";
import Contact from "./views/contact/Contact.jsx";
// import Welcome from "./views/welcome/Welcome.jsx";
import { Link } from "react-router-dom";
import ProjectDetail from "./views/project-detail/ProjectDetail.jsx";

const Logo = () => {
  return (
    <div className="logotipo-negro">
      <Link to="/lading"></Link>
    </div>
  );
};

export default Logo;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Esto está roto</div>,
    children: [
      { index: true, element: <Landing /> },
      { path: "landing", element: <Landing /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "projects/viro",
        element: (
          <ProjectDetail
            category="Brand Identity Design"
            tag="Ilustrator/Photoshop"
            color="bisque"
            name="VIRO"
            github="https://github.com/natachagraviotto/portfolio-natachagraviotto"
            text="This project highlights his unique style and creative approach, reflecting his artistic vision and technical skills. It conveys sophistication and elegance establishing a solid foundation to promote his brand and attract new clients in the world of interior design and architecture."
            images={["/img/project-viro.jpg", "/img/project-viro.jpg"]}
          />
        ),
      },
      {
        path: "projects/app",
        element: (
          <ProjectDetail
            category="Prototipe App"
            tag="Adobe XD"
            color="pink"
            name="APP HER"
            behance="https://www.behance.net/gallery/167550531/App-menstrual-Her"
            text="This project highlights his unique style and creative approach, reflecting his artistic vision and technical skills. It conveys sophistication and elegance establishing a solid foundation to promote his brand and attract new clients in the world of interior design and architecture."
            images={["/img/project-viro.jpg", "/img/project-viro.jpg"]}
          />
        ),
      },
      {
        path: "projects/project3",
        element: (
          <ProjectDetail
            tag="Ilustrator/Photoshop"
            title="project 3"
            github="https://www.github.com"
            text="`${projectAppText}`"
            images={[
              "https://dummyimage.com/600x400/000/fff",
              "https://dummyimage.com/600x400/000/ff0000",
            ]}
          />
        ),
      },
      {
        path: "projects/project4",
        element: (
          <ProjectDetail
            tag="Ilustrator/Photoshop"
            title="project 4"
            github="https://www.github.com"
            text="`${projectAppText}`"
            images={[
              "https://dummyimage.com/600x400/000/fff",
              "https://dummyimage.com/600x400/000/ff0000",
            ]}
          />
        ),
      },
      {
        path: "projects/project4",
        element: (
          <ProjectDetail
            tag="Ilustrator/Photoshop"
            title="project 4"
            github="https://www.github.com"
            text="`${projectAppText}`"
            images={[
              "https://dummyimage.com/600x400/000/fff",
              "https://dummyimage.com/600x400/000/ff0000",
            ]}
          />
        ),
      },
      {
        path: "projects/project4",
        element: (
          <ProjectDetail
            tag="Ilustrator/Photoshop"
            title="project 4"
            github="https://www.github.com"
            text="`${projectAppText}`"
            images={[
              "https://dummyimage.com/600x400/000/fff",
              "https://dummyimage.com/600x400/000/ff0000",
            ]}
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
