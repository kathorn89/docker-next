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
    "http://localhost:3777/d-solo/adu68f1hmk1s0h89/apache-jmeter-dashboard-v5?orgId=1";

  const panel = {
    row1: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=51`,
        id: "activeUser",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=26`,
        id: "totalReq",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=28`,
        id: "failedReq",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=41`,
        id: "reqps",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=58`,
        id: "avgResp",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=50`,
        id: "errps",
      },
    ],
    row2: [
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
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=2`,
        id: "req12",
      },
    ],
    row4: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=54`,
        id: "rqps1",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=52`,
        id: "byteps",
      },
    ],
    row5: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=65`,
        id: "avgrsp",
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
    row9: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=60`,
        id: "tcpUser",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=61`,
        id: "tcpReq",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=89`,
        id: "reqpsTCP",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=90`,
        id: "byteTCP",
      },
    ],
    row10: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=91`,
        id: "tcpReqps",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=92`,
        id: "tcpSentByte",
      },
    ],
    row11: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=93`,
        id: "tcpHit",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=62`,
        id: "tcpThroughput",
      },
    ],
    row12: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=95`,
        id: "tcpInfops",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=66`,
        id: "tcpInfoDetail",
      },
    ],
    row13: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=68`,
        id: "hcUser",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=72`,
        id: "hcAvg",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=79`,
        id: "hcError",
      },
    ],
    row14: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=86`,
        id: "hcResp",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=74`,
        id: "hcErrps",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=${timeRange[0]}&to=${timeRange[1]}&panelId=94`,
        id: "hcErrInfo",
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
            <div className="grid gap-3 lg:grid-cols-6 md:grid-cols-2">
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

            <div className="grid gap-3 lg:grid-cols-5 md:grid-cols-2">
              {panel.row2.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="200"
                />
              ))}
            </div>
            <div className="grid gap-3 auto-cols-auto">
              {panel.row3.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="300"
                />
              ))}
            </div>
            <div className="grid gap-3 lg:grid-cols-2 md:auto-cols-auto">
              {panel.row4.map(({ url, id }) => (
                <MyIframe
                  key={id}
                  src={url}
                  id={id}
                  width="100%"
                  height="350"
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
            <h1 className={`text-2xl font-bold text-navy`}>Error</h1>
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

              <div className="grid gap-3 auto-cols-auto">
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

              <div className="grid gap-3 auto-cols-auto">
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

          <div className="flex flex-col gap-2 mt-4">
            <h1 className={`text-2xl font-bold text-navy`}>TCP</h1>
            <div className="grid grid-flow-row-dense gap-3 grid-flow-cols">
              <div className="grid gap-3 lg:grid-cols-4">
                {panel.row9.map(({ url, id }) => (
                  <MyIframe
                    key={id}
                    src={url}
                    id={id}
                    width="100%"
                    height="180"
                  />
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-2">
                {panel.row10.map(({ url, id }) => (
                  <MyIframe
                    key={id}
                    src={url}
                    id={id}
                    width="100%"
                    height="300"
                  />
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-2">
                {panel.row11.map(({ url, id }) => (
                  <MyIframe
                    key={id}
                    src={url}
                    id={id}
                    width="100%"
                    height="300"
                  />
                ))}
              </div>

              <div className="grid gap-3 auto-cols-auto">
                {panel.row12.map(({ url, id }) => (
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

          <div className="flex flex-col gap-2 mt-4">
            <h1 className={`text-2xl font-bold text-navy`}>Health Check</h1>
            <div className="grid grid-flow-row-dense gap-3 grid-flow-cols">
              <div className="grid gap-3 lg:grid-cols-3">
                {panel.row13.map(({ url, id }) => (
                  <MyIframe
                    key={id}
                    src={url}
                    id={id}
                    width="100%"
                    height="200"
                  />
                ))}
              </div>

              <div className="grid gap-3 auto-cols-auto">
                {panel.row14.map(({ url, id }) => (
                  <MyIframe
                    key={id}
                    src={url}
                    id={id}
                    width="100%"
                    height="360"
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
