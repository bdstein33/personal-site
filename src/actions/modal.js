export default {
  showModal: (body, title) => {
    return dispatch => {
      dispatch({type: 'SHOW_MODAL', body, title});
    };
  },
  hideModal: () => {
    return dispatch => {
      dispatch({type: 'HIDE_MODAL'});
    };
  }
};
