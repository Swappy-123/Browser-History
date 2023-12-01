import './index.css'

const BrowseHistory = props => {
  const {searchDetails, deleteSearch} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails
  const onMode = () => {
    deleteSearch(id)
  }
  return (
    <li className="container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="img" />
      <p className="title">{title}</p>
      <p className="url">{domainUrl}</p>
      <button className="btn"
      type="button"
      onClick={onMode}
      data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          
          className="img"
        />
      </button>
    </li>
  )
}

export default BrowseHistory
