import React from 'react'
import articles from '../assets/articles'

const Article = () => (
  <div>
    {
      articles.map((article, i) => (
        <div key={ i }>
          <a href={ article.link }>
            {
              article.name
            }
          </a>
        </div>
      ))
    }
  </div>
)

export default Article
