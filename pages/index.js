import clsx from "clsx";
import { useRouter } from "next/router";
import { Space, Spin } from "antd";

import { useTimer } from "src/utils/hooks/userTimer";

const Home = () => {
  const timer = useTimer(1);
  const redirectTimer = useTimer(500);

  const router = useRouter();

  if (redirectTimer) router.replace("/auth/login");

  return (
    <div
      className={clsx("flex justify-center transition-opacity duration-500", {
        "opacity-0": !timer,
      })}
    >
      <Space direction="vertical" align="center" className="mt-32">
        <h1 level={1} className="text-3xl text-blue-400">
          Task Manager Xander
        </h1>
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Home;
