import { Tab } from "bootstrap";
import Tabs from "react-bootstrap/Tabs";
import { data } from "../helper/data";
import FilmInfo from "./FilmInfo";

function Card() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      {data.map((item) => {
        return (
          <Tab className="title" eventKey={item.date} title={item.date}>
            <FilmInfo
              title={item.title}
              body={item.body}
              tags={item.tags}
              rate={item.rate}
            />
          </Tab>
        );
      })}
    </Tabs>
  );
}

export default Card;
