import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Projects from "./routes/projects/projects.component";
import Skills from "./routes/skills/skills.components";
import Contact from "./routes/contact/contact.component";
import Resume from "./routes/resume/resume.component";
import Error from "./routes/Error/error.component";
import Footer from "./components/footer/footer.component";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
