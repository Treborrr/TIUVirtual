import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
}

export const EditableText = ({ value, onChange, className, placeholder, multiline = false }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing) {
      if (multiline && textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.select();
      } else if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [isEditing, multiline]);

  const handleSave = () => {
    onChange(tempValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      handleSave();
    } else if (e.key === 'Enter' && e.ctrlKey && multiline) {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    const sharedProps = {
      value: tempValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTempValue(e.target.value),
      onBlur: handleSave,
      onKeyDown: handleKeyDown,
      className: cn(
        "bg-white/90 border border-tiu-red/30 rounded px-2 py-1 outline-none focus:border-tiu-red",
        className
      ),
      placeholder
    };

    return multiline ? (
      <textarea
        ref={textareaRef}
        {...sharedProps}
        rows={2}
      />
    ) : (
      <input
        ref={inputRef}
        type="text"
        {...sharedProps}
      />
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={cn(
        "cursor-pointer hover:bg-white/20 rounded px-1 py-0.5 transition-colors",
        className
      )}
      title="Click para editar"
    >
      {value || placeholder}
    </div>
  );
};