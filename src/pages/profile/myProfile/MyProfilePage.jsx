import React, { PureComponent } from "react";
import { Icon, Skeleton } from "antd";
import * as userActions from "../../../redux/actions/users";
import { Wrapper, BodyWrapper } from "../../../styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import UpdateIcon from "@material-ui/icons/Update";
import AvatarWrapper from "../../../components/Avatar/Avatar";

class MyProfile extends PureComponent {
  componentDidMount() {
    const { auth } = this.props;
    this.props.getProfileAdmin(auth.profile.id);
  }

  render() {
    const { userInfo } = this.props;
    const { user } = userInfo;
    return (
      <div>
        <BodyWrapper>
          <div className="row">
            <div className="col-3">
              <Skeleton active avatar loading={userInfo.isLoading} paragraph={{ rows: 4 }}>
                <AvatarWrapper fullName={user.fullName} id={user._id} />
              </Skeleton>
            </div>
            <div className="col-7">
              <Wrapper>
                <h5 className="font-weight-normal d-flex align-items-center mb-4">
                  <Icon type="user" className="mr-1" />
                  Thông tin người quản trị
                </h5>
                <div className="form-group row">
                  <label className="col-sm-3">Email:</label>
                  <div className="col-sm-9">{user.email}</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3">Họ và tên:</label>
                  <div className="col-sm-9">{user.fullName}</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3">Ngày sinh nhật:</label>
                  <div className="col-sm-9">{user.dayOfBirth}</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3">Số điện thoại:</label>
                  <div className="col-sm-9">{user.phoneNumber}</div>
                </div>
              </Wrapper>
            </div>
            <div className="col-2">
              <Button
                variant="contained"
                color="primary"
                endIcon={<UpdateIcon />}
                onClick={() => this.props.history.push(`/admin/profile/edit-profile`)}
              >
                Cập nhật
              </Button>
            </div>
          </div>
        </BodyWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    userInfo: state.users,
  };
};

export default connect(mapStateToProps, userActions)(withRouter(MyProfile));
