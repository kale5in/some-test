import { client } from "./client";

const createMail = async ({
  role,
  company,
  skills,
  details,
}: {
  role: string;
  company: string;
  skills: string;
  details: string;
}) => {
  return client.chat.completions
    .create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a professional assistant specializing in writing personalized job application letters.",
        },
        {
          role: "user",
          content: `
              Generate a professional job application letter using the following details:
              JobTitle: ${role}
              Company: ${company}
              SkillsList: ${skills}
              AdditionalDetails: ${details}

              Here’s the updated version:
              •	Begin the letter with “Dear ${company} Team,”.
              •	Write 3 to 6 concise paragraphs, each containing 1 to 2 sentences.
              •	Use clear, direct language and avoid overused expressions.
              •	End without formal closings like “Sincerely” or “Best regards”; keep it professional yet informal.
                          
              Maintain the following structure:
              1. Introduction addressing the company and expressing interest in the job.
              2. A paragraph highlighting relevant skills and experience.
              3. A paragraph elaborating on additional details, achievements, or unique contributions.
              4. A closing statement expressing enthusiasm for the opportunity and willingness to discuss further.
              `,
        },
      ],
    })
    .then((response) => response.choices[0].message.content);
};

const openaiApi = {
  createMail,
};

export { openaiApi };
