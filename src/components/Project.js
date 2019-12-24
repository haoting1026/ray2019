import React from 'react';
import config from '../../config';

export default function Project() {
  return (
    <div className="box alt container">
    {config.projects.map( project => {
      if (project.id % 2 !== 0) {
        return(
          <section className="feature left" key={project.current}>
            <iframe title={project.name} className="image" allow="fullscreen" allowFullScreen src={project.issuu}></iframe>
            <div className="content">
              <h3>{project.name}</h3>
              <p>
                <a href={project.current} target="_blank" rel="noopener noreferrer">現行網站</a>
                <br/>
                <a href={project.prototype} target="_blank" rel="noopener noreferrer">設計雛型</a>
              </p>
            </div>
          </section>
        )
      } else {
        return(
          <section className="feature right"  key={project.current}>
            <iframe title={project.name} className="image" allow="fullscreen" allowFullScreen src={project.issuu}></iframe>
            <div className="content">
              <h3>{project.name}</h3>
              <p>
                <a href={project.current} target="_blank" rel="noopener noreferrer">現行網站</a>
                <br/>
                <a href={project.prototype} target="_blank" rel="noopener noreferrer">設計雛型</a>
              </p>
            </div>
          </section>
        )
      }
    })}
    </div>
  );
}
