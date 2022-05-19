import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const SearchBox = ({isOpen, onClick, onSubmit, additionalStyles, frameClass}) => {
  const handleKeyDown = (event) => {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      onSubmit();
    }
  };

  const baseStyles = {
    open: {
      width: 300
    },
    closed: {
      width: 0
    },
    smallIcon: {
      width: 30,
      height: 30
    },
    icon: {
      width: 40,
      height: 40,
      padding: 5,
      top: 10
    },
    frame: {
      border: 'solid 1px black',
      borderRadius: 5
    }
  };

  let textStyle = isOpen ? baseStyles.open : baseStyles.closed;
  textStyle = Object.assign(textStyle, additionalStyles ? additionalStyles.text : {});

  const divStyle = Object.assign({}, textStyle, baseStyles.frame, additionalStyles ? additionalStyles.frame: {});
  divStyle.width += baseStyles.icon.width + 5;

  return (
    <div style={divStyle} className={frameClass ? frameClass : ''}>
      <button onClick={() => onClick()}><i className={'fa fa-search'}></i> search</button>
      <input type={'text'} name='busqueda' style={textStyle} onKeyDown={handleKeyDown}/>
    </div>
  );
};

export default SearchBox;
