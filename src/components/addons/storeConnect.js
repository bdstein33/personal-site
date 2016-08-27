import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {isArray, isObject, merge} from 'lodash';
/*
  Takes in an array of prop keys and an object of actions that are connected to the provided component.

  Each index of the prop key array can be a string (which maps directly to state),
  or an object where the key is the prop variable name and the value is a string representing
  the path of the store value assigned to the prop variable

  Eg: ['modal', {user: 'application.user'}]
*/
export default (propKeys, ...actions) => {
  function mapStateToProps(state) {
    if (isArray(propKeys)) {
      return propKeys.reduce((storage, key) => {
        if (isObject(key)) {
          if (Object.keys(key).length > 1) {
            console.error('Invalid use of storeConnect:', propKeys);
          }
          const propName = Object.keys(key)[0];
          const propValuePath = key[propName];

          let propValue = state;

          propValuePath.split('.').forEach(path => {
            propValue = propValue[path];
          });

          storage[propName] = propValue;
        } else {
          storage[key] = state[key];
        }

        return storage;
      }, {});
    }

    return {};
  }

  function mapDispatchToProps(dispatch) {
    const allActions = merge(...actions);

    return {
      actions: bindActionCreators(allActions, dispatch)
    };
  }

  return Component => {
    if (actions.length) {
      return connect(
        mapStateToProps,
        mapDispatchToProps
      )(Component);
    }

    return connect(
      mapStateToProps
    )(Component);
  };
};
