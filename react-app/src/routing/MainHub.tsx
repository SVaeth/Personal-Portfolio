import React from "react";
import MainAppBar from "../components/MainAppBar";

type MainHubProps = React.HTMLAttributes<HTMLDivElement> & {
    errors?: string[];
    render: any;
};

const MainHub: React.FC<MainHubProps> = ({ render, errors }) => {
  return (
    <>
      <MainAppBar errors={errors} />
      {render}
    </>
  );
};

export default MainHub;
