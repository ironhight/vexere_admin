import React, { PureComponent } from "react";
import AvatarImg from "../../assets/images/user-ic.png";
import { Avatar, UploadAvatar } from "./styled";
import { Icon, Rate } from "antd";
import moment from "moment";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import { connect } from "react-redux";

import { updateAvatar } from "../../redux/actions/users";

class AvatarWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      file: null
    };
  }

  onHandleAvatar = e => {
    let file = e.target.files[0];
    const { id, updateAvatar } = this.props;
    const formData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    formData.append("avatar", file);
    this.setState({
      isLoading: true
    });
    updateAvatar(id, formData, config, () => {
      this.setState({
        isLoading: false
      });
    });
  };

  render() {
    console.log("object");
    const { avatar, fullName, isMyProfile = true } = this.props;
    console.log("TCL: AvatarWrapper -> render -> isMyProfile", isMyProfile);
    const { isLoading } = this.state;

    return (
      <Avatar>
        <div className="text-center">
          {isMyProfile ? (
            <UploadAvatar isLoading={isLoading}>
              <label className="cursor-point mb-0">
                <img src={!avatar ? AvatarImg : avatar} alt="avatar" />
                <input
                  className="d-none"
                  type="file"
                  onChange={this.onHandleAvatar}
                />
              </label>
              <div className="btn-upload">
                <Icon type={isLoading ? "loading" : "plus"} />
                <div className="ant-upload-text">Upload</div>
              </div>
            </UploadAvatar>
          ) : (
            <UploadAvatar isLoading={isLoading}>
              <label className="cursor-point mb-0">
                <img src={!avatar ? AvatarImg : avatar} alt="avatar" />
              </label>
            </UploadAvatar>
          )}
          <h5 className="mb-0 name">{fullName}</h5>
        </div>
      </Avatar>
    );
  }
}
export default connect(null, { updateAvatar })(withRouter(AvatarWrapper));
