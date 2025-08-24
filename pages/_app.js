// pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
body {
  @apply bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen;
}
