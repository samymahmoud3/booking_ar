import './featureItem.scss'

const FeatureItem = ({icon, iconName, title, description, width, color}) => {
  return (
    <div className="featureItem" style={ {width: width} }>
      <img src={`/${icon}`} alt={iconName} />
      <h2>{ title }</h2>
      <p style={ { color: color}}>{ description }</p>
    </div>
  )
}

export default FeatureItem;