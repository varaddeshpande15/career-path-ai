import { Input } from "@/components/ui/input";

export function InputDemo({ type = "text", placeholder = "Enter the text", value, onChange }) {
  return (
    <Input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  );
}
