import GuestLayoutTemplate from '@/layouts/guest/guest-simple-layout';

export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <GuestLayoutTemplate title={title} description={description} {...props}>
            {children}
        </GuestLayoutTemplate>
    );
}
