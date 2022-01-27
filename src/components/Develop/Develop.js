import React, { Component } from "react";
import DevelopContents from "./DevelopContents";

function Develop() {
  return (
    <section className="scroll-section" id="scroll-section-2">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <p className="mid-message" style={{ marginBottom: "5rem " }}>
                <strong>Develop 프로젝트</strong>
                <br />
                21년 4월부터 현재까지
                <br />
                작업한 개인 및 팀 프로젝트
              </p>
              {/* Develop Projects */}
            </div>
            <DevelopContents />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Develop;
