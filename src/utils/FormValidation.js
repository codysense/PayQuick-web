import Joi from "joi";

const formSchema = Joi.object({
  code: Joi.string().min(2).max(3).required().messages({
    "string.empty": "Department code is required",
    "string.min": "Department code must be at least 2 letters",
    "string.max": "Department code can not be more than 3 letters",
  }),
  name: Joi.string().max(20).required().messages({
    "string.empty": "Department name  is required",
    "string.max": "Department name can not be more than 20 letters",
  }),
  leaveRequest: Joi.number().greater(0).less(29).required().messages({
  }),

  reason: Joi.string().max(200).required().messages({
    "string.empty": "Leave reason is required",
    "string.max": "Leave reason  can not be more than 200 letters",
  }),
  date_from: Joi.date().required().messages({
  }),
  date_to: Joi.date().required().messages({
  }),
});

export function getFormschema() {
  return formSchema;
}
