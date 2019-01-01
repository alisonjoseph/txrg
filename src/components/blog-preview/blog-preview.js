import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default ({ blog }) => (
  <div className="bgrid feature">
    <div className="blog__preview service-content">
      <Link className="blog__header" to={`/blog/${blog.slug}`}>
        <div className="blog__thumbnail">
          <Img alt={blog.title} fluid={blog.featureImage.fluid} />
        </div>
        <div className="blog__content">
          <h4 className="feature__title">{blog.title}</h4>
          <p
            className="feature__description"
            dangerouslySetInnerHTML={{
              __html: blog.description.childMarkdownRemark.html,
            }}
          />
          {/* 
            <p className="blog__date">{blog.publishDate}</p>
            */}
        </div>
      </Link>
    </div>
  </div>
);
