"use client";
import { Content } from "antd/es/layout/layout";

const Page: React.FC = () => {
  return (
    <Content>
      <div>
        <h1>Account Page</h1>
        <p>Put tools download link and introduction here!</p>
        <p>function:</p>
        <ol>
          <li>login (by password, telephone, wechat QR, google)</li>
          <li>register (by telephone, wechat, google account, email)</li>
          <li>
            settings:
            <ul>
              <li>photo username password binding myPosts</li>
            </ul>
          </li>
        </ol>
      </div>
    </Content>
  );
};
export default Page;
