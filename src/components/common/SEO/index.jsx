import React from 'react';
import Helmet from 'react-helmet';

import {
  url,
  defaultDescription,
  social,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
} from '../../../data/config';

export const SEO = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.facebook}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
	  <link rel="canonical" href={url}/>

      <meta property="og:url" content={`${url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
	  <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
	  <meta property="og:image" content={`${url}${logo}`}/>
	  <meta property="og:locale" content="fr_FR" />
      <meta property="fb:app_id" content={social.facebook} />

      <meta name="twitter:card" content="summary" />
	  <meta name="twitter:image" content={`${url}${logo}`}/>
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.linkedin} />
	  <link rel="author" href={socialLinks.linkedin} />
	  
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
