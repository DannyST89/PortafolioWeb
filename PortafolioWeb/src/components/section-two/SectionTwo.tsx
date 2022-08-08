import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCsharp,
  SiCss3,
  SiMicrosoftsqlserver,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";

/*
  this array of objects contains the elements of the component that we need to show
*/

const languagesIcons = [
  {
    id: 1,
    urlImage: <SiTypescript />,
  },
  {
    id: 2,
    urlImage: <AiFillHtml5 />,
  },
  {
    id: 3,
    urlImage: <SiCsharp />,
  },
  {
    id: 4,
    urlImage: <SiMicrosoftsqlserver />,
  },
  {
    id: 5,
    urlImage: <FaJava />,
  },
  {
    id: 6,
    urlImage: <FaReact />,
  },
  {
    id: 7,
    urlImage: <SiCss3 />,
  },
];

export const SectionTwo = () => {
  return (
    <div className="section-two-languages">
      {languagesIcons.map((item) => {
        return (
          <div className="langueges-Icons">
            <div>
              <span className="icon-style">{item.urlImage}</span>
            </div>
            <div>
              <h2>{item.id}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
