import MyIframe from "../../components/MyIframe";
import Header from "../../components/Header";
import ToggleSection from "../../components/ToggleSection";

export default function Page() {
  const AWS_URL =
    "https://cloudwatch.amazonaws.com/dashboard.html?dashboard=POC&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTA0MDY3OTkyMTg5NSIsIlUiOiJ1cy1lYXN0LTFfdkdEVW1LUjZzIiwiQyI6IjVsZzM0MTA1OHU3bXFjZDc1am5wdms5NjJzIiwiSSI6InVzLWVhc3QtMTpmNjYxODA2Yy0wOTk0LTRkNmUtYWJlNS0wMjk0YjQ3MzIyYWUiLCJNIjoiUHVibGljIn0%3D";

  const panel = {
    awsRow1: [
      {
        url: `${AWS_URL}&start=PT1008H&end=null`,
        id: "poc1",
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="items-center justify-between w-full h-screen px-6 py-14">
        <div className="flex flex-col gap-3 px-2 py-4 pb-8">
          <ToggleSection title="AWS Dashboard">
            <div className="grid h-screen grid-flow-row-dense gap-3 grid-flow-cols">
              <div className="grid gap-3 overflow-hidden xl:grid-cols-1 md:grid-cols-1 h-5/6">
                {panel.awsRow1.map(({ url, id }) => (
                  <MyIframe
                    key={id}
                    src={url}
                    id={id}
                    width="100%"
                    height="100%"
                  />
                ))}
              </div>
            </div>
          </ToggleSection>
        </div>
      </main>
    </>
  );
}
