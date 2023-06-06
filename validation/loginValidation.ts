import { LogInRule, ResultForAuth } from '../utils/type'
export const LoginInValidation = (obj: LogInRule): ResultForAuth => {

    const values = Object.values(obj);
    // Validation for all keys 
    console.log("X", values)
    for (var x in values) {

        if (!values[x]) {
            return {
                isValid: false,
                message: "Please Enter both Email and Password"
            }
        }

    }
    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(obj.Email)) {
        return {
            isValid: false,
            message: "Please Enter the correct Email"
        }
    }
    return {
        isValid: true,
        message: ""
    }

}

export const somthoing = '';