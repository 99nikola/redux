import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchUser, setUser } from "../../store/user/UserActions";

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
		// dispatch(setUser(user));
        dispatch(fetchUser());
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
                        label="Username"
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
                        label="Email address"
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                        variant="outlined"
                    />
                )}
            />

            <Button type="submit" variant="contained">
                Submit
            </Button>
        </form>
    );
}

export default UserForm
