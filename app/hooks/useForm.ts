import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "../schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
} = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
        phone: "",
        password: "",
        confirmPassword: "",
        referral: "",
    },
});