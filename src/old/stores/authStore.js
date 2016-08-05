'use strict';

const ObjectOrientedStore = require('fluxthis').ObjectOrientedStore;
//const ACTION_TYPES = require('constants/ActionTypes');

export default new ObjectOrientedStore({
  displayName: 'authStore',
  init() {
    this.loading = false;
    this.error = null;
    this._user = null;

    this.bindActions(
            'FETCH_USER_PENDING', this.onFetchUserPending,
            'FETCH_USER_SUCCESS', this.onFetchUserSuccess,
            'FETCH_USER_FAILURE', this.onFetchUserFailure,
            //
            'SIGN_IN_PENDING', this.onSignInPending,
            'SIGN_IN_SUCCESS', this.onSignInSuccess,
            'SIGN_IN_FAILURE', this.onSignInFailure,
            //
            'SIGN_OUT_PENDING', this.onSignOutPending,
            'SIGN_OUT_SUCCESS', this.onSignOutSuccess,
            'SIGN_OUT_FAILURE', this.onSignOutFailure

        );
  },
  public: {
    isLoggedIn() {
      return this._user !== null && this._user !== {};
    },
    getUser() {
      return this._user;
    },
    getLoading() {
      return this.loading;
    },
    getError() {
      return this.error;
    }
  },
  private: {
    onFetchUserPending() {
      this.loading = true;
      this.error = null;
    },
    onFetchUserSuccess(payload) {
      this.loading = false;
      this.error = null;

      this._user = payload;
    },
    onFetchUserFailure(payload) {
      this.loading = false;
      this.error = payload;
    },
    onSignInPending() {
      this.loading = true;
      this.error = null;
    },
    onSignInSuccess(payload) {
      this.loading = false;
      this.error = null;

      this._user = payload;
    },
    onSignInFailure(payload) {
      this.loading = false;
      this.error = payload;
    },
    onSignOutPending() {
      this.loading = true;
      this.error = null;
    },
    onSignOutSuccess(payload) {
      this.loading = false;
      this.error = null;

      this._user = null;
    },
    onSignOutFailure(payload) {
      this.loading = false;
      this.error = payload;
    }

  }
});


