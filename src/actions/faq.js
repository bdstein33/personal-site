import {actionCreator} from '../util';

export default {
  getUserFaqs(data) {
    return actionCreator('GET_USER_FAQS', data, {
      request: {
        url: 'faqs/user',
        method: 'get'
      },
    });
  },

  getFaq(data) {
    return actionCreator('GET_FAQ', data, {
      request: {
        url: 'faqs',
        method: 'get'
      },
      success: ['HIDE_MODAL'],
    });
  },

  createFaq(data) {
    return actionCreator('CREATE_FAQ', data, {
      request: {
        url: 'faqs',
        method: 'post'
      },
      success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  },

  updateFaq(data) {
    return actionCreator('UPDATE_FAQ', data, {
      request: {
        url: 'faqs',
        method: 'put'
      },
      // success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  },

  deleteFaq(data) {
    return actionCreator('DELETE_FAQ', data, {
      request: {
        url: 'faqs',
        method: 'delete'
      },
      navigate: '/faqs'
    });
  },

  createFaqQuestion(data) {
    return actionCreator('CREATE_FAQ_QUESTION', data, {
      request: {
        url: 'faqs/questions',
        method: 'post'
      },
      // success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  },

  updateFaqQuestion(data) {
    return actionCreator('UPDATE_FAQ_QUESTION', data, {
      request: {
        url: 'faqs/questions',
        method: 'put'
      },
      // success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  },

  deleteFaqQuestion(data) {
    return actionCreator('DELETE_FAQ_QUESTION', data, {
      request: {
        url: 'faqs/questions',
        method: 'delete'
      },
      // success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  },

  createFaqSection(data) {
    return actionCreator('CREATE_FAQ_SECTION', data, {
      request: {
        url: 'faqs/sections',
        method: 'post'
      },
      success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  },

  updateFaqSection(data) {
    return actionCreator('UPDATE_FAQ_SECTION', data, {
      request: {
        url: 'faqs/sections',
        method: 'put'
      },
      // success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR'],
    });
  },

  deleteFaqSection(data) {
    return actionCreator('DELETE_FAQ_SECTION', data, {
      request: {
        url: 'faqs/sections',
        method: 'delete'
      },
      // success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  }
};

