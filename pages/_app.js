import "../app/globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <style jsx global>{`
        html {
          font-family: ${figtree.style.fontFamily};
        }
      `}</style>
      <Sidebar />
      <Header />
      <div className="w-full overflow-x-auto">
        <div className="h-calc(-48px + 100vh) overflow-auto ">
          <div className="relative flex justify-center w-full h-full mx-auto overflow-x-hidden overflow-y-scroll">
            <div className="w-full px-6 ">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
