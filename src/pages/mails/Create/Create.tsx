import { openaiApi } from "@/shared/api/openai";
import { useStore } from "@/app/stores";
import { useEffect, useState } from "react";
import { generateMailMock } from "@/shared/api/openai/mocks";
import { Button, Card, Input, Textarea, Typography } from "@/shared/ui";
import { useForm } from "react-hook-form";
import RepeatSvg from "@/shared/icons/repeat.svg?react";
import CopyImgPath from "@/shared/icons/copied.png";
import CopySvg from "@/shared/icons/copy.svg?react";

import styles from "./Create.module.css";
import { copyToClipboard, showTemporaryImage } from "@/shared/lib";

interface FormData {
  role: string;
  company: string;
  skills: string;
  details: string;
}

const Create = () => {
  const [generatedMail, setGeneratedMail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addMail = useStore((state) => state.addMail);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({ mode: "onTouched" });

  const formTitleParts = watch(["role", "company"]).filter(Boolean);
  const hasFormTitle = formTitleParts.length > 0;
  const formTitle = hasFormTitle
    ? formTitleParts.join(", ")
    : "New Application";

  const detailsLength = watch("details", "").length;
  const detailsCounter = `${detailsLength}/1200`;

  const handleFormSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const response = await openaiApi.createMail(data);
      const mailText = String(response);
      setGeneratedMail(mailText);
      addMail({ id: crypto.randomUUID(), text: mailText });
    } catch (error) {
      // Fallback to mock data if API fails
      const mockMail = generateMailMock(data);
      const mockMailText = String(mockMail);
      setGeneratedMail(mockMailText);
      addMail({ id: crypto.randomUUID(), text: mockMailText });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    copyToClipboard(generatedMail).then(() => {
      showTemporaryImage(CopyImgPath);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.root}>
          <fieldset disabled={isLoading} className={styles.fieldset}>
            <Typography
              variant="title2"
              weigh="semibold"
              color={hasFormTitle ? "primary" : "hint"}
              className={styles.formTitle}
            >
              {formTitle}
            </Typography>
            <div className={styles.rowFields}>
              <Input
                label="Job Title"
                error={errors.role}
                {...register("role", { required: true })}
                placeholder="Product manager"
              />
              <Input
                label="Company"
                error={errors.company}
                {...register("company", {
                  required: true,
                })}
                placeholder="Apple"
              />
            </div>

            <Input
              label="I am good at..."
              error={errors.skills}
              {...register("skills", {
                required: true,
              })}
              placeholder="HTML, CSS and doing things in time"
            />

            <Textarea
              label="Additional details"
              error={errors.details}
              {...register("details", {
                required: true,
                maxLength: 1200,
              })}
              placeholder="Describe why you are a great fit or paste your bio"
              rows={10}
              description={detailsCounter}
            />

            <Button
              size="medium"
              variant={generatedMail ? "outlined" : "filled"}
              type="submit"
              disabled={!isValid}
              progress={isLoading}
              start={generatedMail && <RepeatSvg />}
            >
              {generatedMail ? "Try Again" : "Generate Now"}
            </Button>
          </fieldset>
        </form>
        <Card
          text={
            generatedMail ||
            "Your personalized job application will appear here..."
          }
          actions={{
            end: generatedMail && (
              <Button
                onClick={handleCopyToClipboard}
                size="small"
                variant="default"
                end={<CopySvg />}
              >
                Copy to clipboard
              </Button>
            ),
          }}
          type="full"
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export { Create };
