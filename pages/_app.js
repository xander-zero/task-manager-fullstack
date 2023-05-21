// import { QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ConfigProvider csp={{ nonce: "123456" }}>
      {/* <QueryClientProvider client={queryClient}> */}
      <Component {...pageProps} />
      {/* </QueryClientProvider> */}
    </ConfigProvider>
  );
}

export default MyApp;
