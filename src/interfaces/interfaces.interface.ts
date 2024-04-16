export interface PropsChildren {
    children?: React.ReactNode;
    className?: string;
}

export interface InputProps {
    className?: string;
    text: string;
    placeholder?: string;
    value?: string;
    type?: 'text' | 'number' | 'email';
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
