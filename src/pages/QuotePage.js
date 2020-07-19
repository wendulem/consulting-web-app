import React from "react";
import { Button, Row, Col, Layout, PageHeader, Affix} from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;

class Sales extends React.Component {
  render() {
    return (
      <Layout>
          <Affix>
          <PageHeader
            ghost={false}
            subTitle="Quix Consult"
            extra={[
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
        <Content>
          <Row className="site-layout-background">
            <Col span={2} />
            <Col span={20}>
              <iframe
                title="Quix Consult Get-Quote"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeXE-gChLs5fQcZjDbo2N-2hEZDj_Sn22VkmmoIaE_SgtCfAg/viewform?embedded=true"
                width="100%"
                height="880"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </Col>
            <Col span={2} />
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default Sales;
