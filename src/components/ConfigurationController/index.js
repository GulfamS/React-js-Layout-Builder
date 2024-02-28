import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="container">
          <h1 className="heading">Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
              className="checkbox"
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="left-navbar"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
              className="checkbox"
            />
            <label className="label" htmlFor="left-navbar">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="right-navbar"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
              className="checkbox"
            />
            <label className="label" htmlFor="right-navbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
