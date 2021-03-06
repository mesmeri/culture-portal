import React from 'react'
import Image from '../../../components/AppImage/AppImage'
import { Button } from 'react-bootstrap'
import { navigate } from 'gatsby'
import { getLangPath } from "../../../utils/language"
import { getFields } from "../../../utils/fields"
import Fade from 'react-reveal/Fade'

import './authorsList.css'

const AuthorList = ({ list, lang, sourceFields }) => {

  const items = list.map((author) => {
    return (
      <Fade key={author.name}>
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 col-xl-4 mb-5 card-wrapper"
          key={author.name}>
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <a href="/" onClick={(e) => {
                e.preventDefault();
                navigate(`directors/${author.slug}/${getLangPath(lang)}`);
              }}>
                <Image
                  src={author.pathname}
                  alt={author.name}
                />
              </a>
              <h4 className="author-name">
                {author.name}
              </h4>
              <h5 className="author-city">
                {author.city}
              </h5>
              <div className="card-text flex-grow-1">
                <p className='author-years'>{author.bday}</p>
                <p className='author-title'>{author.titleText}</p>
              </div>
              <div className="link-wrapper">
                <Button href={author.slug} variant="primary" className="btn btn-primary" onClick={(e) => {
                  e.preventDefault();
                  navigate(`directors/${author.slug}/${getLangPath(lang)}`);
                }}>
                  {getFields('labelMore', sourceFields, lang)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    )
  })

  return (
    <div className="row align-items-stretch">
      {items}
    </div>
  )
}

export default AuthorList
