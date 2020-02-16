import React, { PureComponent } from "react";
import { Icon, Skeleton } from "antd";
import _ from "lodash";
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

    // let userId = match.params.id;

    // if (_.isEmpty(match.params)) {
    //   userId = auth.user.id;
    // }

    this.props.getProfileAdmin(auth.profile.id);
  }

  render() {
    const { userInfo, auth } = this.props;
    const { user } = userInfo;
    return (
      <div>
        <BodyWrapper>
          <div className="row">
            <div className="col-3">
              <Skeleton
                active
                avatar
                loading={userInfo.isLoading}
                paragraph={{ rows: 4 }}
              >
                <AvatarWrapper
                  fullName={user.fullName}
                  avatar={"http://localhost:6789/" + user.avatar}
                />
              </Skeleton>
            </div>
            <div className="col-7">
              <Wrapper>
                <h5 className="font-weight-normal d-flex align-items-center mb-4">
                  <Icon type="user" className="mr-1" />
                  Admin information
                </h5>
                <div className="form-group row">
                  <label className="col-sm-3">Email:</label>
                  <div className="col-sm-9">{user.email}</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3">Full Name:</label>
                  <div className="col-sm-9">{user.fullName}</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3">Day of birth:</label>
                  <div className="col-sm-9">{user.dayOfBirth}</div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3">Phone number:</label>
                  <div className="col-sm-9">{user.phoneNumber}</div>
                </div>
              </Wrapper>
            </div>
            <div className="col-2">
              <Button
                variant="contained"
                color="primary"
                endIcon={<UpdateIcon />}
                onClick={() =>
                  this.props.history.push(`/admin/profile/edit-profile`)
                }
              >
                Update
              </Button>
            </div>
          </div>
        </BodyWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    userInfo: state.users
  };
};

export default connect(mapStateToProps, userActions)(withRouter(MyProfile));
