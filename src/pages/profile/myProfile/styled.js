import styled from "styled-components";
import { Wrapper } from "styled";
import { Upload } from "antd";

export const Avatar = styled(Wrapper)`
  img {
    border-radius: 100%;
    width: 100px;
    height: 100px;
  }

  .info {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 8px 16px;
  }
`;

export const UploadCustom = styled(Upload)`
  && .ant-upload-select-picture-card {
    margin-right: 0;
    margin-bottom: 0;
    float: none;
    clear: both;
    margin: 0 auto;
    border-radius: 100%;

    .ant-upload {
      padding: 0;
      position: relative;

      &:hover {
        .btn-upload {
          opacity: 1;
        }
      }
    }
  }

  .btn-upload {
    background-color: #fafafa;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
`;
