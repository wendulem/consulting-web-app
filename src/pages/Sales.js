import React from "react";
import { Button, Row, Col, Layout, PageHeader, Affix } from "antd";
import { Link } from "react-router-dom";
import LoginCard from "../components/cards/LoginCard";
import RegisterCard from "../components/cards/RegisterCard";

const { Content } = Layout;

class Sales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  toggleCard = () => {
    this.setState({ login: !this.state.login });
  };
  render() {
    const loginToggle = () => {
      if (this.state.login === true) {
        return (
          <div>
            <LoginCard /> <br />
            <Button type="link" onClick={this.toggleCard}>
              Register
            </Button>
          </div>
        );
      } else {
        return (
          <div>
            <RegisterCard /> <br />
            <Button type="link" onClick={this.toggleCard}>
              Login
            </Button>
          </div>
        );
      }
    };
    return (
      <Layout>
        <Row className="site-layout-background">
          <Affix>
            <Link to="/home">
              <PageHeader
                ghost={false}
                subTitle="Maia Consulting"
                avatar={{
                  src:
                    "https://www.onlygfx.com/wp-content/uploads/2015/12/spiral-circle-logo-template.jpg",
                }}
              ></PageHeader>
            </Link>
          </Affix>
        </Row>
        <Content className="site-layout-background">
          <Row>
            <Col span={8} />
            <Col span={8} style={{ padding: "130px 0" }}>
              {loginToggle()} <br />
            </Col>
            <Col span={8} />
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default Sales;
