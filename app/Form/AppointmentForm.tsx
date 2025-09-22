"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

type FormFields = {
  name: string;
  number: string;
  email: string;
  description: string;
};

const AppointmentForm = () => {
  const template = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const service = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const key = process.env.NEXT_PUBLIC_USER_ID!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data: FormFields) => {
    // Map data to match EmailJS variables if needed
    const mappedData = {
      name: data.name,
      number: data.number,
      email: data.email,
      description: data.description,
    };

    emailjs
      .send(service, template, mappedData, key)
      .then((response) => {
        reset();
        console.log("Form data:", data);
        toast.success("Form Submitted Successfully!");
      })
      .catch((error) => {
        console.error("EmailJS submission error:", error?.text || error);
        toast.error("Form Submission Failed!");
      });
  };

  return (
    <>
      <form
        className="flex flex-col mt-10 w-[90%] mx-auto space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Name"
          className="rounded-xl bg-white bg-opacity-20 p-2 border"
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="text"
              placeholder="Email"
              className="rounded-xl p-2 bg-white bg-opacity-20 border w-full"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register("number", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
              })}
              type="text"
              placeholder="Number"
              className="rounded-xl p-2 bg-white bg-opacity-20 border w-full"
            />
            {errors.number && (
              <div className="text-red-500">{errors.number.message}</div>
            )}
          </div>
        </div>

        <textarea
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 5,
              message: "Description must be at least 5 characters long",
            },
          })}
          placeholder="Description"
          className="rounded-xl p-2 bg-white bg-opacity-20 border"
          rows={4}
        />
        {errors.description && (
          <div className="text-red-500">{errors.description.message}</div>
        )}

        <button
          type="submit"
          className="w-full bg-custom-gradient text-white p-2 rounded-full"
        >
          Contact Us
        </button>
      </form>

      {/* Add ToastContainer if not already in a global layout */}
      <ToastContainer />
    </>
  );
};

export default AppointmentForm;
