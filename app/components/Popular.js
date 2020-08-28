import React from 'react'

export default class Popular extends React.Component {
  render() {
    const Language = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python']
    return (
        <ul className="flex-center">
          {Language.map(lang => (
            <li key={lang}>
              <button className="btn-clear nav-link">
                  {lang}
              </button>
            </li>
          ))}
        </ul>
    )
  }
}