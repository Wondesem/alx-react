import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontSize: '1.2rem'
  },
  copyright: {
    marginTop: '40px'
  }
})

export function Footer({ user }) {
  return (
    <div className="footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && <a href="#">Contact us</a>}
    </div>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);