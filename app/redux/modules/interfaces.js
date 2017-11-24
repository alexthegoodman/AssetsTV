const SHOW_CONTENT = 'browse/SHOW_CONTENT';
const HIDE_CONTENT = 'browse/HIDE_CONTENT';

const SHOW_DISPATCH = 'browse/SHOW_DISPATCH';
const HIDE_DISPATCH = 'browse/HIDE_DISPATCH';

const SHOW_LOGIN = 'browse/SHOW_LOGIN';
const HIDE_LOGIN = 'browse/HIDE_LOGIN';

const PICK_PROJECT = 'browse/PICK_PROJECT';

const initialState = {
    showContent: false,
    showDispatch: false,
    showLogin: false,
    projectSelection: false
};

import update from 'immutability-helper';
export default function reducer(state = initialState, action = {}) {

    //console.info('action', action)

    switch (action.type) {

        case SHOW_CONTENT:

            return update(state, {
                showContent: { $set: true }
            });

        case HIDE_CONTENT:

            return update(state, {
                showContent: { $set: false }
            });

        case SHOW_DISPATCH:

            return update(state, {
                showDispatch: { $set: true }
            });

        case HIDE_DISPATCH:

            return update(state, {
                showDispatch: { $set: false }
            });

        case SHOW_LOGIN:

            return update(state, {
                showLogin: { $set: true }
            });

        case HIDE_LOGIN:

            return update(state, {
                showLogin: { $set: false }
            });

        case PICK_PROJECT:

            return update(state, {
                projectSelection: { $set: action.projectId }
            });

		default:
            return state;

    }
}

export function showContentAction() {
    return {
        type:   SHOW_CONTENT
    }
}

export function hideContentAction() {
    return {
        type:   HIDE_CONTENT
    }
}

export function showDispatchAction() {
    return {
        type:   SHOW_DISPATCH
    }
}

export function hideDispatchAction() {
    return {
        type:   HIDE_DISPATCH
    }
}

export function showLoginAction() {
    return {
        type:   SHOW_LOGIN
    }
}

export function hideLoginAction() {
    return {
        type:   HIDE_LOGIN
    }
}

export function pickProjectAction(projectId) {
    return {
        type:   PICK_PROJECT,
        projectId: projectId
    }
}
