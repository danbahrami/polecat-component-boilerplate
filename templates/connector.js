import React from 'react';
import { connect } from 'react-redux';
import $NAME$ from './$FILE_NAME$-component';

const mapStateToProps = (stateProps, ownProps) => {};

const mapDispatchToProps = (dispatchProps, ownProps) => {};

const mergeProps = (stateProps, dispatchProps, ownProps) => {};

const $NAME$Connector = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)($NAME$);

export default $NAME$Connector;
