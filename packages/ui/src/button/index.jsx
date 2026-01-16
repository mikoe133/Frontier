export default function Button({ text, children, onClick, className, ...props }) {
    return (
        <button 
            className={className}
            onClick={onClick}
            {...props}
        >
            {text}{children}
        </button>
    );
}
