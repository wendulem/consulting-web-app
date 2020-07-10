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
import graphic2 from "../assets/data_visualization_two_color.svg";
import graphic3 from "../assets/code_development__two_color.svg";
import graphic4 from "../assets/innovation_two_color.svg";
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
              <Button
                key="1"
                type="primary"
                style={{ background: "#00009c", borderColor: "#00009c" }}
              >
                Get Quote
              </Button>,
            ]}
          ></PageHeader>
        </Affix>
        <Content className="site-layout-background">
          <Row>
            <Col span={5} />
            <Col span={6}>
              <Row>
                <img
                  src={logo}
                  alt="loading..."
                  style={{
                    height: "auto",
                    width: "90%",
                    "padding-top": "30px",
                  }}
                />
              </Row>
              <Row>
                <Title
                  style={{
                    color: "#00009c",
                    "font-size": "25px",
                    "z-index": "1",
                  }}
                >
                  Welcome to the Cutting Edge
                </Title>
              </Row>
              <Row>
                <div
                  style={{
                    "font-size": "20px",
                    "padding-top": "5px",
                  }}
                >
                  <Text>
                    Bring your small/medium-sized business out of the past and
                    into the future and with our blue-chip engineering talent.
                  </Text>
                </div>
              </Row>
            </Col>
            <Col span={9} style={{ height: "auto", width: "90%" }}>
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
          <Row style={{ textAlign: "center", "padding-top": "50px" }}>
            <Col span={6} />
            <Col span={3}>
              <img
                src={pandaslogo}
                alt="loading..."
                style={{ height: "auto", width: "60%" }}
              />
            </Col>
            <Col span={3}>
              <img
                src={pytorchlogo}
                alt="loading..."
                style={{ height: "auto", width: "60%" }}
              />
            </Col>
            <Col span={3}>
              <img
                src={awslogo}
                alt="loading..."
                style={{ height: "auto", width: "40%" }}
              />
            </Col>
            <Col span={3}>
              <img
                src={tensorflowlogo}
                alt="loading..."
                style={{ height: "auto", width: "32%" }}
              />
            </Col>
            <Col span={6} />
          </Row>
          <Divider />
          <Row
            gutter={[20, { xs: 8, sm: 16, md: 24, lg: 110 }]}
            style={{ textAlign: "center" }}
          >
            <Col span={5} />
            <Col span={7}>
              <img src={graphic2} alt="loading..." />
            </Col>

            <Col span={7}>
              <Row></Row>
              <Title
                style={{
                  color: "#00009c",
                  "font-size": "70px",
                  "padding-top": "70px",
                }}
              >
                Data Analysis & AI Solutions
              </Title>
              <Row>
                <Text style={{ "font-size": "20px" }}>
                  Our team has years of development experience using
                  cutting-edge techniques in the fields of machine learning and
                  data science.
                </Text>
              </Row>
              <Row style={{ "padding-top": "20px" }}>
                <Col span={10} />
                <Col span={4}>
                  <Button
                    key="1"
                    type="primary"
                    style={{ background: "#00009c", borderColor: "#00009c" }}
                  >
                    Get Quote
                  </Button>
                </Col>
                <Col span={10} />
              </Row>
            </Col>
            <Col span={5} />
          </Row>
          <Divider dashed />
          <Row
            gutter={[20, { xs: 8, sm: 16, md: 24, lg: 110 }]}
            style={{ textAlign: "center" }}
          >
            <Col span={5} />
            <Col span={7}>
              <Title
                style={{
                  color: "#00009c",
                  "font-size": "70px",
                  "padding-top": "70px",
                }}
              >
                Software Engineering
              </Title>
              <Row>
                <Text style={{ "font-size": "20px" }}>
                  We can build any software solution for your business, whether
                  for general managment tasks or your specific needs. Our team
                  is comprised of people with SWE research and engineering
                  backgrounds.
                </Text>
              </Row>
              <Row style={{ "padding-top": "20px" }}>
                <Col span={10} />
                <Col span={4}>
                  <Button
                    key="1"
                    type="primary"
                    style={{ background: "#00009c", borderColor: "#00009c" }}
                  >
                    Get Quote
                  </Button>
                </Col>
                <Col span={10} />
              </Row>
            </Col>
            <Col span={7}>
              <img src={graphic3} alt="loading..." />
            </Col>
            <Col span={5} />
          </Row>
          <Divider dashed />
          <Row
            gutter={[20, { xs: 8, sm: 16, md: 24, lg: 110 }]}
            style={{ textAlign: "center" }}
          >
            <Col span={5} />
            <Col span={7}>
              <img src={graphic4} alt="loading..." />
            </Col>

            <Col span={7}>
              <Row></Row>
              <Title
                style={{
                  color: "#00009c",
                  "font-size": "70px",
                  "padding-top": "70px",
                }}
              >
                Tech Infrastructure
              </Title>
              <Row>
                <Text style={{ "font-size": "20px" }}>
                  If you lack the data collection systems / database
                  infrastructure to perform analysis, we can get you in the
                  right spot to get there.
                </Text>
              </Row>
              <Row style={{ "padding-top": "20px" }}>
                <Col span={10} />
                <Col span={4}>
                  <Button
                    key="1"
                    type="primary"
                    style={{ background: "#00009c", borderColor: "#00009c" }}
                  >
                    Get Quote
                  </Button>
                </Col>
                <Col span={10} />
              </Row>
            </Col>
            <Col span={5} />
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
