"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Send, CheckCircle, Loader2, Phone } from "lucide-react";

interface ContactModalProps {
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  buttonText?: string;
  showIcon?: boolean;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactModal = ({
  variant = "outline",
  size = "lg",
  className = "",
  buttonText = "צור קשר",
  showIcon = true,
}: ContactModalProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "שם מלא הוא שדה חובה";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "שם חייב להכיל לפחות 2 תווים";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "אימייל הוא שדה חובה";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "כתובת אימייל לא תקינה";
    }

    // Phone validation (Israeli phone format)
    const phoneRegex = /^0(5[0-9]|[2-4]|[8-9]|7[0-9])-?\d{7}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "טלפון הוא שדה חובה";
    } else if (!phoneRegex.test(formData.phone.replace(/-/g, ""))) {
      newErrors.phone = "מספר טלפון לא תקין";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "הודעה היא שדה חובה";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "ההודעה חייבת להכיל לפחות 10 תווים";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after showing success
    setTimeout(() => {
      setOpen(false);
      setIsSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {buttonText}
          {showIcon && <Phone className="me-2 w-4 h-4" />}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] border-primary/20 max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center">תודה על פנייתך!</h3>
            <p className="text-muted-foreground text-center">
              נחזור אליך בהקדם האפשרי
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  התחל
                </span>{" "}
                את המסע הדיגיטלי שלך
              </DialogTitle>
              <DialogDescription className="text-base">
                מלא את הפרטים ונחזור אליך עם הצעה מותאמת אישית
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4">
              {/* Two column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    שם מלא <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="יוסף דוידי"
                    className={`transition-all duration-300 ${
                      errors.fullName
                        ? "border-destructive focus-visible:ring-destructive"
                        : "focus-visible:ring-primary"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive animate-fade-in">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    אימייל <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    dir="ltr"
                    className={`text-left transition-all duration-300 ${
                      errors.email
                        ? "border-destructive focus-visible:ring-destructive"
                        : "focus-visible:ring-primary"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive animate-fade-in">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    טלפון <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="050-1234567"
                    dir="ltr"
                    className={`text-left transition-all duration-300 ${
                      errors.phone
                        ? "border-destructive focus-visible:ring-destructive"
                        : "focus-visible:ring-primary"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive animate-fade-in">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company (Optional) */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    שם החברה / העסק{" "}
                    <span className="text-muted-foreground">(אופציונלי)</span>
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="שם העסק שלך"
                    className="transition-all duration-300 focus-visible:ring-primary"
                  />
                </div>

                {/* Message - Full width */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    איך נוכל לעזור? <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ספר לנו על הפרויקט שלך..."
                    rows={3}
                    className={`flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-300 ${
                      errors.message
                        ? "border-destructive focus-visible:ring-destructive"
                        : "border-input focus-visible:ring-primary"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive animate-fade-in">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full pulse-glow mt-4"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="me-2 h-4 w-4 animate-spin" />
                    שולח...
                  </>
                ) : (
                  <>
                    שלח פנייה
                    <Send className="me-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-3">
                בלחיצה על &quot;שלח פנייה&quot; אתה מסכים ל
                <a href="#" className="text-primary hover:underline">
                  תנאי השימוש
                </a>{" "}
                ול
                <a href="#" className="text-primary hover:underline">
                  מדיניות הפרטיות
                </a>
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
