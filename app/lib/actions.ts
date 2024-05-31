'use server';

export async function createInvoice(formData: FormData) {
    console.log('In createInvoice server action');
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
    console.log(rawFormData);
}
