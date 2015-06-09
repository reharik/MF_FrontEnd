/**
 * Created by reharik on 5/31/15.
 */
'use strict';

const ImmutableStore = require('fluxthis').ObjectOrientedStore;
//const ACTION_TYPES = require('constants/ActionTypes');

export default new ObjectOrientedStore({
    displayName: 'authStore',
    init() {
        this.loading = false;
        this.error = null;
        this.clientSummaries = [];

        this.bindActions({
            'LOAD_CLIENT_SUMMARIES_PENDING': onLoadClientSummariesPending,
            'LOAD_CLIENT_SUMMARIES_SUCCESS': onLoadClientSummariesSuccess,
            'LOAD_CLIENT_SUMMARIES_FAILURE': onLoadClientSummariesFailure
        });
    },
    public: {
        getClientSummaries(){
        return this.clientSummaries;
        },
        getLoading(){
            return this.loading;
        },
        getError(){
            return this.errror;
        }
    },
    private: {
        onLoadClientSummariesPending: function() {
            this.loading = true;
            this.error = null;
            this.clientSummaries = payload.clientSummaries;
        },
        onLoadClientSummariesSuccess: function(payload) {
            this.loading = false;
            this.error = null;
            this.clientSummaries = payload.clientSummaries;
        },
        onLoadClientSummariesFailure: function(payload) {
            this.loading = false;
            this.error = payload;
        }
    }
});