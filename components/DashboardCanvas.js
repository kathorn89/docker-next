"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import moment from "moment";
import MyIframe from "./MyIframe";
const QuickRangesDropdown = dynamic(() => import("./QuickRangesDropdown"), {
  ssr: false,
});

export default function Page() {
  // Set default range to "Last 1 hour"
  const defaultRange = [
    moment().subtract(1, "hour").valueOf(), // 1 hour ago in milliseconds
    moment().valueOf(), // Current time in milliseconds
  ];

  const [timeRange, setTimeRange] = useState(defaultRange); // Initialize state with default range

  const GRAFANA_DASHBOARD_URL =
    "http://localhost:3777/d-solo/adu68f1hmk1s0h9/apache-jmeter-dashboard-v3?orgId=1";

  const panel = {
    row1: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=51`,
        id: "req1",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=26`,
        id: "req2",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=28`,
        id: "req3",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=41`,
        id: "req4",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=45`,
        id: "req5",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=50`,
        id: "err5",
      },
    ],
    row21: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=38`,
        id: "req6",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=37`,
        id: "req7",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=49`,
        id: "req8",
      },
    ],
    row22: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=43`,
        id: "req9",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=29`,
        id: "req10",
      },
    ],
    row3: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=4`,
        id: "req11",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=2`,
        id: "req12",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=31`,
        id: "req13",
      },
    ],
    row4: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=23`,
        id: "req14",
      },
    ],
    row5: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=36`,
        id: "req15",
      },
    ],
    row6: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=39`,
        id: "err1",
      },
    ],
    row7: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=25`,
        id: "err2",
      },
    ],
    row8: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=27`,
        id: "err3",
      },
    ],
  };

  const handleApplyTimeRange = (unixRange) => {
    setTimeRange(unixRange);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-between w-full h-screen px-0 py-14">
        <div className="flex flex-col gap-3 px-2 py-4 pb-8">
          <div className="flex flex-row items-center justify-between">
            <h1 className={`text-3xl font-bold text-navy`}>Summary</h1>
            <QuickRangesDropdown onApply={handleApplyTimeRange} />
          </div>

          <div className="grid grid-flow-row-dense gap-3 grid-flow-cols">
            <div className="grid gap-3 lg:grid-cols-6 md:grid-cols-3">
              {panel.row1.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="150"
                />
              ))}
            </div>

            <div className="grid grid-cols-5 gap-3 ">
              {panel.row21.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="200"
                />
              ))}
              {panel.row22.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="200"
                />
              ))}
            </div>

            {/* <div className="grid grid-cols-2 gap-3 grid-row-1">
            <div className="grid grid-cols-1 gap-3 grid-row-3 ">
              {panel.row21.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="100"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 grid-row-3 ">
              {panel.row22.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="100%"
                />
              ))}
            </div>
          </div> */}
            <div className="grid grid-cols-3 gap-3">
              {panel.row3.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="250"
                />
              ))}
            </div>
            <div className="grid gap-3 auto-cols-auto">
              {panel.row4.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="400"
                />
              ))}
            </div>
            <div className="grid gap-3 auto-cols-auto">
              {panel.row5.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="400"
                />
              ))}
            </div>
          </div>

          <div className="relative flex justify-end place-items-center before:absolute before:h-[600px] before:w-full sm:before:w-[960px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[480px] after:translate-x-1/3 after:bg-gradient-conic after:from-orange-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-600 before:dark:opacity-10 after:dark:from-red-500 after:dark:via-[#E64A51] after:dark:opacity-40 before:lg:h-[360px] z-[-1]] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
          <div className="flex flex-col gap-2">
            <h1 className={`text-xl font-bold text-navy`}>Error</h1>
            <div className="grid grid-flow-row-dense gap-3 grid-flow-cols">
              <div className="grid gap-3 auto-cols-auto">
                {panel.row6.map(({ url, id }) => (
                  <MyIframe
                    key={id}
                    src={url}
                    id={id}
                    width="100%"
                    height="300"
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3">
                {panel.row7.map(({ url, id }) => (
                  <MyIframe
                    key={id}
                    src={url}
                    id={id}
                    width="100%"
                    height="200"
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3">
                {panel.row8.map(({ url, id }) => (
                  <MyIframe
                    key={id}
                    src={url}
                    id={id}
                    width="100%"
                    height="300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
