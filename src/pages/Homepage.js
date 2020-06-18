import React from "react";
import {
  Card,
  Row,
  Col,
  Layout,
  Affix,
  Button,
  PageHeader,
  Typography,
  Divider
} from "antd";
import {
  ExperimentOutlined,
  DatabaseOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import geogif from "../assets/geometric-gif-png-1.gif";
//import GridDisplay from "../components/layout/GridDisplay";

const { Content, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;

class Homepage extends React.Component {
  render() {
    return (
      <Layout>
        <Affix>
          <PageHeader
            ghost={false}
            subTitle="Maia Consulting"
            extra={[
              <Button key="2">Get Quote</Button>,
              <Button key="1" type="primary">
                Home
              </Button>,
            ]}
            avatar={{
              src:
                "https://www.onlygfx.com/wp-content/uploads/2015/12/spiral-circle-logo-template.jpg",
            }}
          ></PageHeader>
        </Affix>
        <Content className="site-layout-background">
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 110 }]}>
            <Col span={3} />
            <Col span={8}>
              <img src={geogif} alt="loading..." />
            </Col>
            <Col span={2} />
            <Col span={10} style={{ padding: "130px 0" }}>
              <Title style={{ "font-size": "150px" }}>Maia Consulting</Title>
            </Col>
          </Row>
          <Divider dashed />
          <Row
            gutter={[20, { xs: 8, sm: 16, md: 24, lg: 110 }]}
            style={{ textAlign: "center" }}
          >
            <Col span={6} />
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <ExperimentOutlined
                    style={{ fontSize: "80px", padding: "30px 0" }}
                  />
                }
              >
                <Meta
                  title="AI Solutions"
                  description="We offer premier AI solutions to drive sales and maximize your business' earning potential."
                />
              </Card>
            </Col>

            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <DatabaseOutlined
                    style={{ fontSize: "80px", padding: "30px 0" }}
                  />
                }
              >
                <Meta
                  title="Tech Infastructure"
                  description="We will build out database and software solutions for you to create your own sustainable data-analysis pipeline."
                />
              </Card>
            </Col>

            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <CodeOutlined
                    style={{ fontSize: "80px", padding: "30px 0" }}
                  />
                }
              >
                <Meta
                  title="Software Engineering"
                  description="You name it; we build it. We can build custom software and web applications for your business' needs."
                />
              </Card>
            </Col>
            <Col span={6} />
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <a href="www.google.com">Employee Sales Portal</a> <br />
          Maia Consulting ©2020 Created by Connor Johnson
        </Footer>
      </Layout>
    );
  }
}

export default Homepage;
