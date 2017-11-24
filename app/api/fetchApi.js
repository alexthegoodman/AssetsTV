// import * as global              from '../redux/modules/global';
import * as browse                  from '../redux/modules/browse';
import * as interfaces              from '../redux/modules/interfaces';
import * as user                    from '../redux/modules/user';

import ApiClient            from './client';
const client                = new ApiClient();

export default class FetchApi {

    constructor(store) {
        //console.info('init FetchApi', store)
        // makes standardized call and also updates system in standard way,
        // allows consistent updates from any location in the app, and edit all api calls in 1 spot
        this.store = store;
    }

    // ATTN - should also return promise, return the api data
    // see about try in promise or promise in try
    // promise is a try, always catches, so simply wrap in promises

    // refreshPhaseComments(userHash, projectId, phaseImagesList) {
    //
    //     console.info('-api- refreshPhaseComments', userHash, projectId, phaseImagesList)
    //
    //     let self = this;
    //     let store = this.store;
    //
    //     // load comment data for each image
    //     if (Object.keys(phaseImagesList).length > 0) {
    //
    //         let browseInfo = {
    //             userHash: userHash,
    //             phaseImagesList: JSON.stringify(phaseImagesList)
    //         }
    //
    //         client.get('/get/comments', browseInfo).then(
    //             (data) => {
    //
    //                 console.info('get/comments', data, browseInfo);
    //
    //                 if (typeof data['ProjectComments'] != 'undefined' &&
    //                     data['ProjectComments'] != false) {
    //                     store.dispatch(browse.fetchProjectCommentsSuccessAction(data['ProjectComments'], projectId));
    //                 } else {
    //                     store.dispatch(browse.fetchProjectCommentsFailureAction(projectId));
    //                 }
    //
    //             }, (err) => {
    //                 //console.log(err);
    //                 store.dispatch(browse.fetchProjectCommentsFailureAction(projectId));
    //             }
    //         );
    //     }
    // }

    updateCurrentPhase(userHash, projectId, phaseId, phaseList) {

        return new Promise((resolve, reject) => {

          console.info(' -api- updateCurrentPhase', userHash)

          let self = this;
          let store = this.store;

          if (userHash && phaseId && projectId) {

              let browseInfo = {
                  userHash: userHash
              }

              // also see phaseSelector to set currentPhase in redux store
              client.get('/get/phase/' + projectId + '/' + phaseId + '/', browseInfo).then(
                  (data) => {

                      console.log('/get/phase/' + projectId + '/' + phaseId + '/', data);

                      if (typeof data['PhaseImagesData'] != 'undefined' &&
                          data['PhaseImagesData'] != false) {

                          store.dispatch(browse.fetchPhaseSuccessAction(projectId, phaseId, data['PhaseImagesList'], phaseList, data['PhaseImagesData']));

                          store.dispatch(browse.setCurrentPhaseSuccessAction(data['PhaseId'], data['PhaseImagesData'], data['PhaseImagesList'], data['PhaseName']));

                          resolve(data);

                      } else {
                          console.error('PhaseImagesData error 2b', data);
                          store.dispatch(browse.fetchPhaseFailureAction());
                          reject();
                      }

                  }, (err) => {
                      console.log('PhaseImagesData error 1b', err);
                      store.dispatch(browse.fetchPhaseFailureAction());
                      reject();
                  }
              );

          }

        });
    }

}

// simply use sockets to listen and run fetch functions? on('refreshReplies')->fetchReplies
// never socket.emit on client, simply use for instant updates. api call to comment, call emits a refresh to all clients.
// this way, sockets get out of the way and only need to exist here in Index
// all client. calls must be made in new /api/
// /api/ holds fetch, update, edit, etc client.calls and the redux calls
// allows api.call(stuff) which both calls the api and then updates the system, 1 line.
// also clean like /models/, standarixed logging, available throughout the app for re-use
