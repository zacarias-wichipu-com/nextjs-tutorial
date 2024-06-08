import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import {fetchInvoiceById, fetchCustomers} from '@/app/lib/data';
import {notFound} from "next/navigation";
import {Metadata, ResolvingMetadata} from "next";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    {params}: Props
): Promise<Metadata> {
    const id = params.id

    const [
        invoice,
    ] = await Promise.all([
        fetchInvoiceById(id),
    ]);

    return {
        title: `Edit Invoice ${invoice.id}`
    }
}

export default async function Page({params}: { params: { id: string } }) {
    const id = params.id;
    const [
        invoice,
        customers
    ] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ]);
    if (!invoice) {
        notFound();
    }
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Invoices', href: '/dashboard/invoices'},
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form invoice={invoice} customers={customers}/>
        </main>
    );
}
