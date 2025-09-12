import { Fade } from "react-reveal";
import { clientsSection } from "../../portfolio";
import "./Clients.scss";

export default function Clients() {
  if (!clientsSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main clients-section">
        <div className="clients-heading-div">
          <h1 className="project-title">{clientsSection.title}</h1>
          <p className="subTitle clients-subtitle">{clientsSection.subtitle}</p>
        </div>
        <div className="clients-logos-div">
          {clientsSection.logos.map((client, i) => (
            <img
              key={i}
              src={client.image}
              alt={client.name}
              title={client.name}
              className="client-logo"
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}
