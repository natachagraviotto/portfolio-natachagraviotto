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
    <div className="logotipo">
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
            behance="https://www.behance.net/gallery/167552931/Logotipo-VIRO"
            text="This project highlights his unique style and creative approach, reflecting his artistic vision and technical skills. It conveys sophistication and elegance establishing a solid foundation to promote his brand and attract new clients in the world of interior design and architecture."
            images={["/img/project-viro.jpg", "/img/project-viro2.jpg"]}
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
            text="This project seeks to empower women by providing an intuitive and easy-to-use tool to track and understand their menstrual cycle. The prototype offers a fluid, customizable interface packed with useful features such as symptom tracking, contraceptive reminders and accurate predictions. This user-centered design aims to improve women's health and well-being by offering a digital experience that is tailored to their individual needs."
            images={[
              "/img/project-app2.png",
              "/img/project-app.png",
              "/img/project-app4.png",
              "/img/project-app3.png",
            ]}
          />
        ),
      },
      {
        path: "projects/calculator",
        element: (
          <ProjectDetail
            category="Calculator"
            tag="Ilustrator/Photoshop"
            color="bisque"
            name="CALCULATOR"
            behance="https://www.behance.net/gallery/167552931/Logotipo-VIRO"
            text="This project highlights his unique style and creative approach, reflecting his artistic vision and technical skills. It conveys sophistication and elegance establishing a solid foundation to promote his brand and attract new clients in the world of interior design and architecture."
            images={["/img/project-calculator.png", "/img/project-viro2.jpg"]}
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
