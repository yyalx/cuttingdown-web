import { Content, Footer } from "antd/es/layout/layout";
import "../global.css";
const Page: React.FC = () => {
  return (
    <>
      <Content></Content>
      <Footer className="fixed-footer">
        <div>
          <h1>Blogs Page</h1>
          <p>function design:</p>
          <ol>
            <li>search function</li>
            <li></li>
          </ol>
        </div>
      </Footer>
    </>
  );
};

export default Page;
