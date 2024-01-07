import './input.scss';

const Input = ({ iconPath, inputType, inputPlaceholder }) => {

  return (
    <div className="group">
      <img src={ `/${iconPath}` } alt={ iconPath } />
      <div>
        <input type={ inputType } required />
        <span className="bar"></span>
        <label>{ inputPlaceholder }</label>
      </div>
    </div>
  )
};

export default Input;