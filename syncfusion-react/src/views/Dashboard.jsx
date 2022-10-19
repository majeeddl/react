import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";

const CardComponent = () => {
  return (
    <Card
      className="fs-6"
      style={{ width: "100%", height: "100%", fontSize: 12 }}
    >
      <Card.Header style={{ fontSize: 12 }}>Featured</Card.Header>

      <div>salam</div>
    </Card>
  );
};

const Dashboard = () => {
  const [cellSpacing] = useState([5, 5]);
  const [mediaQuery] = useState([12, 12]);
  const [panels] = useState([
    {
      sizeX: 1,
      sizeY: 1,
      row: 0,
      col: 0,
      content: <CardComponent></CardComponent>,
    },
    {
      sizeX: 3,
      sizeY: 2,
      row: 0,
      col: 1,
      content: '<div class="content">1</div>',
    },
    {
      sizeX: 1,
      sizeY: 3,
      row: 0,
      col: 4,
      content: '<div class="content">2</div>',
    },
    {
      sizeX: 1,
      sizeY: 1,
      row: 1,
      col: 0,
      content: '<div class="content">3</div>',
    },
    {
      sizeX: 2,
      sizeY: 1,
      row: 2,
      col: 0,
      content: '<div class="content">4</div>',
    },
    {
      sizeX: 1,
      sizeY: 1,
      row: 2,
      col: 2,
      content: '<div class="content">5</div>',
    },
    {
      sizeX: 1,
      sizeY: 1,
      row: 2,
      col: 3,
      content: '<div class="content">6</div>',
    },
  ]);
  return (
    <>
      <div>Dashboard</div>
      {/* <DashboardLayoutComponent
        id="defaultLayout"
        cellSpacing={cellSpacing}
        allowResizing={true}
        panels={panels}
        columns={5}
        mediaQuery={mediaQuery}
      /> */}
      <DashboardLayoutComponent
        id="default_dashboard"
        columns={12}
        // ref={(scope) => {
        //   this.dashboardObj = scope;
        // }}
        cellSpacing={cellSpacing}
        allowResizing={true}
        // mediaQuery={mediaQuery}
        showGridLines={true}
      >
        <div
          id="one"
          style={{ border: "0px" }}
          className="e-panel"
          data-row="0"
          data-col="0"
          data-sizeX="6"
          data-sizeY="2"
        >
          <span id="close" className="e-close-icon e-clear-icon" />
          <div className="e-panel-container">
            <CardComponent></CardComponent>
          </div>
        </div>
        <div
          id="two"
          className="e-panel"
          data-row="6"
          data-col="6"
          data-sizeX="6"
          data-sizeY="2"
        >
          <span id="close" className="e-close-icon e-clear-icon" />
          <div className="e-panel-container">
            <CardComponent></CardComponent>
          </div>
        </div>
        <div
          id="three"
          className="e-panel"
          data-row="3"
          data-col="1"
          data-sizeX="4"
          data-sizeY="1"
        >
          <span id="close" className="e-close-icon e-clear-icon" />
          <div className="e-panel-container">
            <CardComponent></CardComponent>
          </div>
        </div>
        {/* 
        <div
          id="four"
          className="e-panel"
          data-row="2"
          data-col="1"
          data-sizeX="1"
          data-sizeY="1"
        >
          <span id="close" className="e-close-icon e-clear-icon" />
          <div className="e-panel-container">
            <div className="text-align">3</div>
          </div>
        </div>
        <div
          id="five"
          className="e-panel"
          data-row="2"
          data-col="2"
          data-sizeX="2"
          data-sizeY="1"
        >
          <span id="close" className="e-close-icon e-clear-icon" />
          <div className="e-panel-container">
            <div className="text-align">4</div>
          </div>
        </div>
        <div
          id="six"
          className="e-panel"
          data-row="0"
          data-col="3"
          data-sizeX="1"
          data-sizeY="1"
        >
          <span id="close" className="e-close-icon e-clear-icon" />
          <div className="e-panel-container">
            <div className="text-align">5</div>
          </div>
        </div>
        <div
          id="seven"
          className="e-panel"
          data-row="1"
          data-col="3"
          data-sizeX="1"
          data-sizeY="1"
        >
          <span id="close" className="e-close-icon e-clear-icon" />
          <div className="e-panel-container">
            <div className="text-align">6</div>
          </div>
        </div>
        <div
          id="eight"
          className="e-panel"
          data-row="0"
          data-col="4"
          data-sizeX="1"
          data-sizeY="3"
        >
          <span id="close" className="e-close-icon e-clear-icon" />
          <div className="e-panel-container">
            <div className="text-align">7</div>
          </div>
        </div> */}
      </DashboardLayoutComponent>
    </>
  );
};

export default Dashboard;
