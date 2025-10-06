import { forwardRef, type InputHTMLAttributes } from "react";

type InputProps = {
  label?: string
  error?: string
  className?: string
  wrapperClassName?: string
  id: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, wrapperClassName, ...props }, ref) => {
    return (
      <div className={wrapperClassName}>
        {label && (
          <label htmlFor={id} className="block mb-1 text-sm font-medium">
          {label}
        </label>
        )}
        
        <input
          id={id}
          ref={ref} // 👈 RHF userà questo per collegare l'input
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </div>
    )
  }
)

export default Input;
