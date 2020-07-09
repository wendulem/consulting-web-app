import React from "react";
import {
  Row,
  Col,
  Layout,
  Affix,
  Button,
  Typography,
  PageHeader,
  Divider,
} from "antd";
import { Link } from "react-router-dom";
import logo from "../assets/quix logo.svg";
import graphic1 from "../assets/coding__two_color.svg";
import graphic2 from "../assets/analyzing_process_two_color.svg";
import graphic3 from "../assets/team_presentation_two_color_1.svg";
import pandaslogo from "../assets/pandas.svg";
import pytorchlogo from "../assets/pytorch.svg";
import tensorflowlogo from "../assets/tensorflow-tf.svg";
import awslogo from "../assets/Amazon_Web_Services_Logo.svg";

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

class Homepage extends React.Component {
  render() {
    return (
      <Layout>
        <Affix>
          <PageHeader
            ghost={false}
            subTitle="Quix Consult"
            extra={[
              <Button key="2">Get Quote</Button>,
              <Link to="/home">
                <Button
                  key="1"
                  type="primary"
                  style={{ background: "#00009c", borderColor: "#00009c" }}
                >
                  Home
                </Button>
              </Link>,
            ]}
          ></PageHeader>
        </Affix>
        <Content className="site-layout-background">
          <Row style={{ textAlign: "center" }}>
            <Col span={2} />
            <Col span={9}>
              <img
                src={logo}
                alt="loading..."
                style={{
                  height: "220px",
                  width: "140%",
                  "padding-top": "30px",
                }}
              />
              <Title
                style={{
                  color: "#00009c",
                  "font-size": "25px",
                  position: "absolute",
                  left: "310px",
                  top: "180px",
                  "z-index": "1",
                }}
              >
                Welcome to the Cutting Edge
              </Title>
              <div
                style={{
                  "font-size": "20px",
                  "padding-left": "290px",
                  "padding-top": "5px",
                }}
              >
                <Text>
                  Bring your small/medium-sized business out of the past and
                  into the future and with our blue-chip engineering talent.
                </Text>
              </div>
              {/* <Text style={{ "font-size": "20px", "padding-left": "190px" }}>
                experience for all
              </Text>
              <br />
              <Text style={{ "font-size": "20px", "padding-left": "230px" }}>
                your business' needs.
              </Text> */}
            </Col>
            <Col span={9}>
              <img src={graphic1} alt="loading..." />
            </Col>
            <Col span={4} />
          </Row>
          <Divider />
          <Row style={{ textAlign: "center" }}>
            <Col span={6} />
            <Col span={12}>
              <Text style={{ color: "#00009c", "font-size": "20px" }}>
                Our team has on-job experience with industry-leading tools.
              </Text>
            </Col>
            <Col span={6}></Col>
          </Row>
          <Row style={{ textAlign: "center", "padding-top": "10px" }}>
            <Col span={6} />
            <Col span={3}>
              <img
                src={pandaslogo}
                alt="loading..."
                style={{ height: "100px", width: "60%" }}
              />
            </Col>
            <Col span={3}>
              <img
                src={pytorchlogo}
                alt="loading..."
                style={{ height: "100px", width: "60%" }}
              />
            </Col>
            <Col span={3}>
              <img
                src={awslogo}
                alt="loading..."
                style={{ height: "100px", width: "40%" }}
              />
            </Col>
            <Col span={3}>
              <img
                src={tensorflowlogo}
                alt="loading..."
                style={{ height: "100px", width: "32%" }}
              />
            </Col>
            <Col span={6} />
          </Row>
          <Divider />
          <Row
            gutter={[20, { xs: 8, sm: 16, md: 24, lg: 110 }]}
            style={{ textAlign: "center" }}
          >
            <Col span={2} />
            <Col span={10}>
              <img src={graphic2} alt="loading..." />
            </Col>

            <Col span={10}>
              <Title
                style={{
                  color: "#00009c",
                  "font-size": "105px",
                  "padding-top": "50px",
                }}
              >
                Data Analysis & AI Solutions
              </Title>
            </Col>
            <Col span={2} />
          </Row>
          <Row>
            <Col span={2} />
            {/* This text needs to scale appropriately */}
            <Col span={20} style={{ "text-align": "center" }}>
              <Text style={{ "font-size": "20px" }}>
                Our team has years of development experience using cutting-edge
                techniques in the fields of machine learning and data science.
              </Text>
            </Col>
          </Row>
          <Divider dashed />
          <Row
            gutter={[20, { xs: 8, sm: 16, md: 24, lg: 110 }]}
            style={{ textAlign: "center" }}
          >
            <Col span={2} />

            <Col span={10}>
              <Title style={{ color: "#00009c" }}>Software Engineering</Title>
              {/* This text needs to scale appropriately */}
              <Text>
                You name it; we build it. We can build custom software and web
                applications for your business' needs.
              </Text>
              <br />
              <br />
              We can integrate AI solutions and infrastructure decisions with
              software built for your needs as a consumer. CMS portals,
              data-entry, and data-visualization options are all in play, along
              with much more.
            </Col>
            <Col span={10}>
              <img src={graphic3} alt="loading..." />
            </Col>
            <Col span={2} />
          </Row>
          <Divider dashed />
          <Row
            gutter={[20, { xs: 8, sm: 16, md: 24, lg: 110 }]}
            style={{ textAlign: "center" }}
          >
            <Col span={2} />

            <Col span={10}>
              <Title style={{ color: "#00009c" }}>Tech Infrastructure</Title>
              {/* This text needs to scale appropriately */}
              <Text>
                You name it; we build it. We can build custom software and web
                applications for your business' needs.
              </Text>
              <br />
              <br />
              We can integrate AI solutions and infrastructure decisions with
              software built for your needs as a consumer. CMS portals,
              data-entry, and data-visualization options are all in play, along
              with much more.
            </Col>
            <Col span={10}>
              <img src={graphic3} alt="loading..." />
            </Col>
            <Col span={2} />
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <Link to="/sales">Employee Sales Portal</Link>
          <br />
          Quix Consult ©2020
        </Footer>
      </Layout>
    );
  }
}

export default Homepage;
