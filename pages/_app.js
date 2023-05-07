import Layout from "layout";
import "../styles/global.scss";

export default function DashboardLayout({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
