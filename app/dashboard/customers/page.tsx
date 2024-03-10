import { fetchCustomers } from "../../lib/data";
import {  FormattedCustomersTable } from "../../lib/definitions";
import CustomersTable from "../../ui/customers/table";

export default async function Page() {
  const customers = await fetchCustomers();
  const formatted: FormattedCustomersTable[] = customers.map((customer) => ({
    email: 'asdasdasd',
    image_url: customer.image_url,
    name: customer.name,
    total_invoices: 1,
    total_paid: "1",
    total_pending: "1",
    id: customer.id,
  }))
  return <CustomersTable customers={formatted}/>
}
