import React from "react";

import Link from "next/link";

import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import data from "../../data/farminar.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Text",
    },
  };
}

export default () => {
  return (
    <React.Fragment>
      {data.jumbotron && (
        <section className="py-7 position-relative dark-overlay">
          <img
            src={`/content/${data.jumbotron.img}`}
            alt=""
            className="bg-image"
          />
          <Container>
            <div className="overlay-content text-white py-lg-5">
              <h3 className="display-3 font-weight-bold text-serif text-shadow mb-5">
                {data.jumbotron.title}
              </h3>
            </div>
          </Container>
        </section>
      )}

      {data.topBlocks && (
        <section className="py-6 bg-gray-100">
          <Container>
            <div className="text-center pb-lg-4">
              <p className="subtitle text-secondary">
                {data.topBlocks.subTitle}
              </p>
              <h2 className="mb-5">{data.topBlocks.title}</h2>
            </div>
            <Row>
              {data.topBlocks.blocks.map((block) => (
                <Col
                  key={block.title}
                  lg="4"
                  className="mb-3 mb-lg-0 text-center"
                >
                  <div className="px-0 px-lg-3">
                    <div className="icon-rounded bg-primary-light mb-3">
                      <svg className="svg-icon text-primary w-2rem h-2rem">
                        <use
                          xlinkHref={`content/svg/orion-svg-sprite.svg${block.icon}`}
                        >
                          {" "}
                        </use>
                      </svg>
                    </div>
                    <h3 className="h5">{block.title}</h3>
                    <p className="text-muted">{block.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </React.Fragment>
  );
};
