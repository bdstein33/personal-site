/* eslint-disable */
var css = {
  backgroundContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, .8)',
    zIndex: 214748,
    position: 'fixed',
    top: 0,
    left: 0,
    visibility: 'hidden' // default
  },
  faqContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '80%',
    height: '80%',
    margin: '10%',
    padding: '20px',
    border: '1px solid #828282',
    zIndex: 2147483647
  },
  searchBar: {
    fontSize: '24px',
    fontWeight: 300,
    width: '100%',
    height: 60,
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '2px solid #828282',
    borderRadius: 0
  }
};

function getFaqQuestions(callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(JSON.parse(xmlHttp.responseText));
    }
  };
  xmlHttp.open('GET', 'http://127.0.0.1:8000/api/faqs?id=12', true);
  xmlHttp.send(null);
}

(function(window, document) {
  getFaqQuestions(function(faq) {
    console.log(faq);
    var backgroundContainer = document.createElement('div'),
      faqContainer = document.createElement('div'),
      searchBar = document.createElement('input');

    // backgroundContainer
    for (var style in css.backgroundContainer) {
      backgroundContainer.style[style] = css.backgroundContainer[style];
    }

    // faqContainer
    for (var style in css.faqContainer) {
      faqContainer.style[style] = css.faqContainer[style];
    }

    // searchBar
    for (var style in css.searchBar) {
      searchBar.style[style] = css.searchBar[style];
    }

    searchBar.setAttribute('type', 'text');
    searchBar.placeholder='How do I...';

    backgroundContainer.className = 'faq-modal';
    faqContainer.appendChild(searchBar);
    backgroundContainer.appendChild(faqContainer);

    window.onload = function() {
      document.body.appendChild(backgroundContainer);
      window.addEventListener('keydown', function(event) {
        console.log(document.activeElement.nodeName);
        if (
          document.activeElement.nodeName !== 'INPUT' &&
          event.keyCode === 72 // h
        ) {
          if (backgroundContainer.style.visibility === 'hidden') {
            backgroundContainer.style.visibility = 'visible';
          } else {
            backgroundContainer.style.visibility = 'hidden';
          }
        }
      });
    };
  });
}(window, document));
