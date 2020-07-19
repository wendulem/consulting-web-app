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
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false, //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <Layout>
        <Affix>
          <PageHeader
            ghost={false}
            subTitle="Quix Consult"
            extra={[
              <Link to="/quote">
                <Button
                  key="1"
                  type="primary"
                  style={{ background: "#00009c", borderColor: "#00009c" }}
                >
                  Get Quote
                </Button>
              </Link>,
            ]}
          ></PageHeader>
        </Affix>
        <Content className="site-layout-background">
          {isDesktop ? (
            <div>
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
                        Solutions to drive productivity & profitability in your
                        small or medium-sized business
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
                    Experienced Team Leveraging Industry-Leading Tools
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
                style={{ textAlign: "left" }}
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
                      Seasoned team of developers with experience in machine
                      learning & data science
                    </Text>
                  </Row>
                  <Row style={{ "padding-top": "20px" }}>
                    <Col span={4}>
                      <Link to="/quote">
                        <Button
                          key="1"
                          type="primary"
                          style={{
                            background: "#00009c",
                            borderColor: "#00009c",
                          }}
                        >
                          Get Quote
                        </Button>
                      </Link>
                    </Col>
                    <Col span={10} />
                  </Row>
                </Col>
                <Col span={5} />
              </Row>
              <Divider dashed />
              <Row
                gutter={[20, { xs: 8, sm: 16, md: 24, lg: 110 }]}
                style={{ textAlign: "right" }}
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
                      Get custom software solutions tailored to the needs of
                      your business, built by experienced engineers
                    </Text>
                  </Row>
                  <Row style={{ "padding-top": "20px" }}>
                    <Col span={19} />
                    <Col span={4}>
                      <Link to="/quote">
                        <Button
                          key="1"
                          type="primary"
                          style={{
                            background: "#00009c",
                            borderColor: "#00009c",
                          }}
                        >
                          Get Quote
                        </Button>
                      </Link>
                    </Col>
                    <Col span={1} />
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
                style={{ textAlign: "left" }}
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
                      Enable visibility & efficiency by implementing data
                      collection systems & database infrastructure
                    </Text>
                  </Row>
                  <Row style={{ "padding-top": "20px" }}>
                    <Col span={4}>
                      <Link to="/quote">
                        <Button
                          key="1"
                          type="primary"
                          style={{
                            background: "#00009c",
                            borderColor: "#00009c",
                          }}
                        >
                          Get Quote
                        </Button>
                      </Link>
                    </Col>
                    <Col span={10} />
                  </Row>
                </Col>
                <Col span={5} />
              </Row>
            </div>
          ) : (
            <div>
              <Row>
                <Col span={6} />
                <Col span={12}>
                  <img
                    src={logo}
                    alt="loading..."
                    style={{
                      height: "auto",
                      width: "100%",
                      "padding-top": "20px",
                    }}
                  />
                </Col>
                <Col span={6} />
              </Row>
              <Row>
                <Col span={9} />
                <Col span={6}>
                  <Link to="/quote">
                    <Button
                      key="1"
                      type="primary"
                      style={{ background: "#00009c", borderColor: "#00009c" }}
                    >
                      Get Quote
                    </Button>
                  </Link>
                </Col>
                <Col span={9} />
              </Row>
              <Row
                style={{
                  "padding-top": "20px",
                  "padding-bottom": "25px",
                }}
              >
                <Col span={4} />
                <Col span={16} style={{ "text-align": "center" }}>
                  <Text style={{ "font-size": "9px" }}>
                    View our desktop site for additional details on our product
                    offerings. Otherwise request a quote with the button above
                    or contact us using the info below: <br />
                    <br />
                  </Text>
                  <Text style={{ "font-size": "9px", "font-weight": "900" }}>
                    info@quixconsult.com <br />
                    +1 (508)-838-5106
                  </Text>
                </Col>
                <Col span={4} />
              </Row>
            </div>
          )}
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
