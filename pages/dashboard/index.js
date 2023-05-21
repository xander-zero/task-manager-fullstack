import { Layout } from "src/layout";

function Dashboard() {
  return <div>Dashboard Page</div>;
}

Dashboard.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
