const contactInfo = {
  email: process.env.NEXT_PUBLIC_EMAIL,
  address: process.env.NEXT_PUBLIC_ADDRESS,
  phone: process.env.NEXT_PUBLIC_PHONE,
  // To generate the URL you can just copy it from online Google maps search
  googleMapsLinkForAddress: process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK,
  linkedinLink: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE,
  githubLink: process.env.NEXT_PUBLIC_GITHUB_PROFILE,
  githubRepoLink: process.env.NEXT_PUBLIC_GITHUB_REPOSITORY,
};

export default contactInfo;
