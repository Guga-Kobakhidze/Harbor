"use client";
/* eslint-disable */
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

export interface FormComponentProps {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  submit: React.FormEventHandler<HTMLFormElement>;
}

const FormComponent = ({ children, methods, submit }: FormComponentProps) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={submit}>{children}</form>
    </FormProvider>
  );
};

export default FormComponent;
