import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projectImg1 from "../assets/img/projectimg1.jpg";
import projectImg2 from "../assets/img/projectimg2.jpg";
import projectImg3 from "../assets/img/projectimg3.jpg";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Website",
      description: "Design and Development",
      imgUrl: projectImg1,
    },
    {
      title: "Ecommerce Website",
      description: "Design and Development",
      imgUrl: projectImg2,
    },
    {
      title: "Ecommerce Website",
      description: "Design and Development",
      imgUrl: projectImg3,
    },
    {
      title: "Ecommerce Website",
      description: "Design and Development",
      imgUrl: projectImg2,
    },
    {
      title: "Ecommerce Website",
      description: "Design and Development",
      imgUrl: projectImg3,
    },
    {
      title: "Ecommerce Website",
      description: "Design and Development",
      imgUrl: projectImg1,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              tellus elementum sagittis vitae et leo duis ut. Volutpat sed cras
              ornare arcu dui.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab" >
                <Nav.Item>
                  <Nav.Link eventKey="first">React Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Nextjs Projects </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">FullStack Projects</Nav.Link>
                </Nav.Item>
              </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project, index) => {
                    return (
                    <ProjectCard key={index} {...project} />
                    )
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second"> <Row>
                  {projects.map((project, index) => {
                    return (
                    <ProjectCard key={index} {...project} />
                    )
                  })}
                </Row></Tab.Pane>
              <Tab.Pane eventKey="third"> <Row>
                  {projects.map((project, index) => {
                    return (
                    <ProjectCard key={index} {...project} />
                    )
                  })}
                </Row></Tab.Pane>
            </Tab.Content>
            </Tab.Container>

          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}/> */}
    </section>
  );
};
