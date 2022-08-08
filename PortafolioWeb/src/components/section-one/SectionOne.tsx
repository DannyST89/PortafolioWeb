import { Button } from "react-bootstrap";
import { AiFillFilePdf } from "react-icons/ai";
import * as images from "../../assets/images/images";

export const SectionOne = () => {
  return (
    <div className="section-one-container">
      <div className="section-one-imgPerfil">
        <img className="" src={images.perfil} alt="picture img portafolio" />
      </div>
      <div className="section-one-contact">
        <div>
          <h4>Downlad Resume</h4>
        </div>
        <div>
          <Button>
            <span>{<AiFillFilePdf />}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
