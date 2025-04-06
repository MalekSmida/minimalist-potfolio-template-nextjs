import { env } from '@/utils/env';

const contactInfo = {
  email: env.email,
  address: env.address,
  phone: env.phone,
  // To generate the URL you can just copy it from online Google maps search
  googleMapsLink: env.googleMapsLink,
  linkedinProfile: env.linkedinProfile,
  githubProfile: env.githubProfile,
  githubRepository: env.githubRepository,
};

export default contactInfo;
