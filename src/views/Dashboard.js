import React from "react";
import Divider from '@material-ui/core/Divider';
import { ReactComponent as ScanPeople } from '../assets/img/scanpeople.svg';
import { ReactComponent as TotalDetect } from '../assets/img/totaldetect.svg';
import { ReactComponent as RecentDetect } from '../assets/img/recentdetect.svg';
import { Bar, Pie } from 'react-chartjs-2';

import {
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";


const Dashboard = () => {
  const pieData = {
    labels: ['Detected', 'Not Detected', 'Not Tested'],
    datasets: [
      {
        data: [
          50,
          130,
          250
        ],
        backgroundColor: [
          'rgb(255, 5, 5, 0.9)',
          'rgb(34,139,34, 0.9)',
          'rgb(34, 34, 139, 0.9)'
        ]
      }
    ]
  }

  const barData = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurseday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Sunday',
        data: [
          2,
          3,
          1,
          0,
          5,
          4,
          1,
          8
        ],
        backgroundColor: [
          'rgb(197, 197, 14, 0.9)',
          'rgb(3, 138, 173, 0.9)',
          'rgb(254, 215, 123, 0.9)',
          'rgb(32, 156, 252, 0.9)',
          'rgb(118, 113, 167, 0.9)',
          'rgb(195, 125, 56, 0.9)',
          'rgb(164, 109, 155, 0.9)',
        ]
      }
    ]
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <ScanPeople style={{ width: "70px", height: "70px" }} />
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Scanned People</p>
                      <Card.Title as="h4">150</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <TotalDetect style={{ width: "70px", height: "70px" }} />
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Detected People</p>
                      <Card.Title as="h4">3</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <RecentDetect style={{ width: "70px", height: "70px" }} />
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Recently Detected</p>
                      <Card.Title as="h4">Mr. X</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Divider style={{ margin: "30px" }} />
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Weekly Detection</Card.Title>
              </Card.Header>
              <Card.Body>
                  <Bar
                  height={350}
                  data={barData}
                  options={{ maintainAspectRatio: false }}
                  />
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Detection Statistics</Card.Title>
              </Card.Header>
              <Card.Body>
                <div>
                  <Pie
                    height={350}
                    data={pieData}
                    options={{ maintainAspectRatio: false }}
                  >
                  </Pie>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
