import React from "react";

function Entry(props) {
  return (
    <section className="entry">
      <img
        src={props.entry.img.src}
        alt={props.entry.img.alt}
        className="entry-image"
      />
      <article className="entry-details">
        <div className="location">
          <img
            src="/src/assets/images/marker.png"
            alt="marker icon"
            className="marker-icon"
          />
          <span className="country-name">{props.entry.country}</span>
          <a
            className="maps-location"
            href={props.entry.googleMapsLink}
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <h2>{props.entry.title}</h2>
        <p className="date">{props.entry.dates}</p>
        <p className="description">{props.entry.text}</p>
      </article>
    </section>
  );
}

export default Entry;
