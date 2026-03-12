import React from "react";
import Lander from "../components/ui/Lander";
import Navbar from "../components/ui/Navbar";
import InfoCard from "../components/ui/InfoCard";

export default function page() {
  return (
    <>
      <Navbar left={true} right={true} />
      <Lander image={""} heading1={"Our Views"} heading2="In Media" css="" />
      <div className="flex flex-col bg-white" id="more">
        <div className="flex md:flex-row flex-col gap-10 m-auto pt-20">
          <InfoCard
            title1={"Navigating Climate Financing"}
            des="Shivi Singh, Senior Research Associate at Ardent Co."
            animation="left"
            image={"/budget.png"}
            link="https://pynr.in/navigating-climate-financing/#:~:text=India%20is%20estimated%20to%20need,agreed%20climate%20objectives%20by%202030"
          />

          <InfoCard
            title1={"आत्मनिर्भर भारत, सशक्त अर्थव्यवस्था"}
            des="Sristi Rai, Senior Associate Public Relation at Ardent Co."
            animation="center"
            image={"/climate.png"}
            link="https://theyoungistaan.com/aatmanirbhar-bharat-strong-economy/"
          />

          <InfoCard
            title1={
              "With UPI’s global buzz, India proves that it can be a digital trailblazer"
            }
            des="Tanush Handa, Assistant Manager at Ardent Co."
            animation="right"
            image={"/NQM.png"}
            link="https://www.moneycontrol.com/news/opinion/with-upis-global-buzz-india-proves-that-it-can-be-a-digital-trailblazer-11254981.html"
          />
        </div>
        <div className="flex md:flex-row flex-col gap-10 m-auto mt-10 pb-20">
          <InfoCard
            title1={"Embracing empathy in the workplace landscape"}
            des="Aradhna Anand, HR Manager at Ardent Co."
            animation="left"
            image={"/budget.png"}
            link="https://www.peoplematters.in/article/culture/embracing-empathy-in-the-workplace-landscape-39637"
          />

          <InfoCard
            title1={"India’s neonatal burden and the challenges ahead"}
            des="Shubhangi Misra, Associate Research and Content at Ardent Co."
            animation="center"
            image={"/climate.png"}
            link="https://www.hindustantimes.com/ht-insight/public-health/indias-neonatal-burden-and-the-challenges-ahead-101714975069752.html"
          />

          <InfoCard
            title1={"Making India the Clean Durable Metals Hub"}
            des="Shivi Singh, Senior Research Associate at Ardent Co."
            animation="right"
            image={"/NQM.png"}
            link="https://energy.economictimes.indiatimes.com/news/renewable/making-india-the-clean-durable-metals-hub-is-stainless-steel-the-option/101569608"
          />
        </div>
      </div>
    </>
  );
}
