import React, { PureComponent } from "react";
import { Icon, Skeleton } from "antd";
import { getProfileAdmin } from "../../../redux/actions/users";
import { Wrapper, BodyWrapper } from "../../../styled";
import PersonalForm from "./personalForm/PersonalForm";
import PasswordForm from "./passwordForm/PasswordFrom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EditProfile extends PureComponent {
  componentDidMount() {
    const { auth, getProfileAdmin } = this.props;

    getProfileAdmin(auth.profile.id);
  }

  render() {
    const { userInfo } = this.props;
    const { user } = userInfo;
    return (
      <div className="container">
        <BodyWrapper>
          <div className="col-9">
            <Wrapper>
              <h5 className="font-weight-normal d-flex align-items-center mb-4">
                <Icon type="user" className="mr-1" />
                Personal information
              </h5>
              <Skeleton loading={user.isLoading} active paragraph={{ rows: 6 }}>
                <PersonalForm
                  email={user.email}
                  fullName={user.fullName}
                  dayOfBirth={user.dayOfBirth}
                  phoneNumber={user.phoneNumber}
                  id={user._id}
                  isLoading={user.isLoading}
                />
              </Skeleton>
              <h5 className="font-weight-normal d-flex align-items-center mb-4 mt-5">
                <Icon type="lock" className="mr-1" /> Change password
              </h5>
              <Skeleton loading={user.isLoading} active paragraph={{ rows: 6 }}>
                <PasswordForm id={user._id} />
              </Skeleton>
            </Wrapper>
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
export default connect(mapStateToProps, { getProfileAdmin })(withRouter(EditProfile));
