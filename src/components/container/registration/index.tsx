"use client";

import { Button } from "@/components/ui/button";
import RegistrationLabel from "./labels";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { UploadDropzone } from "@/lib/uploadthing";
import { Label } from "@/components/ui/label";

const RegistrationForm: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();

  const formik = useFormik({
    initialValues: {
      name: "",
      residency: "",
      phoneNumber: "",
      email: "",
      linkedInUrl: "",
      githubUsername: "",
      gitlabUsername: "",
      universityName: "",
      universityEmail: "",
      major: "",
      currentSemester: "",
      hoursAvailability: "",
      projectCount: "",
      relevantCoursework: "",
      role: "",
      ktmUrl: "",
      resumeUrl: "",
    },
    onSubmit: (values) => {
      axios
        .post(
          "https://students-tech-server-s7htybhruq-as.a.run.app/students/",
          { userID: user?.id, ...values }
        )
        .then(() => {
          toast.success("successfully registered as student");
          router.push("/");
        })
        .catch(() => toast.error("error when registering"));
    },
    validationSchema: toFormikValidationSchema(
      z.object({
        name: z.string(),
        residency: z.string(),
        phoneNumber: z.string(),
        email: z.string().email(),
        linkedInUrl: z.string(),
        githubUsername: z.string(),
        gitlabUsername: z.string(),
        universityName: z.string(),
        universityEmail: z.string().email(),
        major: z.string(),
        currentSemester: z.number(),
        hoursAvailability: z.string(),
        projectCount: z.string(),
        relevantCoursework: z.string(),
        role: z.string(),
        ktmUrl: z.string(),
        resumeUrl: z.string(),
      })
    ),
  });

  return (
    <div className="w-full h-full p-8 md:p-16">
      <form onSubmit={formik.handleSubmit}>
        <RegistrationLabel
          label="name"
          type="text"
          required
          placeholder="Let us know more about yourself"
          value={formik.values.name}
          onChange={formik.handleChange}
          title="What's your full name?"
        />
        <RegistrationLabel
          label="residency"
          type="text"
          required
          placeholder="I live in.."
          value={formik.values.residency}
          onChange={formik.handleChange}
          title="Where do you live?"
        />
        <RegistrationLabel
          title="What's your phone number?"
          label="phoneNumber"
          type="text"
          required
          placeholder="My phone number is.."
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="What's your email?"
          label="email"
          type="text"
          required
          placeholder="My email is.."
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="Do you have any LinkedIn account?"
          label="linkedInUrl"
          type="text"
          required={false}
          placeholder="My LinkedIn account is.."
          value={formik.values.linkedInUrl}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="Do you have any github account?"
          label="githubUsername"
          type="text"
          required
          placeholder="My github account is.."
          value={formik.values.githubUsername}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="Do you have any gitlab account?"
          label="gitlabUsername"
          type="text"
          required
          placeholder="My gitlab account is.."
          value={formik.values.gitlabUsername}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="Where did you go to unversity"
          label="universityName"
          type="text"
          required
          placeholder="I go to university of.."
          value={formik.values.universityName}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="What's your university email?"
          label="universityEmail"
          type="text"
          placeholder="My university email is.."
          required={false}
          value={formik.values.universityEmail}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="What's your university major?"
          label="major"
          type="text"
          placeholder="I went to.."
          required
          value={formik.values.major}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="What's your current semester"
          label="currentSemester"
          type="number"
          placeholder="I am at semester.."
          required
          value={formik.values.currentSemester}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="How many hour you are available in a day for work?"
          label="hoursAvailability"
          type="text"
          placeholder="I am available for.."
          required={false}
          value={formik.values.hoursAvailability}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="How many project you have done before?"
          label="projectCount"
          type="text"
          placeholder="I have done x project.."
          required
          value={formik.values.projectCount}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="What's your relevant course work?"
          label="relevantCoursework"
          type="text"
          placeholder="I have learn.."
          required
          value={formik.values.relevantCoursework}
          onChange={formik.handleChange}
        />
        <RegistrationLabel
          title="What's your main tech role"
          label="role"
          type="text"
          placeholder="Backend Engineer"
          required
          value={formik.values.role}
          onChange={formik.handleChange}
        />
        <div className="mb-4">
          <Label htmlFor="ktmUpload" className="font-bold">
            Upload KTM
          </Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res !== undefined) {
                formik.values.ktmUrl = res[0].fileUrl;
              }
            }}
            onUploadError={() => {
              toast.error("failed to upload KTM");
            }}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="ktmUpload" className="font-bold">
            Upload Resume
          </Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res !== undefined) {
                formik.values.resumeUrl = res[0].fileUrl;
              }
            }}
            onUploadError={() => {
              toast.error("failed to upload KTM");
            }}
          />
        </div>
        <Button type="submit" className="w-full" onClick={formik.submitForm}>
          submit
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
