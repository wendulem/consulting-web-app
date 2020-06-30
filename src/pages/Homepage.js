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
import { FacebookFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../assets/quix logo.svg";
import graphic1 from "../assets/team_presentation_two_color.svg";
import graphic2 from "../assets/analyzing_process_two_color.svg";
import graphic3 from "../assets/team_presentation_two_color_1.svg";

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
          <Row>
            <Col span={12}>
              <img src={logo} alt="loading..." />
            </Col>
            <Col span={10}>
              <img src={graphic1} alt="loading..." />
            </Col>
            <Col span={2} />
          </Row>
          <Row>
            <Col span={4} />
            <Col span={10}>
              <Title style={{ color: "#00009c" }}>
                Your bussiness' technology ally.
              </Title>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider dashed />
          <Row
            gutter={[20, { xs: 8, sm: 16, md: 24, lg: 110 }]}
            style={{ textAlign: "center" }}
          >
            <Col span={2} />
            <Col span={10}>
              <img src={graphic2} alt="loading..." />
            </Col>

            <Col span={10}>
              <Title style={{ color: "#00009c" }}>AI Solutions</Title>
              {/* This text needs to scale appropriately */}
              <Text>
                We offer premier AI solutions to drive sales and maximize your
                business' earning potential. Using our years of experience in
                data science and computer vision research, we can leverage
                various linear and non-linear models to find underlying trends
                in your data to improve all aspects of your business.
              </Text>
              <br />
              <br />
              <FacebookFilled style={{ fontSize: "50px", color: "#00009c" }} />
              <br />
              <br />
              <Text>
                We can integrate into your current advertising strategy and
                improve on your process.
              </Text>
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
