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
  searchBarContainer: {
    width: '100%',
    height: '100%',
    backgroundContainer: 'blue'
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
  },
  faqSectionTitle: {
    fontWeight:500,
    fontSize: '20px',
    marginBottom: '6px',
    marginTop: '10px'
  },
  faqQuestionTitle: {
    fontWeight: 300,
    fontSize: '16px',
    color: '#3F828F',
    cursor: 'pointer',
    marginBottom: '6px'
  }
};

function setStyle(component, styleObj) {
  for (var style in styleObj) {
    component.style[style] = styleObj[style];
  }
}

function createComponent(elementType, styleObj) {
  var copmonent = document.createElement(elementType);
  for (var style in styleObj) {
    copmonent.style[style] = styleObj[style];
  }

  return copmonent;
}

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
  window.onload = function() {
    var backgroundContainer = createComponent('div', css.backgroundContainer)
      faqContainer = createComponent('div', css.faqContainer),
      searchBar = createComponent('input', css.searchBar);


    searchBar.setAttribute('type', 'text');
    searchBar.placeholder='Search';

    backgroundContainer.className = 'faq-modal';
    backgroundContainer.appendChild(faqContainer);

    faqContainer.appendChild(searchBar);

    getFaqQuestions(function(faq) {
      console.log(faq);
      var element;
      faq.sections.forEach(function(section) {
        element = document.createElement('h2');
        element.innerHTML = section.name;

        setStyle(element, css.faqSectionTitle)
        faqContainer.appendChild(element);

        section.faqQuestions.forEach(function(question) {
          element = document.createElement('h4');
          element.innerHTML = question.name;

          setStyle(element, css.faqQuestionTitle)
          faqContainer.appendChild(element);

          element = document.createElement('div');
          element.innerHTML = question.content;
          // faqContainer.appendChild(element);
        });
      })
      document.body.appendChild(backgroundContainer);

      window.addEventListener('keydown', function(event) {
        console.log(document.activeElement.nodeName);
        if (
          document.activeElement.nodeName !== 'INPUT' &&
          event.keyCode === 72 // h
        ) {
          if (backgroundContainer.style.visibility === 'hidden') {
            event.preventDefault();
            backgroundContainer.style.visibility = 'visible';
            searchBar.value = '';
            searchBar.focus();
          } else {
            backgroundContainer.style.visibility = 'hidden';
          }
        }

        if (
          event.keyCode === 27 &&
          backgroundContainer.style.visibility === 'visible'
        ) {
          backgroundContainer.style.visibility = 'hidden';
        }
      });
    });
  };
}(window, document));
