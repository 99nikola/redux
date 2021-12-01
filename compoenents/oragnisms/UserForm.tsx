import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/UserSlice";

const requiredRule = {
    required: "This field is required"
}

const usernameRules = {
    ...requiredRule,
    pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "Username is not valid"
    },
}

const UserForm: React.FC = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const { handleSubmit, control } = useForm({
		mode: "onSubmit",
		reValidateMode: "onChange"
	});

    const onSubmit = (user: any) => {
		dispatch(setUser(user));
        router.push("/");
	}

	const onError = (error: any) => {
		console.log("E: ", error);
	}

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={usernameRules}
                render={({ field, fieldState }) => (
                    <TextField 
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Username"
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                        variant="outlined"
                    />
                )}
            />
            <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={requiredRule}
                render={({ field, fieldState }) => (
                    <TextField 
                        type="email"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Email address"
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                        variant="outlined"
                    />
                )}
            />

            <input type="submit" />
        </form>
    );
}

export default UserForm
