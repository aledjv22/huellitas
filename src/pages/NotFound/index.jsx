import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

function NotFound () {
  return (
    <Layout>
      <h1 className="mt-2 text-[#86155f] font-bold text-2xl">
        404
      </h1>
      <h2 className="mt-2 text-[#86155f] font-bold text-xl">
        Not Found
      </h2>
      <Helmet>
        <title> Huellitas | Not Found </title>
      </Helmet>
    </Layout>
  )
}

export default NotFound;