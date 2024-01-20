import React from "react";

export default function FeatureItem({ imageUrl, title, description }) {
    return (
        <div className="feature-item">
            <img
                loading="lazy"
                src={imageUrl}
                className="feature-image"
                alt={`${title} icon`}
            />
            <p className="feature-title">
                {title}
            </p>
            <p className="feature-description">
                {description}
            </p>
        </div>
    );
}
