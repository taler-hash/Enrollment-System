import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/guest-layout';

import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';
import { useState } from 'react';
import Confetti from 'react-confetti-boom';


type LoginForm = {
    child_name: string
    birth_date: Nullable<Date>
    student_id: number|null
    password: string
    parent_name: string
    parent_contact_number: number|null
    parent_email_address: string
    parent_relationship: string
};

export default function Login() {
    const [success, setSuccess] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
        child_name: '',
        birth_date: null,
        student_id: null,
        password: '',
        parent_name: '',
        parent_contact_number: null,
        parent_email_address: '',
        parent_relationship: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('enroll'), {
            onSuccess: () => {
                setSuccess(true);
            }
        });
    };

    return (
        <GuestLayout title={success ? 'Success' : "Enroll Student"} description={success ? 'Student enrolled successfully email will send shortly.' : "Enter necessary fields to enroll student"}>
            <Head title="Log in" />
            {
                !success ?
                (
                    <form  className="flex flex-col gap-6" onSubmit={submit}>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="child_name">Child Name</Label>
                                <InputText
                                    id="child_name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    value={data.child_name}
                                    onChange={(e) => setData('child_name', e.target.value)}
                                />
                                <InputError message={errors.child_name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="birth_date">Birth date</Label>
                                <Calendar
                                    style={{height: '35px'}}
                                    id="birth_date"
                                    value={data.birth_date}
                                    onChange={(e) => setData('birth_date', e.value)}/>
                                <InputError message={errors.birth_date} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="student_id">Student ID</Label>
                                <InputNumber
                                    id="student_id"
                                    required
                                    autoFocus
                                    value={data.student_id}
                                    useGrouping={false}
                                    onChange={(e) => setData('student_id', e.value)}
                                />
                                <InputError message={errors.student_id} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="parent_name">Parent Name</Label>
                                <InputText
                                    id="parent_name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    value={data.parent_name}
                                    onChange={(e) => setData('parent_name', e.target.value)}
                                />
                                <InputError message={errors.parent_name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="parent_contact_number">Parent Contact Number</Label>
                                <InputNumber
                                    id="parent_contact_number"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    value={data.parent_contact_number}
                                    useGrouping={false}
                                    onChange={(e) => setData('parent_contact_number', e.value)}
                                />
                                <InputError message={errors.parent_contact_number} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="parent_email_address">Parent Email address</Label>
                                <InputText
                                    id="parent_email_address"
                                    type="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    value={data.parent_email_address}
                                    onChange={(e) => setData('parent_email_address', e.target.value)}
                                    placeholder="email@example.com"
                                />
                                <InputError message={errors.parent_email_address} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="parent_relationship">Parent Relationship</Label>
                                <InputText
                                    id="parent_relationship"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    value={data.parent_relationship}
                                    onChange={(e) => setData('parent_relationship', e.target.value)}
                                />
                                <InputError message={errors.parent_relationship} />
                            </div>
                            <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Enroll
                            </Button>
                        </div>
                    </form>
                ) : (
                    <Confetti />
                )
            }
            
        </GuestLayout>
    );
}
