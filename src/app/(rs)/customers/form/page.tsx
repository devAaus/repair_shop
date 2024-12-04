import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import CustomerForm from "./CustomerForm";

export default async function CustomerFormPage({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | undefined }>
}) {
   try {
      const { customerId } = await searchParams
      if (customerId) {
         const customer = await getCustomer(parseInt(customerId));
         if (!customer) {
            return (
               <>
                  <h2 className="text-2xl mb-2">
                     Customer ID #{customerId} not found
                  </h2>
                  <BackButton title="Go Back" variant="default" />
               </>
            )
         }
         console.log(customer);
         return <CustomerForm customer={customer} />
      } else {
         return <CustomerForm />
      }
   } catch (error) {
      if (error instanceof Error) {
         throw error;
      }
   }
}