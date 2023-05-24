import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import "../styles/globals.css";

import { queryClient } from "src/libs/react-query";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ConfigProvider csp={{ nonce: "123456" }}>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </ConfigProvider>
  );
}

export default MyApp;
