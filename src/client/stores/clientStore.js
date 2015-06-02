/**
 * Created by reharik on 5/31/15.
 */
'use strict';

const ImmutableStore = require('fluxthis').ObjectOrientedStore;
//const ACTION_TYPES = require('constants/ActionTypes');

export default new ObjectOrientedStore({
    displayName: 'clientStore',
    init() {
        this.loading = false;
        this.error = null;
        this.clients = [];

        this.bindActions(
            'TRAINER_GENERATED_CLIENT_SIGNED_UP_PENDING', this.onTrainerGeneratedClientSignedUpPending,
            'TRAINER_GENERATED_CLIENT_SIGNED_UP_SUCCESS', this.onTrainerGeneratedClientSignedUpSuccess,
            'TRAINER_GENERATED_CLIENT_SIGNED_UP_FAILURE', this.onTrainerGeneratedClientSignedUpFalure
        );
    },
    public:{
        getState() {
            return this.clients;
        }
    },
    private:{
        onTrainerGeneratedClientSignedUpPending() {
        this.loading = true;
        this.error = null;
        },
        onTrainerGeneratedClientSignedUpSuccess(payload){
            // do something with payload
        },
        onTrainerGeneratedClientSignedUpFailure(payload) {
            this.loading = false;
            this.error = payload;
        }
    }
});

