import { useState } from "react"
import { postRequest } from "../../utils/api-instance";
import { useDispatch } from "react-redux";
import { setAuthenticatedUser } from "../../redux/auth.slice";
import { setSessionStorage } from "../../utils/functions";
import { useNavigate } from "react-router-dom";

const initialState = {
    currentStep: "email",
    email: "",
    password: "",
    currentStepValue: 1,
    loading: false,
    error: {
        password: ""
    }
};

function useAuthHook() {
    const [authState, setAuthState] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        setAuthState(s => ({ ...s, loading: true }))
        try {
            const response = await postRequest('login/', {
                username: authState?.email,
                password: authState?.password
            }, {})
            const { token, user_id } = response?.data
            setSessionStorage({ userId: user_id, token })
            const responseUser = await getRequest('customer-list/')
            const user = responseUser?.data?.find(x => x?.id == user_id)
            dispatch(setAuthenticatedUser({
                user
            }))
            setAuthState(initialState)
            navigate('/dashboard')
        } catch (error) {
            setAuthState(s => ({ ...s, loading: false }))
        }
    }
    const validatePassword = (password) => {
        const minLength = 6;
        const hasNumberOrSpecialChar = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);
        return password.length >= minLength && hasNumberOrSpecialChar;
    };

    const handleOnChangeInput = ({ stateValue, value }) => {
        if (stateValue === "password" && authState.currentStep === "password") {
            setAuthState(s => ({
                ...s,
                [stateValue]: value,
                error: { ...s.error, password: "" }
            }));
            // if (validatePassword(value)) {
            //     setAuthState(s => ({
            //         ...s,
            //         [stateValue]: value,
            //         error: { ...s.error, password: "" }
            //     }));
            // } else {
            //     setAuthState(s => ({
            //         ...s,
            //         [stateValue]: value,
            //         error: { ...s.error, password: "Password must be at least 6 characters long and include at least one number or special character." }
            //     }));
            // }
        } else {
            setAuthState(s => ({
                ...s,
                [stateValue]: value
            }));
        }
    };

    const onSubmitData = async ({ currentState }) => {
        if (currentState === "email") {
            return setAuthState(s => ({
                ...s,
                currentStep: "password",
                currentStepValue: 2
            }))
        }
        if (authState.currentStep === "password") {
            handleLogin()
        }
    }

    return ({
        authState,
        handleOnChangeInput,
        onSubmitData
    })
}

export default useAuthHook