import { type MailInputType } from "./types";

const createMailMock = ({ role, skills, company, details }: MailInputType) => {
  return `Dear ${company} Team,

I am writing to express my interest in the ${role} position.

My experience in the realm combined with my skills in ${skills} make me a strong candidate for this role.

${details}

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`;
};

export { createMailMock as generateMailMock };
