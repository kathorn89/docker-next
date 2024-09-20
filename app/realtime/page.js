import MyIframe from "../../components/MyIframe";
import Header from "../../components/Header";
import ToggleSection from "../../components/ToggleSection";

export default function Page() {
  const GRAFANA_DASHBOARD_URL =
    "http://localhost:3777/d-solo/adu68f1hmk1s0h89/apache-jmeter-dashboard-v5?orgId=1";

  const panel = {
    row1: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=51`,
        id: "activeUser",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=26`,
        id: "totalReq",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=28`,
        id: "failedReq",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=41`,
        id: "reqps",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=58`,
        id: "avgResp",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=50`,
        id: "errps",
      },
    ],
    row2: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=38`,
        id: "req6",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=37`,
        id: "req7",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=49`,
        id: "req8",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=43`,
        id: "req9",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=29`,
        id: "req10",
      },
    ],
    row3: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=2`,
        id: "req12",
      },
    ],
    row4: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=54`,
        id: "rqps1",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=52`,
        id: "byteps",
      },
    ],
    row5: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=65`,
        id: "avgrsp",
      },
    ],

    row6: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=39`,
        id: "err1",
      },
    ],
    row7: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=25`,
        id: "err2",
      },
    ],
    row8: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=27`,
        id: "err3",
      },
    ],
    row9: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=60`,
        id: "tcpUser",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=61`,
        id: "tcpReq",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=89`,
        id: "reqpsTCP",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=90`,
        id: "byteTCP",
      },
    ],
    row10: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=91`,
        id: "tcpReqps",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=92`,
        id: "tcpSentByte",
      },
    ],
    row11: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=93`,
        id: "tcpHit",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=62`,
        id: "tcpThroughput",
      },
    ],
    row12: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=95`,
        id: "tcpInfops",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=66`,
        id: "tcpInfoDetail",
      },
    ],
    row13: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=68`,
        id: "hcUser",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=72`,
        id: "hcAvg",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=79`,
        id: "hcError",
      },
    ],
    row14: [
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=86`,
        id: "hcResp",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=74`,
        id: "hcErrps",
      },
      {
        url: `${GRAFANA_DASHBOARD_URL}&refresh=5s&from=now-1h&to=now&panelId=94`,
        id: "hcErrInfo",
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between w-full h-screen px-6 py-14">
        <div className="flex flex-col gap-3 py-4 pb-8">
          <ToggleSection title="HTTPS">
            <div className="grid grid-flow-row-dense gap-3 grid-flow-cols">
              <div className="grid grid-cols-6 gap-3">
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

              <div className="grid grid-cols-5 gap-3">
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

              <div className="grid grid-cols-1 gap-3">
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

              <div className="grid grid-cols-2 gap-3">
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
                    height="400"
                  />
                ))}
              </div>
            </div>
          </ToggleSection>

          <div className="flex flex-col gap-2 mt-4">
            <ToggleSection title="TCP">
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
            </ToggleSection>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <ToggleSection title="Health Check">
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
            </ToggleSection>
          </div>
        </div>
      </main>
    </>
  );
}
