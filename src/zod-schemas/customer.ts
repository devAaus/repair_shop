import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { customers } from "@/db/schema"

export const insertCustomerSchema = createInsertSchema(customers, {
   firstName: (schema) => schema.firstName.min(1, "First name is required"),
   lastName: (schema) => schema.lastName.min(1, "Last name is required"),
   address1: (schema) => schema.address1.min(1, "Address is required"),
   city: (schema) => schema.city.min(1, "City is required"),
   state: (schema) => schema.state.min(1, "State is required"),
   zip: (schema) => schema.zip.min(1, "Zip is required"),
   email: (schema) => schema.email.email("Invalid email address"),
   phone: (schema) => schema.phone.min(10, "Phone number must be at least 10 digits"),
})

export const selectCustomerSchema = createSelectSchema(customers)

export type insertCustomerSchemaType = typeof insertCustomerSchema._type

export type selectCustomerSchemaType = typeof selectCustomerSchema._type