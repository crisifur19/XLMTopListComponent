import { useState, useEffect, useCallback } from "react";
import Stack from "react-bootstrap/Stack";
import TopListPanel from "./components/TopListPanel";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
//Custom hooks
import { useFetch } from "./hooks/useFetch";
//Components
import Badge from "./components/Badge";
import OfferButton from "./components/OfferButton";
import RatingSupporting from "./components/RatingSupporting";

function App() {
  ///URL with the API End Point to fetch
  //useState to have in the future new urls
  const [url, setUrl] = useState(
    "https://kwm6eoos53.execute-api.us-east-1.amazonaws.com/prod/results"
  );
  const { statusCode, components } = useFetch(url);
  ///Use state to verify the rating on the API
  const [rating, setRaiting] = useState(null);
  //Use State for the re arrange of the components
  const [windowSize, setWindowSize] = useState(window.screen.width);

  const windowRezise = useCallback(
    async (windowWidth) => {
      window.onresize = () => setWindowSize(window.screen.width);

      if (windowWidth < 992) {
        const componentsToRearrange = document.getElementsByClassName("oF");
        for (let index = 0; index < componentsToRearrange.length; index++) {
          componentsToRearrange[index].classList.add("order-first");
        }

        const componentsToCenter = document.getElementsByClassName("dC");
        for (let index = 0; index < componentsToCenter.length; index++) {
          componentsToCenter[index].classList.add(
            "display-center",
            "d-flex",
            "justify-content-center"
          );
        }

        document.getElementById("points").classList.add("display-none");
      } else {
        const componentsToRearrange = document.getElementsByClassName("oF");
        for (let index = 0; index < componentsToRearrange.length; index++) {
          componentsToRearrange[index].classList.remove("order-first");
        }

        const componentsToCenter = document.getElementsByClassName("dC");
        for (let index = 0; index < componentsToCenter.length; index++) {
          componentsToCenter[index].classList.remove(
            "display-center",
            "d-flex",
            "justify-content-center"
          );
        }

        document.getElementById("points").classList.remove("display-none");
      }
    },
    [windowSize]
  );

  useEffect(() => {
    windowRezise(windowSize);
  }, [windowRezise]);

  if (components) {
    console.log(components.contents[0]);
  }

  return (
    <div className="App">
      {/* This operator is to avoid loading and empy component, only loads when the fetch is done */}
      {components && (
        // vessel component
        <TopListPanel>
          <Container fluid>
            {/* body of component */}
            <Row className="toplist-panel">
              <Col md={12} lg={2} className="oF dC">
                {/* badge component */}
                <Badge imgUrl={components.contents[0].data.externalUrl}></Badge>
              </Col>
              <Col md={12} lg={5} className="dC">
                {/* offer component */}
                <OfferButton
                  brandName={components.contents[0].data.ctbrand_name}
                  productGroup={components.contents[0].data.ctproduct_group}
                  offer={components.contents[0].data.ctoffer_tc}
                  code={components.contents[0].data.ctpromo_code}
                  affiliateLink={components.contents[0].data.ctaffiliate_link}
                ></OfferButton>
              </Col>
              <Col md={12} lg={5} className="oF dC">
                {/* Brand rating component */}
                <RatingSupporting
                  ctBrandrating={components.contents[0].body.ctBrandrating}
                  ctUniquesellingpoints={
                    components.contents[0].body.ctUniquesellingpoints
                  }
                ></RatingSupporting>
              </Col>
            </Row>
            <Row>
              {/* begins legal panel, by the way I didn't found the dynamic data on the API, so I used Lorem */}
              <Col className="toplist-panel-legal">
                <p
                  className="secondary-font tiny "
                  style={{ color: "color:#575757" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
            </Row>
          </Container>
        </TopListPanel>
      )}
    </div>
  );
}

export default App;
