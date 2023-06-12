import { SignInRule, ResultForAuth } from '../utils/type'
export const signInValidation = (obj: SignInRule): ResultForAuth => {

    const values = Object.values(obj);
    // Validation for all keys 
    // console.log("X" , values)
    for (var x in values) {
        
        if (!values[x]) {
            return {
                isValid: false,
                message: "Please fill  all the fields"
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

    //  validation for password
    if (obj.Password !== obj.Confirm_Password) {
        return {
            isValid: false,
            message: "Both passwords should be same"
        }
    }


    return {
        isValid: true,
        message: "Congratulation!🎉 You are successfully registered"
    }

}

export const somthoing = '';