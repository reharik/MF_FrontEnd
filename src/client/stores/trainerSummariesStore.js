/**
 * Created by reharik on 5/31/15.
 */
'use strict';

const ImmutableStore = require('fluxthis').ObjectOrientedStore;
//const ACTION_TYPES = require('constants/ActionTypes');

export default new ObjectOrientedStore({
    displayName: 'trainerStore',
    init() {
        this.loading = false;
        this.error = null;
        this.trainerSummaries = [];

        this.bindActions({
            'TRAINERS.LOAD_TRAINER_SUMMARIES_PENDING': onLoadTrainerSummariesPending,
            'TRAINERS.LOAD_TRAINER_SUMMARIES_SUCCESS': onLoadTrainerSummariesSuccess,
            'TRAINERS.LOAD_TRAINER_SUMMARIES_FAILURE': onLoadTrainerSummariesFailure
        })
    },
    public: {
        getTrainerSummaries(){
            return this.trainerSummaries;
        },
        getLoading(){
            return this.loading;
        },
        getError(){
            return this.errror;
        }
    },
    private: {
        onLoadTrainerSummariesPending() {
            this.loading = true;
            this.error = null;
        },
        onLoadTrainerSummariesSuccess(payload) {
            this.loading = false;
            this.error = null;

            this.trainerSummaries = payload.trainerSummaries;
        },
        onLoadTrainerSummariesFailure(payload) {
            this.loading = false;
            this.error = payload;
        }

    }
});
