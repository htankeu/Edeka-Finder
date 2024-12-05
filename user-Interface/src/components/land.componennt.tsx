import { ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ChooseLand: React.FC<{ onclick: () => void }> = (ChooseLand) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Button type="primary" onClick={ChooseLand.onclick} className="animate-pulse py-8">
          <h1>
            Choose your Region please{" "}
            <span className="animate bounce">
              {" "}
              <ArrowDownOutlined width={50} />
            </span>
          </h1>
        </Button>
      </div>
    </>
  );
};

export default ChooseLand;
