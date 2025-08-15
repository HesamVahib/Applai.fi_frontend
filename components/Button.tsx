type ButtonProps = {
    children: string;
    onClick: () => void;
    className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white px-2 rounded hover:bg-blue-600 ${className}`}
        >
            {children}
        </button>
    );
}
